-- AlterTable
ALTER TABLE `transactions` MODIFY `type` ENUM('income', 'expense') NOT NULL DEFAULT 'income';
