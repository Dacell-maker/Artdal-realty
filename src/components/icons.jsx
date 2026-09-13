/* Minimal line icon set — stroke inherits currentColor */
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const IconArrow = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
);

export const IconArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h16" />
    <path d="m14 6 6 6-6 6" />
  </svg>
);

export const IconHeart = ({ filled, ...p }) => (
  <svg {...base} fill={filled ? "currentColor" : "none"} {...p}>
    <path d="M12 20s-7.5-4.7-9.3-9A5.2 5.2 0 0 1 12 6.6 5.2 5.2 0 0 1 21.3 11c-1.8 4.3-9.3 9-9.3 9Z" />
  </svg>
);

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconBed = (p) => (
  <svg {...base} {...p}>
    <path d="M3 18v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
    <path d="M3 18h18" />
    <path d="M7 8V6h10v2" />
  </svg>
);

export const IconBath = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
    <path d="M6 12V5a2 2 0 0 1 4 0" />
  </svg>
);

export const IconArea = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1.5" />
    <path d="M9 4v5H4" />
  </svg>
);

export const IconKey = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="14" r="4" />
    <path d="m11 11 8-8" />
    <path d="m16 6 3 3" />
    <path d="m13.5 8.5 2 2" />
  </svg>
);

export const IconTag = (p) => (
  <svg {...base} {...p}>
    <path d="M3 12V4h8l10 10-8 8L3 12Z" />
    <circle cx="8" cy="9" r="1.6" />
  </svg>
);

export const IconBuilding = (p) => (
  <svg {...base} {...p}>
    <path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
    <path d="M16 9h3a2 2 0 0 1 2 2v10" />
    <path d="M3 21h18" />
    <path d="M9 7h3M9 11h3M9 15h3" />
  </svg>
);

export const IconChat = (p) => (
  <svg {...base} {...p}>
    <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z" />
    <path d="M9 11h6M9 14h4" />
  </svg>
);

export const IconSearch = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.4-4.4" />
  </svg>
);

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </svg>
);

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </svg>
);

export const IconCheck = (p) => (
  <svg {...base} {...p}>
    <path d="m5 13 4.5 4.5L19 7" />
  </svg>
);

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconChevronLeft = (p) => (
  <svg {...base} {...p}>
    <path d="m14 6-6 6 6 6" />
  </svg>
);

export const IconChevronRight = (p) => (
  <svg {...base} {...p}>
    <path d="m10 6 6 6-6 6" />
  </svg>
);

export const IconInstagram = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.4" />
    <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
  </svg>
);

export const IconLinkedIn = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" />
  </svg>
);

export const IconXSocial = (p) => (
  <svg {...base} {...p}>
    <path d="m5 5 14 14" />
    <path d="M19 5 5 19" />
  </svg>
);

export const IconFacebook = (p) => (
  <svg {...base} {...p}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5A.5.5 0 0 1 14 8Z" />
  </svg>
);
