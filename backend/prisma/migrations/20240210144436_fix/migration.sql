-- CreateTable
CREATE TABLE "auction_winners" (
    "userId" INTEGER NOT NULL,
    "auctionId" INTEGER NOT NULL,

    CONSTRAINT "auction_winners_pkey" PRIMARY KEY ("userId","auctionId")
);

-- AddForeignKey
ALTER TABLE "auction_winners" ADD CONSTRAINT "auction_winners_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auction_winners" ADD CONSTRAINT "auction_winners_auctionId_fkey" FOREIGN KEY ("auctionId") REFERENCES "auctions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
