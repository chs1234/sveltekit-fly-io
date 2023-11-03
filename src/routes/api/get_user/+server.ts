import { db } from "$lib/database";
import { json } from "@sveltejs/kit";

async function getUser() {
    try {
        const user = await db.user.findMany({ where: { role: "ADMIN" }});
        return user;
    } catch(e) {
        throw new Error('could not find user')
    }    
}

export async function GET() {
    const user = await getUser();
    return json(user);
}