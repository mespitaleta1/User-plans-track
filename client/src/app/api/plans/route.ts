import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('token')?.value;
        const response = await fetch('http://localhost:3001/api/plans', {headers: {authorization: token}});
        const data = await response.json()
        return Response.json(data)
    } catch (error) {
       return new Response("Authentication error",{status: 401});
    }
  }