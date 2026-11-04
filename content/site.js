// Site-wide text. Edit the words here; no component changes needed.
// Any string that starts with "TODO:" shows on the site as a marked placeholder.

export const site = {
  name: "Sameed Iqbal",
  location: "Chicago",
  description:
    "Sameed Iqbal is an Information Systems graduate student and IT support specialist in Chicago who builds installations that show what AI costs in water and energy.",

  email: "Siqbal33@depaul.edu",
  linkedin: "https://www.linkedin.com/in/sameediqbal22",
  linkedinLabel: "linkedin.com/in/sameediqbal22",
  // Replace with your full GitHub profile URL, for example "https://github.com/yourname".
  github: "TODO: add your GitHub link",

  // Stays null until a phone-free PDF is saved as public/resume.pdf.
  // Then change this to "/resume.pdf". Do not add a copy that shows your phone number.
  resumeUrl: null,

  nav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const home = {
  hero: {
    kicker: "IT systems / research / installations",
    headline:
      "I keep lab systems running, and I build installations that show what AI costs in water and energy.",
    intro:
      "I'm an M.S. Information Systems student at DePaul and a Technology Support Specialist in its computing labs.",
    primaryCta: { label: "See the work", href: "#work" },
    secondaryCta: { label: "Experience and skills", href: "/about/" },
  },

  // The numbers that drive the "Send a prompt" control on the home page.
  water: {
    mlPerPrompt: 10,
    bottleMl: 500,
    button: "Send a prompt",
    resetButton: "Drain",
    idle: "Nothing sent yet. Water used: 0 mL.",
    full: "That's a 500 mL bottle of water.",
    note: "About 10 mL per prompt, the low end of an estimate by Li et al. (2023): a 500 mL bottle for roughly 10 to 50 medium-length GPT-3 responses, depending on when and where it runs.",
    sourceLabel: "Read Li et al. (2023)",
    sourceUrl: "https://arxiv.org/abs/2304.03271",
  },

  workHeading: "Selected work",
  workIntro:
    "Two installations that put AI's water use in front of people, and an early-stage idea about what energy waste costs Chicago buildings.",

  aboutHeading: "Two kinds of work",
  aboutColumns: [
    {
      title: "IT and systems",
      body: "I diagnose and fix hardware, OS, network, and software problems across the labs at DePaul's Jarvis College of Computing and Digital Media (CDM). I tested the 2026–27 Windows 11 lab image before rollout, including 80+ applications.",
    },
    {
      title: "Research and installations",
      body: "At DePaul's RAISE Lab, with Dr. Jay Cunningham, I work on research about making AI's environmental and social costs visible. I also build the hardware and software for public installations on the same subject.",
    },
  ],
  aboutLink: "More about me",

  contactHeading: "Get in touch",
  contactIntro: "Email or LinkedIn both work.",
};
