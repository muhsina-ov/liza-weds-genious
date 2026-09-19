import { invite } from "@/config/invite";
import navyFloral from "@/assets/navy-floral.jpg";
import { Divider } from "./Divider";
import { Flourish } from "./Ornaments";
import { Reveal } from "./Reveal";

export function Note() {
  return (
    <section className="relative px-6 py-20 text-center sm:py-28 overflow-hidden">
      {/* Subtle navy floral background corner */}
      <img
        src={navyFloral}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-12 w-44 opacity-25 mix-blend-multiply sm:w-56"
      />
      <img
        src={navyFloral}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 w-44 -scale-100 opacity-25 mix-blend-multiply sm:w-56"
      />

      <Reveal>
        <Divider className="mb-10" />
      </Reveal>

      {/* Bible Verse */}
      <Reveal delay={0.1}>
        <div className="mx-auto max-w-md rounded-2xl border border-navy/15 bg-paper-deep/40 px-6 py-8 shadow-xs backdrop-blur-xs">
          <p className="font-serif italic text-lg leading-relaxed text-ink/90 sm:text-xl">
            &ldquo;{invite.bibleVerse.quote}&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-gold/60" />
            <p className="caps text-[0.62rem] font-semibold text-navy">
              {invite.bibleVerse.reference}
            </p>
            <span className="h-px w-6 bg-gold/60" />
          </div>
        </div>
      </Reveal>

      {/* Formal Parents & Solemnization Invitation */}
      <div className="mx-auto mt-12 max-w-lg space-y-6">
        <Reveal delay={0.2}>
          <p className="caps text-[0.6rem] text-navy font-medium tracking-[0.25em]">
            With the blessings of God and our families
          </p>
          <p className="mt-4 text-base sm:text-lg font-semibold text-ink">
            {invite.groomParents}
          </p>
          <p className="mt-1 text-sm italic text-sepia">
            request the honour of your presence at the Holy Matrimony of their son
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="py-2">
            <h2 className="font-serif text-2xl font-bold tracking-wider text-navy uppercase sm:text-3xl">
              {invite.groomFull}
            </h2>

            {/* Intertwined Wedding Rings */}
            <div className="my-4 flex justify-center items-center gap-1.5 text-gold">
              <svg
                viewBox="0 0 50 32"
                className="w-12 h-8 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <ellipse cx="18" cy="16" rx="12" ry="10" />
                <ellipse cx="32" cy="16" rx="12" ry="10" strokeDasharray="30 8" />
              </svg>
            </div>

            <h2 className="font-serif text-2xl font-bold tracking-wider text-navy uppercase sm:text-3xl">
              {invite.brideFull}
            </h2>
            <p className="mt-2 text-sm text-sepia font-serif italic">
              D/o {invite.brideParents}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <Flourish className="mx-auto w-28 text-gold/60" />
          <p className="mt-4 text-sm italic text-sepia">
            which by the grace of God will be solemnized
          </p>
          <div className="mt-4 inline-block rounded-xl border border-navy/20 bg-paper px-6 py-3 shadow-xs">
            <p className="script text-3xl sm:text-4xl text-ink">
              {invite.dayLine}
            </p>
            <p className="caps mt-1 text-[0.65rem] text-navy font-semibold">
              Solemnization Service at 1:00 P.M
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
