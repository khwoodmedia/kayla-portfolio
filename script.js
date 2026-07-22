const rotatingWords = ["COMMUNITY", "CULTURE", "JUSTICE", "INNOVATION", "CHANGE"];
const heroImages = [
  "assets/hero-community.JPG",
  "assets/hero-culture.JPG",
  "assets/hero-justice.JPG",
  "assets/hero-innovation.JPG",
  "assets/hero-change.JPG"
];
const rotatingWord = document.getElementById("rotatingWord");
const heroImage = document.getElementById("heroImage");
let wordIndex = 0;

function setHeroImage(index) {
  heroImage.src = heroImages[index];
  heroImage.alt = `Stories about ${rotatingWords[index].toLowerCase()}`;
}

setInterval(() => {
  rotatingWord.classList.remove("swap-in");
  rotatingWord.classList.add("swap-out");
  heroImage.classList.remove("swap-in");
  heroImage.classList.add("swap-out");

  setTimeout(() => {
    wordIndex = (wordIndex + 1) % rotatingWords.length;
    rotatingWord.textContent = `${rotatingWords[wordIndex]},`;
    setHeroImage(wordIndex);
    rotatingWord.classList.remove("swap-out");
    rotatingWord.classList.add("swap-in");
    heroImage.classList.remove("swap-out");
    heroImage.classList.add("swap-in");
  }, 330);
}, 2600);

// Video behavior
document.querySelectorAll(".video-card").forEach((card) => {
  const video = card.querySelector("video");
  const soundButton = card.querySelector(".sound-toggle");

  const playVideo = () => {
    video.play().catch(() => {});
  };

  const pauseVideo = () => {
    video.pause();
    video.currentTime = 0;
  };

  card.addEventListener("mouseenter", playVideo);
  card.addEventListener("mouseleave", pauseVideo);
  card.addEventListener("focusin", playVideo);
  card.addEventListener("focusout", (event) => {
    if (!card.contains(event.relatedTarget)) pauseVideo();
  });

  soundButton.addEventListener("click", (event) => {
    event.stopPropagation();
    video.muted = !video.muted;
    soundButton.textContent = video.muted ? "UNMUTE" : "MUTE";
  });
});


// Journalism bylines
const bylines = [
  {
    publication: "KQED",
    title: "When Family Business Becomes Big Business",
    description: "LaRussell, the Bay Area's most resourceful independent artist, is in talks with Def Jam Records about signing a deal.",
    link: "https://www.kqed.org/arts/13937331/larussell-vallejo-def-jam-record-deal"
  },
  {
    publication: "Portland Monthly",
    title: "Mama Box Is Baking Some of the Most Exciting Pastries in Portland",
    description: "Former Le Pigeon cook Darla Shaffer’s waitlist is a month long. Go now.",
    link: "https://www.pdxmonthly.com/eat-and-drink/2021/04/mama-box-is-baking-some-of-the-most-exciting-pastries-in-portland"
  },
  {
    publication: "Eugene Weekly",
    title: "Eugene Nail Artist and Activist",
    description: "Kinaya Haug’s palette of nails reflects her art and social activism.",
    link: "https://eugeneweekly.com/2021/03/04/eugene-nail-artist-and-activist/"
  },
  {
    publication: "The Oaklandside",
    title: "‘Futurisme’ is Senay Alkebu-lan’s ode to techno, labor activism, and Oakland",
    description: "Known for his Madow Futur streetwear collection, the artist’s new project blends revolutionary politics, industrial aesthetics, and music.",
    link: "https://oaklandside.org/2023/11/03/futurisme-senay-alkebu-lan-oakland/"
  },
  {
    publication: "The Observer",
    title: "Those who know the way show the way",
    description: "Henry Ortiz, founder of Community Healers, a nonprofit that works closely with the Sacramento community and an organizer for All of Us of None, a group of people working for human rights for people formerly incarcerated.",
    link: "https://www.theobserver.media/health/those-who-know-the-way-show-the-way-fadc2ce2/"
  },
  {
    publication: "The Observer",
    title: "Hip-Hop Crime Fighters Use Words and Music to Defuse Gun Violence",
    description: "Organized Voices Presents Hip Hop and Civil Rights hosted by Mars Parker, guest speakers DJ Yella of NWA and DJ Cli-n-tel and Lonzo of World Class Wreckin Cru.",
    link: "https://www.theobserver.media/arts-culture/hip-hop-crime-fighters-use-words-music-to-defuse-gun-violence-cd31d837/"
  }
];

const bylineList = document.querySelector(".byline-list");

bylines.forEach((item, index) => {
  const article = document.createElement("article");
  article.className = "byline-item";
  article.setAttribute("role", "listitem");
  article.innerHTML = `
    <button class="byline-trigger" type="button" aria-expanded="false">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${item.publication}: ${item.title}</strong>
    </button>
    <div class="byline-panel">
      <p class="byline-description">${item.description}</p>
      <a class="byline-link" href="${item.link}" target="_blank" rel="noopener">Read more <span aria-hidden="true">→</span></a>
    </div>
  `;
  bylineList.appendChild(article);
});

bylineList.querySelectorAll(".byline-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".byline-item");
    const isOpen = item.classList.contains("is-open");

    bylineList.querySelectorAll(".byline-item").forEach((entry) => {
      entry.classList.remove("is-open");
      entry.querySelector(".byline-trigger").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});

// Social media grid
const socialPosts = [
  { image: "assets/social-1.JPG", link: "https://www.instagram.com/p/DA1ilSizu0n/?igsh=NjZiM2M3MzIxNA%3D%3D", alt: "Social media project 1", cta: "Full post" },
  { image: "assets/social-2.JPG", link: "https://www.linkedin.com/feed/update/urn:li:activity:7472736033525116928", alt: "Social media project 2", cta: "Full post" },
  { image: "assets/social-4.jpg", link: "https://www.instagram.com/reels/C8pzD9iR9kQ/", alt: "Social media project 3", cta: "Full post" },
  { image: "assets/social-3.JPG", fullImage: "assets/social-3-full.png", alt: "Social media project 4", cta: "Full Carousel", focus: "up" },
  { image: "assets/social-5.JPG", fullImage: "assets/social-5-full.png", alt: "Social media project 5", cta: "Full Carousel" },
  { image: "assets/social-6-full.png", fullImage: "assets/social-6-full.png", alt: "Social media project 6", cta: "Full Carousel", focus: "left" }
];

const socialGrid = document.querySelector(".social-grid");
const socialLightbox = document.getElementById("socialLightbox");
const socialLightboxImage = document.getElementById("socialLightboxImage");
const socialLightboxClose = document.getElementById("socialLightboxClose");

function openSocialLightbox(src, alt) {
  socialLightboxImage.src = src;
  socialLightboxImage.alt = alt;
  socialLightbox.hidden = false;
  document.body.style.overflow = "hidden";
  socialLightboxClose.focus();
}

function closeSocialLightbox() {
  socialLightbox.hidden = true;
  socialLightboxImage.removeAttribute("src");
  socialLightboxImage.alt = "";
  document.body.style.overflow = "";
}

socialPosts.forEach((post) => {
  const card = document.createElement("article");
  card.className = "social-card";
  if (post.focus === "left") card.classList.add("social-card--focus-left");
  if (post.focus === "up") card.classList.add("social-card--focus-up");

  const action = post.fullImage
    ? `<button type="button" class="social-card-link" data-full-image="${post.fullImage}" data-full-alt="${post.alt}">${post.cta} <span aria-hidden="true">→</span></button>`
    : `<a class="social-card-link" href="${post.link}" target="_blank" rel="noopener">${post.cta} <span aria-hidden="true">→</span></a>`;

  card.innerHTML = `
    <img src="${post.image}" alt="${post.alt}">
    <div class="social-card-overlay">
      ${action}
    </div>
  `;
  socialGrid.appendChild(card);
});

socialGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-full-image]");
  if (!trigger) return;
  openSocialLightbox(trigger.dataset.fullImage, trigger.dataset.fullAlt);
});

socialLightboxClose.addEventListener("click", closeSocialLightbox);
socialLightbox.addEventListener("click", (event) => {
  if (event.target === socialLightbox) closeSocialLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !socialLightbox.hidden) closeSocialLightbox();
});

// Section fade on scroll
const scrollSections = [...document.querySelectorAll("main > section")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function sectionOpacity(rect, viewportHeight) {
  const minOpacity = 0.58;
  const fadeZone = viewportHeight * 0.48;

  if (rect.bottom <= 0 || rect.top >= viewportHeight) {
    return minOpacity;
  }

  const enterProgress = clamp((viewportHeight - rect.top) / fadeZone, 0, 1);
  const exitProgress = clamp(rect.bottom / fadeZone, 0, 1);
  const progress = Math.min(enterProgress, exitProgress);
  const eased = progress * progress * (3 - 2 * progress);

  return minOpacity + eased * (1 - minOpacity);
}

function updateSectionOpacities() {
  if (prefersReducedMotion.matches) {
    scrollSections.forEach((section) => section.style.removeProperty("--section-opacity"));
    return;
  }

  const viewportHeight = window.innerHeight;
  scrollSections.forEach((section) => {
    section.style.setProperty("--section-opacity", sectionOpacity(section.getBoundingClientRect(), viewportHeight));
  });
}

let sectionFadeTicking = false;

function queueSectionFadeUpdate() {
  if (sectionFadeTicking) return;
  sectionFadeTicking = true;
  requestAnimationFrame(() => {
    updateSectionOpacities();
    sectionFadeTicking = false;
  });
}

window.addEventListener("scroll", queueSectionFadeUpdate, { passive: true });
window.addEventListener("resize", queueSectionFadeUpdate, { passive: true });
prefersReducedMotion.addEventListener("change", updateSectionOpacities);
updateSectionOpacities();

// Same-page nav jumps (Home / About / Contact)
const navLinks = [...document.querySelectorAll('.site-header a[href^="#"]')];

function setActiveNav(hash) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });
}

function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  target.scrollIntoView({
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    block: "start"
  });
  history.replaceState(null, "", hash);
  setActiveNav(hash);
  queueSectionFadeUpdate();
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;
    event.preventDefault();
    scrollToHash(hash);
  });
});

if (location.hash) {
  setActiveNav(location.hash);
}
