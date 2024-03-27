"use client";

import sportsFranchiseData from "../data/sportsData";
import FranchiseItem from "./franchiseItem";
import AdvartisementItem from "./advertisementItem";

export default function Sports() {
  return (
    <section className="grid">
      <h2 className="mb-5 text-2xl font-bold underline decoration-[#738fff] underline-offset-8 text-slate-950 dark:text-slate-100">
        Sports
      </h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {sportsFranchiseData.map((each) => (
          <FranchiseItem franchiseObj={each} key={each.id} />
        ))}
        <AdvartisementItem key={sportsFranchiseData.length - 1} />
      </ul>
      <button
        type="button"
        className="my-10 px-3 py-2 bg-blue-500 text-white rounded-md justify-self-center self-center"
      >
        See More
      </button>
    </section>
  );
}
