"use client";

import Image from "next/image";

interface CurouselButtonsProps {
  id: string;
  imageUrl: string;
  altText: string;
  direction: string;
}

export default function CurouselButton({
  buttonObj,
}: {
  buttonObj: CurouselButtonsProps;
}) {
  const { imageUrl, altText, direction } = buttonObj;
  const alignClass = direction === "left" ? "left-0" : "right-0";

  return (
    <button
      className={`absolute ${alignClass} top-1/2 transform -translate-y-1/2 border-2 border-solid border-blue-500 py-3 px-2 rounded-md z-10`}
    >
      <Image src={imageUrl} alt={altText} width={10} height={10} />
    </button>
  );
}
