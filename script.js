const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const locator = document.querySelector("[data-locator]");
const locatorMessage = document.querySelector("[data-locator-message]");

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

locator?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(locator);
  const location = String(data.get("location") || "").trim();

  locatorMessage.textContent = location
    ? `Showing cha cha stockists near ${location}.`
    : "Enter a city or zip code to find cha cha nearby.";
});
