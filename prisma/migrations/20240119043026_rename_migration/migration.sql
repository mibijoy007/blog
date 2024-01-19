/*
  Warnings:

  - You are about to drop the column `catagory` on the `Post` table. All the data in the column will be lost.
  - Added the required column `category` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable ( bofore code )
-- ALTER TABLE "Post" DROP COLUMN "catagory",
-- ADD COLUMN     "category" TEXT NOT NULL;

-- Now running (( after code ))
ALTER TABLE "Post"
RENAME COLUMN "catagory" TO "category";