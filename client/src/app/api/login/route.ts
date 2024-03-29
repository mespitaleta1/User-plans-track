import { cookies } from 'next/headers';
export async function POST(req: Request) {
  const { userName, password } = await req.json();
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password }),
    });

    const data = await response.json();
    const token = data.token;

    console.log({ URL: `${process.env.API_BASE_URL}/api/login`, token });

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
