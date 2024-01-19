/*
  Warnings:

  - You are about to drop the column `category` on the `Post` table. All the data in the column will be lost.
  - Added the required column `catagory` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "category",
ADD COLUMN     "catagory" TEXT NOT NULL;

-- -- Now this
-- ALTER TABLE "Post"
-- RENAME COLUMN "biograpy" TO "category";
