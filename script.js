const rotatingWords = ["COMMUNITY", "CULTURE", "JUSTICE", "INNOVATION", "CHANGE"];
const rotatingWord = document.getElementById("rotatingWord");
let wordIndex = 0;

setInterval(() => {
  rotatingWord.classList.remove("swap-in");
  rotatingWord.classList.add("swap-out");

  setTimeout(() => {
    wordIndex = (wordIndex + 1) % rotatingWords.length;
    rotatingWord.textContent = rotatingWords[wordIndex];
    rotatingWord.classList.remove("swap-out");
    rotatingWord.classList.add("swap-in");
  }, 330);
}, 2600);

// Video behavior
document.querySelectorAll(".video-card").forEach((card) => {
  const video = card.querySelector("video");
  const soundButton = card.querySelector(".sound-toggle");

  card.addEventListener("mouseenter", () => video.pause());
  card.addEventListener("mouseleave", () => video.play().catch(() => {}));

  soundButton.addEventListener("click", (event) => {
    event.stopPropagation();
    video.muted = !video.muted;
    soundButton.textContent = video.muted ? "UNMUTE" : "MUTE";
  });
});

const videoTrack = document.getElementById("videoTrack");
document.querySelector(".carousel-arrow.next").addEventListener("click", () => {
  videoTrack.scrollBy({ left: videoTrack.clientWidth * 0.75, behavior: "smooth" });
});
document.querySelector(".carousel-arrow.prev").addEventListener("click", () => {
  videoTrack.scrollBy({ left: -videoTrack.clientWidth * 0.75, behavior: "smooth" });
});

// Journalism bylines
const bylines = [
  {
    publication: "KQED",
    title: "THE ARTISTS<br>RESHAPING THE BAY",
    description: "Reporting on the people and ideas expanding the region’s cultural imagination.",
    image: "assets/byline-1.svg",
    link: "#"
  },
  {
    publication: "PORTLAND MONTHLY",
    title: "A NEW GENERATION<br>BUILT DIFFERENT",
    description: "A feature about emerging creatives, the communities they shape and the ideas moving culture forward.",
    image: "assets/byline-2.svg",
    link: "#"
  },
  {
    publication: "OREGON MAGAZINE",
    title: "CREATIVITY BEYOND<br>THE EXPECTED",
    description: "A closer look at the artists building new creative pathways throughout Oregon.",
    image: "assets/byline-3.svg",
    link: "#"
  },
  {
    publication: "EUGENE WEEKLY",
    title: "THE PEOPLE MOVING<br>THE CONVERSATION",
    description: "Stories about culture, identity and community change.",
    image: "assets/byline-4.svg",
    link: "#"
  },
  {
    publication: "SAN QUENTIN NEWS",
    title: "STORIES OF RETURN,<br>REPAIR AND POSSIBILITY",
    description: "Reporting centered on reentry, dignity and life beyond incarceration.",
    image: "assets/byline-5.svg",
    link: "#"
  },
  {
    publication: "GOOD COMPENNY",
    title: "THE CULTURE,<br>IN ITS OWN WORDS",
    description: "Long-form conversations with artists, musicians and cultural architects.",
    image: "assets/byline-6.svg",
    link: "#"
  },
  {
    publication: "GLUED MAGAZINE",
    title: "STORIES THAT STICK",
    description: "Independent storytelling built around community, creativity and memory.",
    image: "assets/byline-7.svg",
    link: "#"
  }
];

const bylineButtons = [...document.querySelectorAll(".byline-item")];
const bylineImage = document.getElementById("bylineImage");
const storyPublication = document.getElementById("storyPublication");
const storyTitle = document.getElementById("storyTitle");
const storyDescription = document.getElementById("storyDescription");
const storyLink = document.getElementById("storyLink");

function setByline(index) {
  const item = bylines[index];
  bylineButtons.forEach((button, i) => button.classList.toggle("active", i === index));
  bylineImage.animate([{opacity: .2, transform: "translateY(10px)"}, {opacity: 1, transform: "translateY(0)"}], {duration: 300});
  bylineImage.src = item.image;
  storyPublication.textContent = item.publication;
  storyTitle.innerHTML = item.title;
  storyDescription.textContent = item.description;
  storyLink.href = item.link;
}

bylineButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => setByline(Number(button.dataset.index)));
  button.addEventListener("focus", () => setByline(Number(button.dataset.index)));
  button.addEventListener("click", () => setByline(Number(button.dataset.index)));
});

// Social projects
const socialProjects = [
  {
    account: "GOOD COMPENNY MAGAZINE",
    handle: "@GOODCOMPENNY",
    description: "Building a platform for culture makers and the stories that deserve to be seen.",
    image: "assets/social-1.svg",
    stats: ["12K", "8.6%", "250K+"]
  },
  {
    account: "NONPROFIT COMMUNICATIONS",
    handle: "@COMMUNITYSTORIES",
    description: "Turning impact, programs and lived experience into clear, engaging social storytelling.",
    image: "assets/social-2.svg",
    stats: ["104%", "93%", "124%"]
  },
  {
    account: "EDITORIAL CAMPAIGNS",
    handle: "@STORYLED",
    description: "Building cross-platform campaigns that connect print, video and digital audiences.",
    image: "assets/social-3.svg",
    stats: ["1M+", "40+", "10X"]
  }
];

const phoneImage = document.getElementById("phoneImage");
const socialAccount = document.getElementById("socialAccount");
const socialHandle = document.getElementById("socialHandle");
const socialDescription = document.getElementById("socialDescription");
const socialButtons = [...document.querySelectorAll("[data-social]")];
const statOne = document.getElementById("statOne");
const statTwo = document.getElementById("statTwo");
const statThree = document.getElementById("statThree");

function setSocial(index) {
  const project = socialProjects[index];
  socialButtons.forEach((button, i) => button.classList.toggle("active", i === index));
  phoneImage.animate([{opacity: .25, transform: "translateY(16px)"}, {opacity: 1, transform: "translateY(0)"}], {duration: 350});
  phoneImage.src = project.image;
  socialAccount.textContent = project.account;
  socialHandle.textContent = project.handle;
  socialDescription.textContent = project.description;
  [statOne.textContent, statTwo.textContent, statThree.textContent] = project.stats;
}

socialButtons.forEach((button) => {
  button.addEventListener("click", () => setSocial(Number(button.dataset.social)));
});

// Scroll-driven social change
const socialSection = document.querySelector(".social-section");
let currentSocial = 0;

window.addEventListener("scroll", () => {
  const rect = socialSection.getBoundingClientRect();
  const viewport = window.innerHeight;
  if (rect.top < viewport && rect.bottom > 0) {
    const progress = Math.min(0.999, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
    const nextIndex = Math.min(2, Math.floor(progress * 3));
    if (nextIndex !== currentSocial) {
      currentSocial = nextIndex;
      setSocial(currentSocial);
    }
  }
}, { passive: true });
