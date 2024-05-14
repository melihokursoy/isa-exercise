(async function seedUsers() {
    const { PrismaClient } = require('../src/generated/prisma-client')
    const prisma = new PrismaClient()

    const users = [
        {
            "id": "0e4d8268-95f8-4fa5-a740-78b29187020e",
            "fullName": "John Doe",
            "email": "johndoe@mail.com",
            "password": "123"
        },
        {
            "id": "81e192f1-7fff-468d-bdcb-3fc9196a5123",
            "fullName": "Jane Doe",
            "email": "janedoe@mail.com",
            "password": "123"
        },
        {
            "id": "18d69401-ec1d-4a8d-ba15-eadb04e51ca1",
            "fullName": "Jack Doe",
            "email": "jackdoe@mail.com",
            "password": "123"
        }
    ]

    for (let user of users) {
        await prisma.user.upsert({
            where: { id: user.id },
            update: { ...user },
            create: { ...user }
        })
    }

    await prisma.$disconnect()
})()



