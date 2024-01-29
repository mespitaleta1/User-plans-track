import { cookies } from 'next/headers';
export async function POST(req: Request) {
  const { userName, password } = await req.json();
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/login`, {
      method: 'POST' as const,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password }),
    } as RequestInit);

    const data = await response.json();
    const token = data.token;

    if (token) {
      cookies().set('token', token);
      return new Response('success', { status: 200 });
    } else {
      return new Response('Authentication error', { status: 401 });
    }
  } catch (error) {
    return new Response('Authentication error', { status: 401 });
  }
}
