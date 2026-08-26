CREATE TABLE `scamImageHashes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`hash` text NOT NULL,
	`added_at` integer,
	`added_by` text(20),
	FOREIGN KEY (`added_by`) REFERENCES `users`(`id`) ON UPDATE cascade ON DELETE restrict
);
--> statement-breakpoint
CREATE UNIQUE INDEX `scamImageHashes_hash_unique` ON `scamImageHashes` (`hash`);--> statement-breakpoint
INSERT INTO `scamImageHashes` (id, hash, added_at, added_by) VALUES
    (1, 'f46178787e303e32', 0, '1'),
    (2, 'f8b0e0ce6b686b2c', 0, '1'),
    (3, 'ff00689d1e0f1f0e', 0, '1'),
    (4, '18bd1d0f0f4ee1e1', 0, '1');
