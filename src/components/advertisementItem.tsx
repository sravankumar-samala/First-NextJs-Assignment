"use client";

import Image from "next/image";

export default function AdvartisementItem() {
  return (
    <li className="p-2 drop-shadow-lg bg-slate-200 dark:bg-[#3b3e47] max-w-[200px] flex-grow">
      <Image
        src="https://res.cloudinary.com/dwddin0nz/image/upload/v1711436019/Ad-poster_xtvwh4.png"
        alt="advertisement"
        width={200}
        height={200}
      />
      <div className="p-3 dark:text-white">
        <h2 className="font-[600] text-lg my-3">Advertisement title</h2>
        <p className="text-wrap text-[.8rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </li>
  );
}
