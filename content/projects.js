// Case studies. Order here is the order on the home page and the "next project" links.
//
// Photos: save the file at the path in `src`, set `ready: true`, and write `alt`
// (what the photo shows, for people who can't see it). Until then a labeled box shows.
//
// Video: fill in `src` with an embed URL. Set `video: null` to remove the block.

export const projects = [
  {
    slug: "cost-of-a-click-2",
    title: "Cost of a Click 2.0: The Environment Remembers",
    shortTitle: "Cost of a Click 2.0",
    tagline: "AI feels invisible. Its impact isn't.",
    year: "2026",
    summary:
      "An expanded installation with a projected U.S. data center map, a thermal receipt printer, and a visitor question wall, shown at Science Works.",
    cover: {
      src: "/images/cost-of-a-click-2/cover.jpg",
      ready: false,
      alt: "",
      label: "Wide shot of the full installation at Science Works",
    },
    facts: [
      {
        label: "Role",
        value: "Research and Community Content Lead; wrote the control software",
      },
      { label: "Dates", value: "Summer 2026" },
      {
        label: "Team",
        value:
          "Sameed Iqbal (Research and Community Content Lead), Arushi Malhotra (Technical Lead), Seeza Wasim (Design and Fabrication Lead), Yoonyoung Kim (UX Research and Visitor Experience Lead)",
      },
      { label: "Funding", value: "Design IMPACT Grant, DePaul" },
      { label: "Supported by", value: "Code Your Dreams and DePaul University" },
      {
        label: "Shown at",
        value:
          "Science Works, Griffin Museum of Science and Industry, Chicago, October 10, 2026",
      },
      {
        label: "Tools",
        value:
          "Python, python-escpos, Rongta thermal printer, Arduino UNO R4, relay, pump",
      },
    ],
    links: [
      { label: "Project site", url: "https://costofaclick.netlify.app/" },
      {
        label: "Interactive map",
        url: "https://costofaclick.netlify.app/interactive-map",
      },
      {
        label: "Research and sources",
        url: "https://costofaclick.netlify.app/research",
      },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "AI's water and energy costs are hidden from the people using it. This project doesn't ask people to stop using AI. It asks them to see what it requires.",
          "It builds on the original Cost of a Click, which pumped water into a visible tank with each prompt.",
        ],
      },
      {
        heading: "What we built",
        body: [
          "I led a four-person team expanding the original installation with three additions: a projected U.S. data center map, a thermal receipt printer, and a visitor question wall.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "A visitor enters a prompt. The data center map lights up, a water drop falls, and an impact receipt prints showing water, energy, and carbon.",
          "I wrote the control software. Python prints receipts over USB, using python-escpos and a Rongta thermal printer. It also sends serial commands to an Arduino UNO R4, which runs a pump through a relay for a timed run.",
        ],
        diagram: {
          start: ["Prompt", "Python"],
          branches: [
            { link: "USB", nodes: ["Thermal printer"] },
            { link: "Serial", nodes: ["Arduino", "Relay", "Pump"] },
          ],
          caption:
            "A prompt goes to Python. Python prints to the thermal printer over USB and sends serial commands to the Arduino, which switches a relay to run the pump.",
        },
      },
      {
        heading: "Outcome",
        body: [
          "We exhibited the installation at Science Works at the Griffin Museum of Science and Industry in Chicago on October 10, 2026.",
          "TODO: add what happened at the exhibit, such as what visitors wrote on the question wall.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/cost-of-a-click-2/map.jpg",
        ready: false,
        alt: "",
        label: "The projected U.S. data center map",
      },
      {
        src: "/images/cost-of-a-click-2/receipt.jpg",
        ready: false,
        alt: "",
        label: "The thermal printer printing a receipt",
      },
      {
        src: "/images/cost-of-a-click-2/question-wall.jpg",
        ready: false,
        alt: "",
        label: "The visitor question wall",
      },
      {
        src: "/images/cost-of-a-click-2/electronics.jpg",
        ready: false,
        alt: "",
        label: "The Arduino, relay, and pump wiring",
      },
    ],
    video: {
      src: null,
      title: "Cost of a Click 2.0 video",
      label: "Video of the installation running",
      portrait: false,
    },
  },
  {
    slug: "cost-of-a-click",
    title: "Cost of a Click",
    shortTitle: "Cost of a Click",
    year: "2025",
    summary:
      "Each AI prompt pumps water into a visible tank while an animated tree withers on screen. A TikTok video of it reached 1M+ views.",
    cover: {
      src: "/images/cost-of-a-click/cover.jpg",
      ready: false,
      alt: "",
      label: "The installation with the tank and the tree on screen",
    },
    facts: [
      { label: "Role", value: "Project Developer" },
      { label: "Dates", value: "Summer 2025" },
      {
        label: "Team",
        value:
          "Siddharth Maurya (PM), Ramya Yerramilli (UI/UX), Sameed Iqbal (Developer), Harsha Jain (Designer)",
      },
      { label: "Built with", value: "Code Your Dreams" },
      { label: "Funding", value: "IMPACT Summer Grant, DePaul" },
      { label: "Shown at", value: "Digital Inclusion Week 2025" },
      { label: "Tools", value: "Arduino, submersible pump, Python" },
    ],
    links: [
      { label: "Project site", url: "https://invisibleimpact.framer.website/" },
    ],
    sections: [
      {
        heading: "Problem",
        body: ["AI's water use is hidden from the people sending prompts."],
      },
      {
        heading: "What we built",
        body: [
          "An installation where each AI prompt pumps water into a visible tank while an animated tree withers on screen.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "The installation is built with an Arduino, a submersible pump, and a live Python pipeline.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The installation was shown at Digital Inclusion Week 2025. A TikTok video of it reached 1M+ views and 50,000+ likes.",
          "Its 5,514 comments became the data for a RAISE Lab paper now under review at CHI 2027.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/cost-of-a-click/tank-and-pump.jpg",
        ready: false,
        alt: "",
        label: "Close-up of the tank and pump",
      },
      {
        src: "/images/cost-of-a-click/tree.jpg",
        ready: false,
        alt: "",
        label: "The animated tree on screen",
      },
      {
        src: "/images/cost-of-a-click/exhibit.jpg",
        ready: false,
        alt: "",
        label: "The installation at Digital Inclusion Week 2025",
      },
    ],
    video: {
      src: "https://www.tiktok.com/embed/v2/7563714947939585291",
      title: "TikTok video of Cost of a Click by @thetshegofatso",
      label: "The TikTok video of the installation",
      portrait: true,
      credit: {
        label: "TikTok by @thetshegofatso",
        url: "https://www.tiktok.com/@thetshegofatso/video/7563714947939585291",
      },
    },
  },
  {
    slug: "civic-energy",
    title: "Civic Energy",
    shortTitle: "Civic Energy",
    year: "2026–present",
    summary:
      "An early-stage idea: show Chicago building owners how much money their buildings lose to energy waste, in dollars rather than kWh.",
    cover: {
      src: "/images/civic-energy/cover.jpg",
      ready: false,
      alt: "",
      label: "Screenshot of the Civic Energy site",
    },
    facts: [
      { label: "Role", value: "Technical Lead" },
      { label: "Dates", value: "2026–present" },
      { label: "Team", value: "TODO: add the team" },
      {
        label: "Funding",
        value: "$2,000 award, DePaul's Coleman Entrepreneurship Center",
      },
      { label: "Tools", value: "TODO: add the tools you use" },
    ],
    links: [{ label: "civic-energy.com", url: "https://www.civic-energy.com/" }],
    sections: [
      {
        heading: "Problem",
        body: [
          "Chicago building owners lose money to energy waste, and a figure in kWh doesn't show them how much.",
        ],
      },
      {
        heading: "What we built",
        body: [
          "This is an early-stage idea: show building owners what their buildings lose to energy waste in dollars rather than kWh.",
          "TODO: add your specific technical work.",
        ],
      },
      {
        heading: "How it works",
        body: ["TODO: add how it works."],
      },
      {
        heading: "Outcome",
        body: [
          "We're testing the idea and reaching out to first clients. DePaul's Coleman Entrepreneurship Center awarded it $2,000.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/civic-energy/prototype.jpg",
        ready: false,
        alt: "",
        label: "Screenshot of the current work",
      },
      {
        src: "/images/civic-energy/team.jpg",
        ready: false,
        alt: "",
        label: "The team",
      },
    ],
    video: null,
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

// The project after this one, wrapping back to the first.
export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
