import { successfulRes, constructor } from "./utils.mjs";

const menu = document.querySelector("#hamburger-menu");
const menuUl = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuUl.classList.toggle("active");
});

const currentDateInput = document.querySelector(".currentDateInput");
const today = new Date().toISOString().slice(0, 10); // Get date in YYYY-MM-DD format

currentDateInput.value = today;

const form = document.querySelector("#emailListForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let payload = JSON.stringify(Object.fromEntries(formData));
  console.log(formData);
  // let payload = JSON.stringify(plan);
  fetch("https://httpbin.org/post", {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json())
    .then((data) =>
      successfulRes(
        "/index.html",
        "Successfully Posted (Saved) to Server! You'll be redirected to home page shortly!",
        data
      )
    )
    .catch((err) => console.log(err));
});

//! ---------------------------

const fakeReviews = [
  "This weekly planner app has completely transformed my productivity! With its intuitive interface and customizable features, I'm finally able to stay organized and focused throughout the week. Highly recommend!",
  "As a busy professional, this planner app has been a lifesaver! It helps me keep track of all my appointments, deadlines, and tasks in one place. Plus, the reminders keep me on track even when things get hectic. Love it!",
  "I've tried many planner apps before, but none compare to this one! The layout is clean and easy to navigate, and I love how I can color-code my tasks for better organization. It's like having a personal assistant right in my pocket!",
  "This app has helped me become more mindful of how I spend my time. The weekly overview feature allows me to see where I'm allocating my energy and adjust accordingly. It's been a game-changer for my productivity!",
  "I've been using this planner app for a few weeks now, and I'm already seeing a difference in my productivity levels. The goal-setting feature keeps me motivated, and I love being able to track my progress over time. Definitely worth trying out!",
  "Finally, a planner app that understands my needs as a student! This app has everything I need to stay on top of my assignments, exams, and extracurricular activities. Plus, the ability to sync across devices makes it super convenient.",
  "I'm not usually one to write reviews, but I had to make an exception for this planner app. It's intuitive, user-friendly, and has all the features I could ever need to stay organized. I don't know how I ever lived without it!",
  "This planner app has helped me strike the perfect balance between work and personal life. The ability to block off time for self-care and relaxation has been a game-changer for my mental health. I can't recommend it enough!",
  "I've tried dozens of planner apps in the past, but this one is by far the best. The layout is clean and minimalistic, the reminders are customizable, and the syncing feature works flawlessly. I'm officially obsessed!",
  "I've been using this planner app to manage my household tasks, and it's made my life so much easier. I love being able to assign tasks to different family members and track their progress in real-time. It's like having a virtual chore chart!",
  "This planner app has helped me become more disciplined with my time management. The habit-tracking feature allows me to see patterns in my behavior and make adjustments as needed. It's been a game-changer for my productivity!",
  "I've been using this planner app to plan my meals for the week, and it's been a game-changer for my health and fitness goals. The grocery list feature makes it easy to stay organized at the store, and I love being able to track my nutrition intake.",
  "I've always struggled with staying organized, but this planner app has made it so much easier. The ability to set recurring tasks and reminders has helped me establish a routine that works for me. I feel more in control of my life than ever before!",
  "I've been using this planner app to track my finances, and it's been a game-changer for my budgeting goals. The ability to categorize expenses and set spending limits has helped me stay on track and save more money. Highly recommend!",
  "This planner app has helped me become more mindful of how I spend my time and energy. The reflection prompts encourage me to pause and evaluate my priorities, leading to greater clarity and purpose in my daily life. I couldn't be happier with it!",
];

let index = 0;

function renderReview() {
  document.querySelector("#reviewContainer").textContent = fakeReviews[index];
}

document.querySelector("#leftReview").addEventListener("click", () => {
  console.log("click LEft");
  index--;
  if (index < 0) {
    index = fakeReviews.length - 1;
  }
  renderReview();
});

document.querySelector("#rightReview").addEventListener("click", () => {
  console.log("click Right");
  index++;
  if (index > fakeReviews.length - 1) {
    index = 0;
  }
  renderReview();
});

renderReview();
constructor()