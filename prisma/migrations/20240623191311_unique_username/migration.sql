/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Roast` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Roast_username_key" ON "Roast"("username");
