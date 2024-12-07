-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('Important', 'Work', 'Personal', 'Meeting', 'Spam');

-- CreateTable
CREATE TABLE "Email" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "tag" "Tag" NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);
