-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "bookName" TEXT NOT NULL,
    "authorName" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
