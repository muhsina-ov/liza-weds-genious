import { motion } from "motion/react";
import { useRef } from "react";
const footerBg = "https://media.invitestory.in/marigold-bhavan/src/assets/footer-bg.jpg";
import navyFloral from "@/assets/navy-floral.jpg";
import { invite } from "@/config/invite";
import { useParallax } from "@/hooks/use-parallax";
import { ScriptNames } from "./Reveal";

export function InviteFooter() {
  const ref = useRef<HTMLElement>(null);
  // Slower, spring-smoothed drift
  const { y } = useParallax(ref, [-70, 40], ["start end", "end end"]);

  return (
    <footer
      ref={ref}
      className="grain relative flex min-h-[70svh] items-center justify-center overflow-hidden px-6 pb-36 pt-24 text-center"
    >
      <motion.img
        src={footerBg}
        alt=""
        aria-hidden="true"
        width={1536}
        height={1024}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 size-full scale-125 object-cover will-change-transform opacity-30 mix-blend-multiply"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-paper/85" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-paper via-transparent to-paper/90"
      />

      {/* Navy floral accents in footer */}
      <img
        src={navyFloral}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 w-44 opacity-25 mix-blend-multiply sm:w-56"
      />
      <img
        src={navyFloral}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 w-44 -scale-x-100 opacity-25 mix-blend-multiply sm:w-56"
      />

      <div className="relative">
        <motion.p
          className="caps text-[0.58rem] text-navy font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {invite.closing}
        </motion.p>

        <p className="script mt-5 text-5xl leading-[1.1] text-ink sm:text-6xl">
          <ScriptNames text={invite.groom} />
          <span className="mx-3 text-gold">&</span>
          <ScriptNames text={invite.bride} delay={0.3} />
        </p>

        <motion.p
          className="caps mt-8 text-[0.5rem] text-sepia/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {invite.dateLabel} · {invite.venue.name}
        </motion.p>
        <motion.a
          href="https://www.instagram.com/invitestory.in/"
          target="_blank"
          rel="noreferrer"
          className="caps mt-4 inline-block text-[0.5rem] text-sepia/70 transition-colors hover:text-sepia"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Follow @invitestory.in on Instagram
        </motion.a>
      </div>
    </footer>
  );
}
