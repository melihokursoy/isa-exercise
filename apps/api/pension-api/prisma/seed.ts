(async function seedPensions() {
    const { PrismaClient } = require('../src/generated/prisma-client')
    const prisma = new PrismaClient()

    const pensions = [
        {
            "userId": "0e4d8268-95f8-4fa5-a740-78b29187020e",
            "savings": 72328.42,
            "employer": "Codecrib Software LTD"
        }
    ]

    for (let pension of pensions) {
        await prisma.pension.upsert({
            where: { userId: pension.userId },
            update: { ...pension },
            create: { ...pension }
        })
    }

    await prisma.$disconnect()
})()



