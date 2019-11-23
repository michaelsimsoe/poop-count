// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
import "../src/style.scss";

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/service-worker.js", { scope: "./" })
    .then(function(reg) {
      console.log("[Companion]", "Service worker registered!");
      console.log(reg);
    });
}

let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", e => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

window.addEventListener("appinstalled", evt => {
  document.getElementById("pwa-btn").remove();
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    console.log(deferredPrompt);
    deferredPrompt.userChoice.then(function(choiceResult) {
      if (choiceResult.outcome === "accepted") {
        console.log("Your PWA has been installed");
      } else {
        console.log("User chose to not install your PWA");
      }

      deferredPrompt = null;
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const urineContent = document.getElementById("stats__stats-today_urine");
  const fecesContent = document.getElementById("stats__stats-today_feces");
  const urineBtn = document.getElementById("today_urine_btn");
  const fecesBtn = document.getElementById("today_feces_btn");

  urineBtn.addEventListener("click", function(e) {
    urineContent.classList.add("grow-stat");
    urineContent.innerHTML = +urineContent.innerHTML + 1;
    setTimeout(function() {
      urineContent.classList.remove("grow-stat");
    }, 1000);
  });

  fecesBtn.addEventListener("click", function(e) {
    fecesContent.classList.add("grow-stat");
    fecesContent.innerHTML = +fecesContent.innerHTML + 1;
    setTimeout(function() {
      fecesContent.classList.remove("grow-stat");
    }, 1000);
  });

  const installbutton = document.getElementById("install");
  if (!installbutton) return;
  if (window.matchMedia("(display-mode: standalone)").matches) {
    installbutton.addEventListener("click", installPwa);
  }

  function installPwa() {
    install();
    installbutton.removeEventListener("click", installPwa);
  }

  installbutton.addEventListener("click", installPwa);
});
