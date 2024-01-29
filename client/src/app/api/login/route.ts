import { cookies } from 'next/headers'
export async function POST(req: Request) {

    const {userName, password} = await req.json();
    try {
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({userName, password}),
          });


          const data = await response.json();
          const token = data.token;
          
          if(token){
            cookies().set('token', token)
            return new Response("success", {status: 200})
          }
          else {
              return new Response("Authentication error",{status: 401});
          }

    } catch (error) {
       return new Response("Authentication error",{status: 401});
    }
  }