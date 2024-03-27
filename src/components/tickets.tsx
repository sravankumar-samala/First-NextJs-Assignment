"use client";

import curouselButtonsData from "@/data/curouselButtonsData";
import CurouselButton from "./curouselButton";
import TicketItem from "./ticketItem";
import ticketItemData from "@/data/ticketItemData";

export default function Tickets() {
  return (
    <div className=" dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] min-h-96 p-1">
      <div className="max-w-[960px] mx-auto relative">
        <h1 className="dark:text-white text-3xl sm:text-5xl font-bold mt-20 mb-8 text-center">
          Collection Spotlight
        </h1>
        <p className="dark:text-white text-center max-w-[900px] mx-auto">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <div className="relative min-h-52">
          {curouselButtonsData.map((each, i) => (
            <CurouselButton key={each.id} buttonObj={each} />
          ))}
          <ul className="my-16 flex overflow-x-auto gap-4 max-w-[800px] mx-auto">
            {ticketItemData.map((each) => (
              <TicketItem key={each.id} ticketItemObj={each} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
