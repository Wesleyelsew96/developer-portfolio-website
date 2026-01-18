const profile = {
  name: "Wesley Wright",
  role: "Software Engineer | Machine Learning + Full-Stack",
  location: "Lakewood, CO - Remote friendly",
  email: "wesleywright.lew@gmail.com",
  phone: "(980) 395-3100",
  bio: "Versatile engineer with a foundation in machine learning, full-stack development, and client-facing delivery.",
};

const education = [
  {
    school: "University of North Carolina at Charlotte",
    program: "B.S. Computer Science (AI/Robotics/Gaming); Minor in Mathematics",
    note: "Jan 2019 - May 2024 | Charlotte, NC",
  },
];

const skills = [
  {
    name: "Languages & Web",
    summary: "Backend, scripting, and UI foundations.",
    items: ["Java", "Python", "JavaScript", "C++", "HTML/CSS"],
  },
  {
    name: "Machine Learning",
    summary: "Modeling, experimentation, and analysis.",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "spaCy", "Hugging Face Transformers", "NumPy", "Pandas"],
  },
  {
    name: "DevOps & Databases",
    summary: "Pipelines and data layers that keep projects shipping.",
    items: ["Jenkins", "Docker", "PostgreSQL", "MySQL", "Heroku", "GitHub", "JUnit"],
  },
  {
    name: "Tools & Collaboration",
    summary: "Documentation, tracking, and IDEs I use daily.",
    items: ["Confluence", "Jira", "Asana", "Eclipse", "Jupyter Notebooks", "IntelliJ IDEA", "Visual Studio", "NetBeans"],
  },
];

const workHistory = [
  {
    company: "Outlier AI",
    role: "Data Annotation Math Specialist",
    period: "Nov 2024 - Present",
    location: "Lakewood, CO",
    bullets: [
      "Design reasoning tasks for multi-modal AI systems, including image-based challenges and Olympiad-level math problems.",
      "Evaluate and correct AI responses with structured feedback to refine model understanding.",
      "Promoted to Senior Reviewer and Super-Attempter to uphold quality across submissions.",
    ],
  },
  {
    company: "Lew Consulting",
    role: "Founder & Software Engineer",
    period: "Jul 2023 - May 2024",
    location: "Lakewood, CO",
    bullets: [
      "Delivered consulting updates for Ometrics appointment scheduling software (Java) and technician interfaces (JavaScript) deployed on Heroku.",
      "Integrated TutorCruncher APIs to optimize enrollments and scheduling for a tutoring company.",
      "Developed custom webpages for client websites using WordPress and React.",
    ],
  },
  {
    company: "Ometrics",
    role: "Software Developer",
    period: "Mar 2023 - Jul 2023",
    location: "Evergreen, CO (Remote)",
    bullets: [
      "Led updates for appointment scheduling software and technician interfaces across backend (Java), frontend (JavaScript/HTML/CSS), and PostgreSQL databases.",
      "Maintained and enhanced internal and client-facing websites on WordPress and React stacks.",
    ],
  },
  {
    company: "CorePower Yoga",
    role: "Systems Admin",
    period: "Oct 2022 - Jan 2023",
    location: "Charlotte, NC & Lakewood, CO",
    bullets: [
      "Updated product and scheduling databases while resolving internal support tickets in Confluence.",
      "Overhauled product categorizations and supported updates for 12 franchise acquisitions.",
    ],
  },
  {
    company: "RealTimePOS",
    role: "QA Analyst & Tech Support",
    period: "Feb 2020 - Jul 2020",
    location: "Charlotte, NC",
    bullets: [
      "Led testing for releases 2.4 and 3.0, covering all use cases and documenting reproducible issues.",
      "Reported bugs with screenshots and steps to reproduce; resolved client support tickets using Jira.",
    ],
  },
  {
    company: "Additional Roles",
    role: "Technical Lead, Tutor, Delivery & Service",
    period: "2018 - 2024",
    location: "Various | NC & CO",
    bullets: [
      "Technical Lead @ iCode (Jun-Sep 2022): guided students writing scripts for drones and robotic cars.",
      "Math and test prep tutor (2018-2024): taught SAT/ACT prep and high school math for groups and individuals.",
      "Delivery and hospitality roles (2020-2024): Uber Eats, DoorDash, Papa John's, and service work at TopGolf, Roy's Kitchen and Patio, Heist Brewery, and The Manchester.",
    ],
  },
];

const projects = [
  {
    title: "Lyrics Generator",
    tagline: "AI-assisted songwriting for modern pop.",
    description: "A model trained on pop songs that generates lyrics given a chord progression, a melody, and text input.",
    tools: ["Python", "PyTorch", "FastAPI", "React", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Wesleyelsew96/lyrics-generator",
    live: "https://wesleyelsew96.github.io/lyrics-generator/",
    highlights: [
      "Fine-tuned a lyrics model with melody + chord conditioning to keep phrasing musical.",
      "Built a FastAPI service with queueing for generation jobs and streaming status updates.",
      "Shipped a React UI for prompting, previewing verses/choruses, and exporting drafts.",
    ],
    screenshots: [
      {
        alt: "Lyrics generation prompt builder",
        src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80",
      },
      {
        alt: "Generated lyrics arranged by section",
        src: "https://images.unsplash.com/photo-1454922915609-78549ad709bb?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    title: "Extract Drums",
    tagline: "Quickly isolate drum stems from full mixes.",
    description: "A browser-based drum stem extractor that processes uploaded tracks and returns drum-only audio.",
    tools: ["Python", "Spleeter", "React", "JavaScript", "Node.js"],
    github: "https://github.com/Wesleyelsew96/extract-drums",
    live: "https://wesleyelsew96.github.io/extract-drums/",
    highlights: [
      "Uses Spleeter-based separation to isolate percussive elements from user-uploaded tracks.",
      "Provides a simple React UI for uploads, processing progress, and download links.",
      "Deploys as a static site with a lightweight backend to handle processing jobs.",
    ],
    screenshots: [
      {
        alt: "Waveform view for drum stem extraction",
        src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80",
      },
      {
        alt: "Audio editing interface with drum focus",
        src: "https://images.unsplash.com/photo-1461783436728-0a9217714695?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    title: "Meal Planner AI",
    tagline: "Rotation-based meal suggestions with a shared engine for UI and CLI.",
    description:
      "A deterministic meal-planning engine that cycles dishes by meal type, exposed via a browser UI and CLI for households to plan breakfasts, lunches, and dinners.",
    tools: ["Node.js", "Express", "JavaScript", "HTML/CSS", "Jest"],
    github: "https://github.com/Wesleyelsew96/meal-planner-ai",
    live: "https://wesleyelsew96.github.io/meal-planner-ai/demo/",
    highlights: [
      "DFS-based planner rotates dishes per meal type and date so schedules stay predictable.",
      "Shared engine powers both a web UI and CLI, keeping parity across flows.",
      "Heuristic registry supports presets and custom reordering for future planning logic.",
    ],
    screenshots: [
      {
        alt: "Meal planner UI with suggested meals",
        src: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1000&q=80",
      },
      {
        alt: "Editing dishes and meal types",
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    title: "Colorcentric Puzzle Game",
    tagline: "A 2D tile puzzle game inspired by 2048.",
    description: "Designed and developed Colorcentric, a web-based puzzle game built with JavaScript, HTML, and CSS.",
    tools: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Wesleyelsew96/Colorcentric",
    live: "/colorcentric/",
    highlights: [
      "Crafted tile mechanics and progression to keep the puzzle engaging.",
      "Designed UI/UX for quick play sessions with a responsive layout.",
      "Documented gameplay rules and scoring for sharing with classmates.",
    ],
    screenshots: [
      {
        alt: "Colorcentric puzzle board during play",
        src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1000&q=80",
      },
      {
        alt: "Colorful tiles merging in the puzzle grid",
        src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    title: "Collatz Conjecture Research",
    tagline: "Exploring iterative patterns in a base-2 abstract machine.",
    description: "Analyzed the Collatz function in Java to study iterative patterns within a base-2 abstract machine.",
    tools: ["Java", "Data Structures", "Algorithms"],
    github: null,
    live: null,
    highlights: [
      "Modeled Collatz iterations programmatically to observe emergent patterns.",
      "Produced reports summarizing findings for faculty review.",
      "Built reusable Java utilities to support future exploration.",
    ],
    screenshots: [
      {
        alt: "Whiteboard notes showing iterative patterns",
        src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1000&q=80",
      },
      {
        alt: "Abstract visualization of sequences in code",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      },
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
  actions.appendChild(detailsBtn);

  if (project.github) {
    const codeLink = document.createElement("a");
    codeLink.className = "button secondary";
    codeLink.href = project.github;
    codeLink.target = "_blank";
    codeLink.rel = "noreferrer";
    codeLink.textContent = "Code";
    actions.appendChild(codeLink);
  } else {
    const codeRequest = document.createElement("button");
    codeRequest.className = "button secondary";
    codeRequest.type = "button";
    codeRequest.setAttribute("aria-disabled", "true");
    codeRequest.disabled = true;
    codeRequest.textContent = "Code available on request";
    actions.appendChild(codeRequest);
  }

  if (project.live) {
    const liveBtn = document.createElement("a");
    liveBtn.className = "button primary";
    liveBtn.textContent = "Live site";
    liveBtn.href = project.live;
    liveBtn.target = "_blank";
    liveBtn.rel = "noreferrer";
    actions.appendChild(liveBtn);
  } else {
    const livePlaceholder = document.createElement("button");
    livePlaceholder.className = "button ghost";
    livePlaceholder.type = "button";
    livePlaceholder.setAttribute("aria-disabled", "true");
    livePlaceholder.disabled = true;
    livePlaceholder.textContent = "Live demo unavailable";
    actions.appendChild(livePlaceholder);
  }

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
    ...(project.highlights || []).map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );

  modalTools.innerHTML = "";
  modalTools.appendChild(renderChips(project.tools));

  modalScreens.innerHTML = "";
  (project.screenshots || []).forEach((shot) => {
    const fig = document.createElement("figure");
    fig.className = "screenshot";
    const img = document.createElement("img");
    img.src = shot.src;
    img.alt = shot.alt;
    fig.appendChild(img);
    modalScreens.appendChild(fig);
  });

  modalLinks.innerHTML = "";
  if (project.github) {
    const code = document.createElement("a");
    code.className = "button secondary";
    code.href = project.github;
    code.target = "_blank";
    code.rel = "noreferrer";
    code.textContent = "Code";
    modalLinks.appendChild(code);
  }

  if (project.live) {
    const live = document.createElement("a");
    live.className = "button primary";
    live.textContent = "Live site";
    live.href = project.live;
    live.target = "_blank";
    live.rel = "noreferrer";
    modalLinks.appendChild(live);
  }

  if (!project.github && !project.live) {
    const note = document.createElement("p");
    note.className = "muted";
    note.textContent = "Code and demos available on request.";
    modalLinks.appendChild(note);
  }

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
    profile.location,
    `Phone: ${profile.phone}`,
    `Email: ${profile.email}`,
    profile.bio,
    "Comfortable across ML modeling, full-stack delivery, DevOps, QA, and client-facing collaboration.",
    "Open to data annotation, ML, and software engineering opportunities.",
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
    const strong = document.createElement("strong");
    strong.textContent = item.school;
    title.append(strong, document.createTextNode(` - ${item.program}`));
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
    period.textContent = `${job.period} - ${job.location}`;
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
