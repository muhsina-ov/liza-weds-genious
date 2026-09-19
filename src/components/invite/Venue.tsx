import { motion } from "motion/react";
const mapImg = "https://media.invitestory.in/marigold-bhavan/src/assets/map.jpg";
import navyFloral from "@/assets/navy-floral.jpg";
import {
  directionsUrl,
  invite,
  mapsUrl,
  receptionDirectionsUrl,
  receptionMapsUrl,
} from "@/config/invite";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

const tapFeedback = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(10);
};

export function Venue() {
  return (
    <section className="relative px-6 pb-20 text-center sm:pb-28 overflow-hidden">
      {/* Decorative floral in background */}
      <img
        src={navyFloral}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 w-48 -translate-y-1/2 opacity-20 mix-blend-multiply sm:w-60"
      />

      <Reveal>
        <Divider className="mb-10" />
        <p className="caps text-[0.6rem] text-navy font-medium">Locations & Schedule</p>
        <h2 className="script mt-3 text-4xl text-ink sm:text-5xl">Venues of Celebration</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-sepia">
          Join us for the sacred wedding ceremony followed by the evening reception.
        </p>
      </Reveal>

      {/* Grid for Church and Reception */}
      <div className="mx-auto mt-10 grid max-w-xl gap-8 sm:grid-cols-2">
        {/* Church Ceremony Card */}
        <Reveal delay={0.15}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-navy/20 bg-paper/85 p-6 shadow-[0_16px_36px_-24px_rgba(20,35,65,0.4)] backdrop-blur-xs text-center">
            <div>
              <span className="caps inline-block rounded-full bg-navy/10 px-3 py-1 text-[0.52rem] font-semibold text-navy">
                Ceremony · 1:00 P.M
              </span>
              <h3 className="font-serif mt-4 text-xl font-bold uppercase tracking-wide text-ink">
                {invite.ceremony.name}
              </h3>
              <p className="mt-1 text-xs text-navy font-medium">
                {invite.ceremony.subtitle}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-sepia">
                {invite.ceremony.address}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                onClick={tapFeedback}
                whileTap={{ scale: 0.96 }}
                className="caps flex min-h-11 items-center justify-center rounded-full bg-navy px-4 text-[0.52rem] font-medium text-paper transition hover:bg-navy-light"
              >
                Open Church in Maps
              </motion.a>
              <motion.a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                onClick={tapFeedback}
                whileTap={{ scale: 0.96 }}
                className="caps flex min-h-11 items-center justify-center rounded-full border border-navy/30 px-4 text-[0.52rem] font-medium text-navy transition hover:bg-navy/5"
              >
                Get Directions
              </motion.a>
            </div>
          </div>
        </Reveal>

        {/* Reception Venue Card */}
        <Reveal delay={0.25}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-navy/20 bg-paper/85 p-6 shadow-[0_16px_36px_-24px_rgba(20,35,65,0.4)] backdrop-blur-xs text-center">
            <div>
              <span className="caps inline-block rounded-full bg-gold/20 px-3 py-1 text-[0.52rem] font-semibold text-sepia">
                Reception · 5:00 P.M Onwards
              </span>
              <h3 className="font-serif mt-4 text-xl font-bold uppercase tracking-wide text-ink">
                {invite.reception.name}
              </h3>
              <p className="mt-1 text-xs text-gold font-medium">
                {invite.reception.subtitle}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-sepia">
                {invite.reception.address}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <motion.a
                href={receptionMapsUrl}
                target="_blank"
                rel="noreferrer"
                onClick={tapFeedback}
                whileTap={{ scale: 0.96 }}
                className="caps flex min-h-11 items-center justify-center rounded-full bg-ink px-4 text-[0.52rem] font-medium text-paper transition hover:bg-ink/90"
              >
                Open Reception in Maps
              </motion.a>
              <motion.a
                href={receptionDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                onClick={tapFeedback}
                whileTap={{ scale: 0.96 }}
                className="caps flex min-h-11 items-center justify-center rounded-full border border-ink/30 px-4 text-[0.52rem] font-medium text-ink transition hover:bg-ink/5"
              >
                Get Directions
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Visual map preview banner */}
      <Reveal delay={0.35}>
        <div className="grain group mx-auto mt-10 block max-w-xl overflow-hidden rounded-2xl border border-navy/20 shadow-md">
          <div className="relative">
            <img
              src={mapImg}
              alt="Map showing Shillong venues"
              width={1024}
              height={500}
              loading="lazy"
              className="h-44 w-full object-cover sm:h-52"
            />
            <div className="absolute inset-0 bg-navy/20 backdrop-blur-[0.5px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="caps rounded-full bg-paper/90 px-6 py-2.5 text-[0.55rem] font-semibold text-navy shadow-sm backdrop-blur-sm">
                Shillong, Meghalaya
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
