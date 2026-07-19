"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { OpeningGate } from "./OpeningGate";
import { Hero } from "./Hero";

export function InviteExperience() {
  const [opened, setOpened] = useState(false);

  // Lock scrolling while the gate is up, so visitors see the monogram first.
  useEffect(() => {
    document.documentElement.style.overflow = opened ? "" : "hidden";
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <>
      <AnimatePresence>
        {!opened && <OpeningGate onOpen={() => setOpened(true)} />}
      </AnimatePresence>
      <Hero revealed={opened} />
    </>
  );
}
