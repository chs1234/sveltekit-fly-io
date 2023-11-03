import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'
import crypto from 'crypto'

const prisma = new  PrismaClient();

async function seed() {
    const username = "test";
    await prisma.user.delete({ where: { username: username }}).catch(() => {
        console.log("Delete database");
    });

    const hashedPassword = await bcrypt.hash("1234", 10)
    
    const user = await prisma.user.create({
        data: {
            username: username,
            passwordHaah: hashedPassword,
            userAuthToken: crypto.randomUUID(),
            role: "ADMIN"
        }
    });

    if (user)
        console.log(`Database has been seeded.! \n${user}`)
}

seed()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

