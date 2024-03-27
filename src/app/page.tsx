"use client";

import { useState } from "react";
import DarkModeToggler from "@/components/darkModeToggler";
import Sports from "@/components/sportsPage";
import Tickets from "@/components/tickets";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="w-full bg-slate-100 dark:bg-[#292b32]">
        <main className="py-20 relative mx-auto min-h-screen w-full max-w-[1120px]">
          <Sports />
          <Tickets />
          <DarkModeToggler toggleDarkMode={toggleDarkMode} />
        </main>
      </div>
    </div>
  );
}
