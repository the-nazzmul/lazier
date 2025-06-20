export const CLIENTS = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const PRODUCTS = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
  {
    title: "NextCodez",
    link: "https://efreeinvoice.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Bleep",
    link: "https://efreeinvoice.com",
    thumbnail: "/p5.png",
  },
];

export const SUBSCRIPTION_PLANS = [
  {
    title: "Hobby",
    price: 0,
    description: "Get a glimpse of what our software is capable of doing.",
    features: ["3 Free automation", "100 tasks per month", "Two-step Actions"],
  },
  {
    title: "Pro",
    price: 29,
    description: "Get a glimpse of what our software is capable of doing.",
    features: ["3 Free automation", "100 tasks per month", "Two-step Actions"],
  },
  {
    title: "Unlimited",
    price: 99,
    description: "Get a glimpse of what our software is capable of doing.",
    features: ["3 Free automation", "100 tasks per month", "Two-step Actions"],
  },
];
