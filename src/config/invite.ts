// ─────────────────────────────────────────────────────────────
// Wedding Invitation Configuration: Liza & Genious
// ─────────────────────────────────────────────────────────────

export const invite = {
  bride: "Liza",
  groom: "Genious",
  brideFull: "Dr. Liza Dora Marbaniang",
  groomFull: "Rev. Genious Marwein",
  brideParents: "Mr. L. Khongsni & Mrs. Judy G. Marbaniang",
  groomParents: "T.Bn. A. Kharkongor & Mrs. C. Marwein",
  bibleVerse: {
    quote:
      "As long as we love one another God will live in us and His love will complete in us",
    reference: "John 4:12",
  },
  /** Shown big in the hero */
  dateLabel: "31.12.26",
  /** Local start / end of the wedding (ISO, no timezone) */
  start: "2026-12-31T13:00:00",
  end: "2026-12-31T21:00:00",
  /** IANA timezone of the venue (IST) */
  timeZoneOffset: "+05:30",
  dayLine: "Thursday, 31st December 2026",
  timeLine: "Solemnization at 1:00 P.M · Reception from 5:00 P.M Onwards",
  eventTitle: "Holy Matrimony of Rev. Genious Marwein & Dr. Liza Dora Marbaniang",
  invitationNote:
    "T.Bn. A. Kharkongor & Mrs. C. Marwein request the honour of your presence at the Holy Matrimony of their son Rev. Genious Marwein with Dr. Liza Dora Marbaniang (D/o Mr. L. Khongsni & Mrs. Judy G. Marbaniang), which by the grace of God will be solemnized.",
  ceremony: {
    title: "Holy Matrimony",
    subtitle: "Church Solemnization",
    time: "1:00 P.M",
    name: "Mawlai Presbyterian Church",
    address: "Mawlai, Shillong, Meghalaya",
    query: "Mawlai Presbyterian Church, Shillong, Meghalaya",
  },
  reception: {
    title: "Wedding Reception",
    subtitle: "Celebration & Dinner",
    time: "from 5:00 P.M Onwards",
    name: "Ratson Pavillion",
    address: "Mawiong Rim, Shillong, Meghalaya",
    query: "Ratson Pavillion, Mawiong Rim, Shillong, Meghalaya",
  },
  venue: {
    name: "Mawlai Presbyterian Church",
    address: "Mawlai, Shillong, Meghalaya",
    query: "Mawlai Presbyterian Church, Shillong, Meghalaya",
    lat: 25.594,
    lng: 91.882,
  },
  closing: "We look forward to celebrating this sacred day with you",
  bgm: {
    title: "Worthy (Instrumental)",
    artist: "Lighthouse Piano",
    spotifyUrl: "https://open.spotify.com/track/7rRkOCMxSauAsPzwu0N5x8?si=IF-AcoiIQ9qHkgGxbX6LVg&utm_source=whatsapp",
    src: "/worthy-instrumental.mp3",
  },
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  invite.ceremony.query,
)}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  invite.ceremony.query,
)}`;

export const receptionMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  invite.reception.query,
)}`;

export const receptionDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  invite.reception.query,
)}`;

