(async function seedIsa() {
    const { PrismaClient } = require('../src/generated/prisma-client')
    const prisma = new PrismaClient()

    const isaOptions = [
        {
            "id": "ec20b88d-ab06-43a1-826c-41e914eff424",
            "name": "low risk / return"
        },
        {
            "id": "5965fbac-3b69-4b81-9de9-67a55897583b",
            "name": "medium risk / return"
        },
        {
            "id": "87708d76-189c-4be4-83d6-119317c6eb39",
            "name": "high risk / return"
        },
        {
            "id": "3548bfb5-5f2e-4bbc-8b5b-293b64697150",
            "name": "very high risk / return"
        }
    ]

    for (let isaOption of isaOptions) {
        await prisma.isaOptions.upsert({
            where: { id: isaOption.id },
            update: { ...isaOption },
            create: { ...isaOption }
        })
    }

    await prisma.$disconnect()
})()



