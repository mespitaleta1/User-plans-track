import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    const response = await fetch(`${process.env.API_BASE_URL}/api/user/profile`, { headers: { authorization: token } });
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return new Response('Authentication error', { status: 401 });
  }
}
