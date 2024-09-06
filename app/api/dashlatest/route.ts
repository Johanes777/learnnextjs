export const dynamic = 'force-static'
import { fetchLatestInvoices } from '@/app/lib/data';
 
export async function GET() {
  const latest = await fetchLatestInvoices();
 
  return Response.json({ latest })
}