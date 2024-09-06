import { http, HttpResponse } from "msw"

const BASE_URL = import.meta.url
export const handlers = [
	http.get(BASE_URL + "/admin/get-robot-activation-status", () => {
		return HttpResponse.text(Math.round(Math.random() * 1).toString())
	}),
	http.get(BASE_URL + "/admin/machine-callibration", () => {
		return HttpResponse.text(Math.round(Math.random() * 1).toString())
	}),
	http.get(BASE_URL + "/admin/robot-activation", () => {
		return HttpResponse.text(Math.round(Math.random() * 1).toString())
	}),
	http.get(BASE_URL + "/order/get-order-id", () => {
		return HttpResponse.json({ order_id: "AA01-SMKMM" })
	}),
	http.get(BASE_URL + "/order/get-order-list-of-today", () => {
		return HttpResponse.json([
			{
				order_id: "AA01-SMKMM",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			},
			{
				order_id: "AA02-SAKL",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			},
			{
				order_id: "AA03-EWI",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			},
			{
				order_id: "AA04-DSNK",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			},
			{
				order_id: "AA05-CXNM",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			}
		])
	}),
	http.get(BASE_URL + "/error/get-error", () => {
		return HttpResponse.json({ status: 0 })
	}),
	http.get(BASE_URL + "/product/get-product-list", () => {
		return HttpResponse.json([
			{
				material_id: 1,
				material_name: "Mie Ayam",
				image_file_name: "String",
				flag_item: "String",
				noodle_type: "String",
				flag_delete: "String",
				address: "String",
				callback_address: "String",
				quantity: 2,
				price_rate: 10000,
				max_quantity: 4
			}
		])
	}),
	http.get(BASE_URL + "/admin/get-admin-credentials", () => {
		return HttpResponse.json({ value: "admin" })
	}),
	http.get(BASE_URL + "/dashboard/reports", () => {
		return HttpResponse.json([
			{
				order_id: "AA01-SMKMM",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			},
			{
				order_id: "AA02-SAKL",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			},
			{
				order_id: "AA03-EWI",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			},
			{
				order_id: "AA04-DSNK",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			},
			{
				order_id: "AA05-CXNM",
				total_prices: 2000,
				payment_type: "payment_type",
				payment_status: "payment_status",
				payment_id: "payment_id",
				order_details: [
					{
						material_id: "sasa",
						material_name: "Ayam bakar limau",
						qty: 2,
						price_rate: 2000,
						sub_total_price: 3000
					},
					{
						material_id: "wuqiwq",
						material_name: "Ayam bakar limau",
						qty: 1,
						price_rate: 2000,
						sub_total_price: 5000
					}
				]
			}
		])
	}),
]
