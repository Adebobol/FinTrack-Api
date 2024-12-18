/*
  Warnings:

  - You are about to drop the `saving` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `saving` DROP FOREIGN KEY `Saving_userId_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_userId_fkey`;

-- DropTable
DROP TABLE `saving`;

-- CreateTable
CREATE TABLE `savings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalName` VARCHAR(191) NOT NULL,
    `targetAmount` INTEGER NOT NULL,
    `savedAmount` INTEGER NOT NULL,
    `deadline` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `savings` ADD CONSTRAINT `savings_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
