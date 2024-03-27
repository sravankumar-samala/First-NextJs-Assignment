"use client";

import Image from "next/image";

interface TicketItemProps {
  id: string;
  imageUrl: string;
  destination: string;
  dateTime: string;
  address: string;
  buttonText: string;
}

export default function TicketItem({
  ticketItemObj,
}: {
  ticketItemObj: TicketItemProps;
}) {
  const { imageUrl, destination, dateTime, address, buttonText } =
    ticketItemObj;
  return (
    <li className="p-3 basis-[256px] shrink-0 drop-shadow-lg bg-white dark:bg-[#3b3e47] dark:text-white text-center">
      <Image
        src={imageUrl}
        alt="ticket"
        width={300}
        height={500}
        className="mb-8"
      />
      <hr className="w-[90%] mx-auto border-t-2 border-dashed border-slate-300 dark:border-slate-500" />
      <div className="relative grid place-items-center gap-3">
        <TicketCuts direction="left-[-1rem]" rotate="rotate-90" />
        <TicketCuts direction="right-[-1rem]" rotate="-rotate-90" />
        <h2 className="mt-6 font-semibold text-[1.35rem]">{destination}</h2>
        <p className="text-md">{dateTime}</p>
        <p className="text-md max-w-52">{address}</p>
        <button
          type="button"
          className="py-2 w-full text-lg bg-black text-white"
        >
          {buttonText}
        </button>
      </div>
    </li>
  );
}

function TicketCuts({
  direction,
  rotate,
}: {
  direction: string;
  rotate: string;
}) {
  return (
    <span
      className={`absolute top-[-10px] ${direction} w-6 h-4 bg-[#f1f5f9] dark:bg-[#201e2c] rounded-t-full transform ${rotate} shadow-inner shadow-gray-500/20`}
    ></span>
  );
}
