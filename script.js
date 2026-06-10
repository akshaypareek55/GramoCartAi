// ==========================
// GramoCart AI 2027 Script
// ==========================

console.log("GramoCart AI Loaded");

// Welcome Message

setTimeout(() => {
  console.log("Welcome to GramoCart AI 🚀");
}, 1000);

// Animated Stats Counter

const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = parseInt(
      counter.innerText.replace(/\D/g, "")
    );

    let count = 0;

    const speed = target / 50;

    const interval = setInterval(() => {

      count += speed;

      if (count >= target) {
        counter.innerText = counter.innerText;
        clearInterval(interval);
      } else {
        counter.innerText =
          Math.floor(count) + "+";
      }

    }, 20);

  };

  updateCounter();

});

// Card Click Animation

document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("click", () => {

    card.style.transform =
      "scale(0.95)";

    setTimeout(() => {

      card.style.transform =
        "scale(1)";

    }, 200);

  });

});

// Search Filter

const searchInput =
document.querySelector(".topbar input");

if(searchInput){

searchInput.addEventListener("keyup", () => {

const value =
searchInput.value.toLowerCase();

document.querySelectorAll(".card")
.forEach(card => {

card.style.display =
card.innerText.toLowerCase()
.includes(value)
? "block"
: "none";

});

});

}

// Digital Clock

const clock =
document.createElement("div");

clock.style.position = "fixed";
clock.style.top = "15px";
clock.style.right = "20px";
clock.style.padding = "10px 15px";
clock.style.borderRadius = "12px";
clock.style.background =
"rgba(255,255,255,.08)";
clock.style.backdropFilter =
"blur(20px)";
clock.style.fontSize = "14px";

document.body.appendChild(clock);

function updateClock(){

const now = new Date();

clock.innerHTML =
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// Notification

setTimeout(() => {

const notice =
document.createElement("div");

notice.innerHTML =
"🚀 Welcome to GramoCart AI";

notice.style.position="fixed";
notice.style.bottom="20px";
notice.style.right="20px";
notice.style.padding="15px 20px";
notice.style.borderRadius="15px";
notice.style.background=
"linear-gradient(90deg,#7c3aed,#06b6d4)";
notice.style.zIndex="9999";

document.body.appendChild(notice);

setTimeout(() => {

notice.remove();

},4000);

},2000);
