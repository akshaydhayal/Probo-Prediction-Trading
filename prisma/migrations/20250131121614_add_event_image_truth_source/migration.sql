-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "imageUrl" TEXT NOT NULL DEFAULT 'https://cdn-icons-png.flaticon.com/512/9304/9304477.png',
ADD COLUMN     "sourceOfTruth" TEXT NOT NULL DEFAULT 'Website';
