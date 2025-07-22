useState;

const btn = document.getElementById("contactBtn");
const about = document.getElementById("aboutSection");

btn.addEventListener("click", () => {
  btn.style.display = "none"; // hide button
  about.style.display = "block"; // show content
});
