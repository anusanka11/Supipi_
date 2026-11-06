(() => {
  "use strict";

  const config = window.BIRTHDAY_CONFIG || {};
  const $ = (id) => document.getElementById(id);

  const lockScreen = $("lockScreen");
  const unlockButton = $("unlockButton");
  const mainContent = $("mainContent");
  const audio = $("birthdayAudio");
  const musicButton = $("musicButton");
  const musicLabel = $("musicLabel");
  const surpriseButton = $("surpriseButton");
  const surpriseReveal = $("surpriseReveal");
  const toast = $("toast");

  let toastTimer;
  let hasUnlocked = false;

  function setText(id, value) {
    const node = $(id);
    if (node && typeof value === "string") node.textContent = value;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function safeImagePath(path) {
    return typeof path === "string" && path.trim() ? path : "resources/images/photo-01.svg";
  }

  function applyContent() {
    const name = config.personName || "Someone Special";
    const firstName = config.firstName || name.split(/\s+/)[0];

    document.title = `A Birthday Surprise for ${name}`;
    setText("personName", name);
    setText("dearName", firstName);
    setText("footerName", name);
    setText("heroMessage", config.heroMessage || "A little reminder that the world is brighter with you in it.");
    setText("mainWish", config.mainWish || "You deserve all the happiness your heart can hold.");
    setText("mainMessage", config.mainMessage || "Wishing you a beautiful birthday filled with happiness and love.");
    setText("surpriseTitle", config.surpriseTitle || "A little wish, just for you");
    setText("surpriseMessage", config.surpriseMessage || "Happy Birthday!");
    setText("footerYear", String(new Date().getFullYear()));

    const heroPhoto = $("heroPhoto");
    const surpriseImage = $("surpriseImage");
    if (heroPhoto) heroPhoto.src = safeImagePath(config.heroImage);
    if (surpriseImage) surpriseImage.src = safeImagePath(config.surpriseImage);
    if (audio && config.audioFile) {
      audio.src = config.audioFile;
      audio.load();
    }

    const date = parseBirthdayDate(config.birthdayDate);
    if (date) {
      const label = date.toLocaleDateString("en-GB", { day: "2-digit", month: "long" }).toUpperCase();
      setText("birthdayDate", label);
    }

    renderGallery(Array.isArray(config.gallery) ? config.gallery : []);
  }

  function parseBirthdayDate(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
  }

  function renderGallery(items) {
    const grid = $("galleryGrid");
    if (!grid) return;
    grid.replaceChildren();

    items.forEach((item, index) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-item";
      const image = document.createElement("img");
      image.src = safeImagePath(item && item.image);
      image.alt = `Birthday gallery photo ${index + 1}`;
      image.loading = "lazy";
      const caption = document.createElement("figcaption");
      caption.textContent = (item && item.caption) || `A lovely memory ${index + 1}`;
      figure.append(image, caption);
      grid.append(figure);
    });
  }

  async function unlockExperience() {
    if (hasUnlocked) return;
    hasUnlocked = true;
    document.body.classList.add("is-unlocked");
    document.body.classList.remove("is-locked");
    mainContent.removeAttribute("inert");
    mainContent.setAttribute("aria-hidden", "false");
    lockScreen.setAttribute("aria-hidden", "true");

    // Browsers allow audio playback after a real user click/tap.
    try {
      await audio.play();
      updateMusicButton(true);
    } catch (error) {
      updateMusicButton(false);
      showToast("Tap “Play music” to start the birthday song 🎵");
    }
  }

  function updateMusicButton(isPlaying) {
    musicButton.setAttribute("aria-pressed", String(isPlaying));
    musicButton.setAttribute("aria-label", isPlaying ? "Pause birthday music" : "Play birthday music");
    musicLabel.textContent = isPlaying ? "Pause music" : "Play music";
  }

  async function toggleMusic() {
    if (audio.paused) {
      try {
        await audio.play();
        updateMusicButton(true);
      } catch (error) {
        updateMusicButton(false);
        showToast("Could not play the audio. Check the file in resources/audio/.");
      }
    } else {
      audio.pause();
      updateMusicButton(false);
    }
  }

  function revealSurprise() {
    const isOpen = !surpriseReveal.hidden;
    surpriseReveal.hidden = isOpen;
    surpriseButton.setAttribute("aria-expanded", String(!isOpen));
    surpriseButton.querySelector("span:first-child").textContent = isOpen ? "Open your surprise" : "Close your surprise";
    if (!isOpen) {
      surpriseReveal.scrollIntoView({ behavior: "smooth", block: "center" });
      showToast("A little birthday love, just for you ♥");
    }
  }

  unlockButton.addEventListener("click", unlockExperience);
  musicButton.addEventListener("click", toggleMusic);
  surpriseButton.addEventListener("click", revealSurprise);
  audio.addEventListener("play", () => updateMusicButton(true));
  audio.addEventListener("pause", () => updateMusicButton(false));

  applyContent();
})();
