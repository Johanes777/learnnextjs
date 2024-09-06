"use client"
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import React from "react";
import useSWR from "swr";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

const fetcher = (url:any) => fetch(url).then((res) => res.json());

export default async function CardWrapper() {
  const { data, error, isLoading } = useSWR('/api/dashboard', fetcher, { refreshInterval: 5000 });

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" value={data.sum.totalPaidInvoices} type="collected" />
      <Card title="Pending" value={data.sum.totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={data.sum.numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={data.sum.numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
