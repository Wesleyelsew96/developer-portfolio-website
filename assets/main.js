const profile = {
  name: "Wesley Wright",
  role: "Full-Stack Software Developer",
  location: "Tulsa, OK · Remote friendly",
  email: "hello@wesleywright.dev",
  bio: "Full-stack engineer focused on product-first delivery, reliable systems, and polished interfaces.",
};

const education = [
  { school: "Oklahoma State University", program: "B.S. in Computer Science", note: "Emphasis on software engineering and data structures." },
  { school: "Continuous learning", program: "Design systems, advanced TypeScript, cloud native", note: "Workshops, courses, and hands-on builds." },
];

const skills = [
  {
    name: "Frontend",
    summary: "Interfaces that feel fast and intentional.",
    items: ["React", "Next.js", "Vite", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "Storybook"],
  },
  {
    name: "Backend",
    summary: "APIs, auth, and data layers with sensible patterns.",
    items: ["Node.js", "Express", "GraphQL", "REST", "PostgreSQL", "Prisma", "MongoDB", "Redis", "WebSockets"],
  },
  {
    name: "DevOps",
    summary: "Pipelines, observability, and deploys you can trust.",
    items: ["Docker", "GitHub Actions", "CI/CD", "Render", "Vercel", "AWS (Lambda, S3, RDS)", "Azure DevOps", "Monitoring (Grafana/New Relic)"],
  },
  {
    name: "Quality",
    summary: "Confident releases through testing and automation.",
    items: ["Jest", "Testing Library", "Playwright", "Contract testing", "Feature flags", "Feature preview environments"],
  },
];

const workHistory = [
  {
    company: "Atlas Logic",
    role: "Senior Full-Stack Developer",
    period: "2022 — Present",
    location: "Remote",
    bullets: [
      "Led delivery of a multi-tenant analytics platform with real-time dashboards and role-based access control.",
      "Coordinated product discovery with design to tighten feedback loops and ship weekly increments.",
      "Introduced feature flagging and automated smoke tests, cutting regression reports by 35%.",
    ],
  },
  {
    company: "Boundary Labs",
    role: "Full-Stack Engineer",
    period: "2019 — 2022",
    location: "Hybrid",
    bullets: [
      "Built customer onboarding flows, billing integrations, and admin tooling across React and Node.",
      "Implemented CI/CD pipelines and infrastructure-as-code to reduce deployment time from hours to minutes.",
      "Collaborated with customer success to prioritize fixes and launch a searchable support hub.",
    ],
  },
  {
    company: "Freelance",
    role: "Product-focused Developer",
    period: "Ongoing",
    location: "Remote",
    bullets: [
      "Delivered MVPs for founders: landing pages, web apps, and integrations to validate markets quickly.",
      "Set up observability and monitoring for small teams to track adoption and spot issues early.",
    ],
  },
];

const projects = [
  {
    title: "Meal Planner",
    tagline: "Plan, prep, and nourish with confidence.",
    description: "A robust meal-planning app for scheduling meals and tracking nutritional info for dishes.",
    tools: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Wesleyelsew96/meal-planner",
    live: null,
    highlights: [
      "Built recipe + meal scheduling with drag-and-drop weekly views and grocery list exports.",
      "Calculated nutrition macros from recipe ingredients and serving sizes for accurate tracking.",
      "Added user preferences (dietary exclusions, macros) to personalize meal suggestions.",
    ],
    screenshots: [
      { alt: "Weekly meal plan with nutrition breakdown", src: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1000&q=80" },
      { alt: "Recipe detail and macros", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80" },
    ],
  },
  {
    title: "Lyrics Generator",
    tagline: "AI-assisted songwriting for modern pop.",
    description: "A model trained on pop songs that generates lyrics given a chord progression, a melody, and text input.",
    tools: ["Python", "PyTorch", "FastAPI", "React", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Wesleyelsew96/lyrics-generator",
    live: null,
    highlights: [
      "Fine-tuned a lyrics model with melody + chord conditioning to keep phrasing musical.",
      "Built a FastAPI service with queueing for generation jobs and streaming status updates.",
      "Shipped a React UI for prompting, previewing verses/choruses, and exporting drafts.",
    ],
    screenshots: [
      { alt: "Lyrics generation prompt builder", src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80" },
      { alt: "Generated lyrics arranged by section", src: "https://images.unsplash.com/photo-1454922915609-78549ad709bb?auto=format&fit=crop&w=1000&q=80" },
    ],
  },
  {
    title: "Charlotte Knights Stadium App",
    tagline: "Game-day companion for food, tickets, and merch.",
    description: "A companion app for stadium-goers attending Charlotte Knights baseball games to find and purchase food, tickets, and merch.",
    tools: ["React Native", "TypeScript", "Expo", "Firebase", "Stripe", "Mapbox"],
    github: "https://github.com/Wesleyelsew96/charlotte-knights-stadium-app",
    live: null,
    highlights: [
      "Implemented in-seat ordering with pickup windows and live order status updates.",
      "Mapped concessions, restrooms, and seating with indoor-friendly navigation cues.",
      "Integrated ticket wallet, QR entry, and push notifications for promos and innings.",
    ],
    screenshots: [
      { alt: "Stadium map with vendors", src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80" },
      { alt: "Order flow for concessions", src: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=1000&q=80" },
    ],
  },
  {
    title: "Colorcentric",
    tagline: "A vivid twist on the 2048-style puzzle.",
    description: "A 2D tile puzzle game inspired by the popular iOS app 2048.",
    tools: ["TypeScript", "React", "Vite", "Canvas", "Tailwind CSS"],
    github: "https://github.com/Wesleyelsew96/colorcentric",
    live: null,
    highlights: [
      "Crafted smooth tile animations and color-driven combos that reward streaks.",
      "Added daily challenge seeds, scoreboards, and persistent progress with local storage.",
      "Balanced difficulty ramps with increasing tile tiers and limited undos.",
    ],
    screenshots: [
      { alt: "Colorcentric gameplay board", src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80" },
      { alt: "Score summary and streaks", src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1000&q=80" },
    ],
  },
];

const navLinks = document.querySelectorAll(".nav-link");

const smoothScroll = (targetId) => {
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    smoothScroll(target);
  });
});

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const isActive = link.dataset.target === id;
          link.classList.toggle("active", isActive);
          link.setAttribute("aria-current", isActive ? "page" : "false");
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

const projectsGrid = document.getElementById("projects-grid");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTagline = document.getElementById("modal-tagline");
const modalHighlights = document.getElementById("modal-highlights");
const modalTools = document.getElementById("modal-tools");
const modalScreens = document.getElementById("modal-screens");
const modalLinks = document.getElementById("modal-links");

const renderChips = (items, className = "chip") => {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = className;
    chip.textContent = item;
    fragment.appendChild(chip);
  });
  return fragment;
};

const buildProjectCard = (project, index) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.className = "muted";
  desc.textContent = project.description;

  const chips = document.createElement("div");
  chips.className = "chip-row";
  chips.appendChild(renderChips(project.tools));

  const actions = document.createElement("div");
  actions.className = "project-actions";

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "button ghost";
  detailsBtn.type = "button";
  detailsBtn.dataset.projectIndex = index;
  detailsBtn.textContent = "Details & Screenshots";

  const codeLink = document.createElement("a");
  codeLink.className = "button secondary";
  codeLink.href = project.github;
  codeLink.target = "_blank";
  codeLink.rel = "noreferrer";
  codeLink.textContent = "Code";

  const liveBtn = document.createElement(project.live ? "a" : "button");
  liveBtn.className = "button primary";
  liveBtn.textContent = project.live ? "Live site" : "Live site (coming soon)";
  if (project.live) {
    liveBtn.href = project.live;
    liveBtn.target = "_blank";
    liveBtn.rel = "noreferrer";
  } else {
    liveBtn.setAttribute("aria-disabled", "true");
    liveBtn.type = "button";
  }

  actions.append(detailsBtn, codeLink, liveBtn);
  card.append(title, desc, chips, actions);
  return card;
};

const renderProjects = () => {
  projectsGrid.innerHTML = "";
  projects.forEach((project, index) => {
    const card = buildProjectCard(project, index);
    projectsGrid.appendChild(card);
  });
};

const openModal = (project) => {
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTagline.textContent = project.tagline;
  modalHighlights.innerHTML = "";
  modalHighlights.append(
    ...project.highlights.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );

  modalTools.innerHTML = "";
  modalTools.appendChild(renderChips(project.tools));

  modalScreens.innerHTML = "";
  project.screenshots.forEach((shot) => {
    const fig = document.createElement("figure");
    fig.className = "screenshot";
    const img = document.createElement("img");
    img.src = shot.src;
    img.alt = shot.alt;
    fig.appendChild(img);
    modalScreens.appendChild(fig);
  });

  modalLinks.innerHTML = "";
  const code = document.createElement("a");
  code.className = "button secondary";
  code.href = project.github;
  code.target = "_blank";
  code.rel = "noreferrer";
  code.textContent = "Code";
  modalLinks.appendChild(code);

  const live = document.createElement(project.live ? "a" : "button");
  live.className = "button primary";
  live.textContent = project.live ? "Live site" : "Live site (coming soon)";
  if (project.live) {
    live.href = project.live;
    live.target = "_blank";
    live.rel = "noreferrer";
  } else {
    live.setAttribute("aria-disabled", "true");
    live.type = "button";
  }
  modalLinks.appendChild(live);

  modal.dataset.open = "true";
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.dataset.open = "false";
  modal.setAttribute("aria-hidden", "true");
};

projectsGrid?.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-project-index]");
  if (!btn) return;
  const index = Number(btn.dataset.projectIndex);
  const project = projects[index];
  if (project) openModal(project);
});

modal?.addEventListener("click", (e) => {
  if (e.target.dataset.close !== undefined) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal?.dataset.open === "true") {
    closeModal();
  }
});

const renderList = (targetId, items) => {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    el.appendChild(li);
  });
};

const renderProfile = () => {
  const profileList = document.getElementById("profile-list");
  if (!profileList) return;
  const entries = [
    `${profile.location}`,
    profile.bio,
    "Focusing on SaaS, dashboards, operations, and commerce.",
    "Interested in full-time roles and select freelance engagements.",
  ];
  renderList("profile-list", entries);
};

const renderEducation = () => {
  const educationList = document.getElementById("education-list");
  if (!educationList) return;
  educationList.innerHTML = "";
  education.forEach((item) => {
    const li = document.createElement("li");
    const title = document.createElement("div");
    title.innerHTML = `<strong>${item.school}</strong> — ${item.program}`;
    const note = document.createElement("p");
    note.className = "muted";
    note.textContent = item.note;
    li.append(title, note);
    educationList.appendChild(li);
  });
};

const renderSkills = () => {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = "";
  skills.forEach((group) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    const title = document.createElement("h3");
    title.textContent = group.name;
    const summary = document.createElement("p");
    summary.className = "muted";
    summary.textContent = group.summary;
    const chips = document.createElement("div");
    chips.className = "chip-row";
    chips.appendChild(renderChips(group.items));
    card.append(title, summary, chips);
    grid.appendChild(card);
  });
};

const renderWork = () => {
  const grid = document.getElementById("work-grid");
  if (!grid) return;
  grid.innerHTML = "";
  workHistory.forEach((job) => {
    const card = document.createElement("div");
    card.className = "work-card";
    const period = document.createElement("div");
    period.className = "period";
    period.textContent = `${job.period} · ${job.location}`;
    const role = document.createElement("div");
    role.className = "role";
    role.textContent = `${job.role} @ ${job.company}`;
    const list = document.createElement("ul");
    list.className = "detail-list";
    job.bullets.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      list.appendChild(li);
    });
    card.append(period, role, list);
    grid.appendChild(card);
  });
};

const contactForm = document.getElementById("contact-form");
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const success = contactForm.querySelector(".form-success");
  if (success) success.hidden = false;
  contactForm.reset();
});

const init = () => {
  renderProjects();
  renderProfile();
  renderEducation();
  renderSkills();
  renderWork();
};

init();
