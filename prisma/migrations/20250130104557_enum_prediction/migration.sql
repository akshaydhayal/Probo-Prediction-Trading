/*
  Warnings:

  - You are about to drop the column `label` on the `Betting` table. All the data in the column will be lost.
  - Added the required column `prediction` to the `Betting` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Prediction" AS ENUM ('YES', 'NO', 'PENDING');

-- AlterTable
ALTER TABLE "Betting" DROP COLUMN "label",
ADD COLUMN     "prediction" "Prediction" NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "result" "Prediction" NOT NULL DEFAULT 'PENDING';
