import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;

    if (!token) {
      return new Response('Authentication error', { status: 401 });
    }

    const response = await fetch(`${process.env.API_BASE_URL}/api/plans`, {
      headers: { authorization: token },
    });
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return new Response('Authentication error', { status: 401 });
  }
}
