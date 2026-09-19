import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { invite } from "@/config/invite";

interface BackgroundMusicProps {
  shouldPlay?: boolean;
}

export function BackgroundMusic({ shouldPlay = false }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.55;

    if (shouldPlay) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was blocked; will wait for user interaction
          setIsPlaying(false);
        });
    }
  }, [shouldPlay]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Playback error:", err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={invite.bgm.src}
        preload="auto"
        loop
        playsInline
      />

      {/* Floating Audio Controller */}
      <motion.div
        className="fixed top-4 right-4 z-40 flex items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 rounded-full border border-navy/20 bg-paper/90 py-1 pl-3.5 pr-2 shadow-md backdrop-blur-md"
            >
              <div className="flex flex-col text-left">
                <span className="text-[0.62rem] font-medium text-navy leading-tight">
                  {invite.bgm.title}
                </span>
                <span className="text-[0.52rem] text-sepia">
                  {invite.bgm.artist}
                </span>
              </div>
              <a
                href={invite.bgm.spotifyUrl}
                target="_blank"
                rel="noreferrer"
                title="Open on Spotify"
                className="grid size-6 place-items-center rounded-full bg-[#1DB954]/15 text-[#1DB954] transition hover:bg-[#1DB954]/25"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.793-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.496 9.722 1.113.294.18.386.562.207.857zm1.224-2.719c-.226.367-.706.482-1.072.256-2.69-1.654-6.79-2.134-9.97-1.168-.413.125-.85-.11-.975-.523-.125-.413.11-.85.523-.975 3.633-1.103 8.147-.568 11.238 1.338.366.226.482.706.256 1.072zm.105-2.835C14.692 8.95 8.085 8.733 4.887 9.704c-.496.15-1.02-.136-1.17-.633-.15-.496.137-1.02.633-1.17 3.766-1.144 11.08-.891 14.975 1.42.447.265.592.846.327 1.293-.266.447-.847.592-1.293.327z" />
                </svg>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={togglePlay}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
          className="group relative flex size-10 items-center justify-center rounded-full border border-navy/25 bg-paper/90 shadow-md backdrop-blur-md transition-transform active:scale-95"
        >
          {/* Animated vinyl / soundwave ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-navy/40"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {isPlaying ? (
            /* Equalizer bars */
            <div className="flex items-end gap-[2px] h-3.5">
              <motion.span
                className="w-[2.5px] rounded-full bg-navy"
                animate={{ height: ["30%", "100%", "40%"] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="w-[2.5px] rounded-full bg-navy"
                animate={{ height: ["90%", "20%", "80%"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
              />
              <motion.span
                className="w-[2.5px] rounded-full bg-navy"
                animate={{ height: ["40%", "90%", "30%"] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
            </div>
          ) : (
            /* Play / Muted Note Icon */
            <svg
              viewBox="0 0 24 24"
              className="size-4 fill-navy/70 translate-x-[1px]"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </motion.div>
    </>
  );
}
