export const dynamic = 'force-static'
import { fetchCardData } from '@/app/lib/data';
 
export async function GET() {
  const sum = await fetchCardData();
 
  return Response.json({ sum })
}