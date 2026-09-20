import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import paper from "@/assets/paper.jpg";
import { ActionBar } from "@/components/invite/ActionBar";
import { AddToCalendar } from "@/components/invite/AddToCalendar";
import { BackgroundMusic } from "@/components/invite/BackgroundMusic";
import { Countdown } from "@/components/invite/Countdown";
import { Envelope } from "@/components/invite/Envelope";
import { Hero } from "@/components/invite/Hero";
import { InviteFooter } from "@/components/invite/InviteFooter";
import { Note } from "@/components/invite/Note";
import { ScrollThread } from "@/components/invite/ScrollThread";
import { Venue } from "@/components/invite/Venue";
import { invite } from "@/config/invite";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const title = "Rev. Genious & Dr. Liza Dora — Wedding Invitation";
// Optimal length <= 125 chars for social preview cards (WhatsApp, Facebook, Twitter, LinkedIn)
const ogDescription = "Join us to celebrate the Holy Matrimony of Rev. Genious & Dr. Liza Dora on Dec 31, 2026 at Mawlai Church, Shillong.";
// Optimal length 150-160 chars for Google search results
const metaDescription = "Wedding invitation for Rev. Genious Marwein & Dr. Liza Dora Marbaniang. Holy Matrimony on Thursday, 31 Dec 2026 at Mawlai Presbyterian Church, Shillong.";

const productionUrl = "https://liza-weds-genious.workers.dev";
const ogImageUrl = `${productionUrl}/og-image.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: metaDescription },
      { property: "og:site_name", content: "Rev. Genious & Dr. Liza Dora Wedding" },
      { property: "og:title", content: title },
      { property: "og:description", content: ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${productionUrl}/` },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:secure_url", content: ogImageUrl },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Wedding Invitation of Rev. Genious Marwein & Dr. Liza Dora Marbaniang" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: ogDescription },
      { name: "twitter:image", content: ogImageUrl },
      { name: "twitter:image:alt", content: "Wedding Invitation of Rev. Genious Marwein & Dr. Liza Dora Marbaniang" },
    ],
    links: [{ rel: "canonical", href: `${productionUrl}/` }],
  }),
  component: Invitation,
});

function Invitation() {
  useSmoothScroll();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <BackgroundMusic shouldPlay={opened} />
      <Envelope onOpen={() => setOpened(true)} />
      <ScrollThread />
      <main
        className="grain relative min-h-screen bg-paper text-ink"
        style={{ backgroundImage: `url(${paper})`, backgroundSize: "480px" }}
      >
        <Hero ready={opened} />
        <Note />
        <Countdown />
        <Venue />
        <AddToCalendar />
        <InviteFooter />
      </main>
      <ActionBar />
    </>
  );
}

