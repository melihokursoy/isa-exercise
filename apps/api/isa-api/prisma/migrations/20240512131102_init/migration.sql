-- CreateTable
CREATE TABLE "IsaOptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Isa" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "isaOptionId" TEXT NOT NULL,
    "savings" REAL NOT NULL
);
