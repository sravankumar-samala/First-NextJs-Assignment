"use client";

import Image from "next/image";

interface FranchiseItemProps {
  name: string;
  id: string;
  imageUrl: string;
  sportType: string;
  totalEvents: number;
}

export default function FranchiseItem({
  franchiseObj,
}: {
  franchiseObj: FranchiseItemProps;
}) {
  const { name, imageUrl, sportType, totalEvents } = franchiseObj;

  return (
    <li className="p-2 drop-shadow-lg dark:text-white bg-slate-200 dark:bg-[#3b3e47] flex-grow">
      <Image
        src={imageUrl}
        width={200}
        height={500}
        alt={name}
        className="mx-auto"
      />
      <h2 className="font-[500] my-3 text-lg text-center sm:text-left">
        {name}
      </h2>
      <div className="p-2 flex items-center justify-between gap-5 bg-white  dark:bg-[#292b32] dark:text-white">
        <SportItemContent
          heading={"Total Events"}
          content={`${totalEvents} Events`}
        />
        <SportItemContent heading={"Sport"} content={sportType} />
      </div>
    </li>
  );
}

interface SportItemContentProps {
  heading: string;
  content: string;
}

function SportItemContent({ heading, content }: SportItemContentProps) {
  return (
    <div>
      <h3 className="text-sm text-slate-600 dark:text-slate-300">{heading}</h3>
      <p className="font-[500]">{content}</p>
    </div>
  );
}
