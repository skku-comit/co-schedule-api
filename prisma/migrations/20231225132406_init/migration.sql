-- CreateTable
CREATE TABLE "Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" DATETIME NOT NULL,
    "description" TEXT
);
