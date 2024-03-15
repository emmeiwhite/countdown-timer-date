const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAwayElement = document.querySelector(".giveaway");
// This is my future date for the event (say)
const giveAwayDate = new Date(2024, 10, 15, 13, 49, 0);

/** 1. Year */
const year = giveAwayDate.getFullYear();

/** 2. Month */
const monthIndex = giveAwayDate.getMonth();
const month = months[monthIndex];

/** 3. Date */
const date = giveAwayDate.getDate();

/** 4. Day */
const dayIndex = giveAwayDate.getDay();
const day = weekdays[dayIndex];
console.log(day);

/** 5. Hours */
const hours = giveAwayDate.getHours();

/** 6; Minutes */
const minutes = giveAwayDate.getMinutes();
giveAwayElement.textContent = `giveaway ends on ${day}, ${date} ${month}, ${year}, ${hours}:${minutes} 
  ${hours > 11 ? "PM" : "AM"}`;

/** B) COUNT-DOWN TIMER LOGIC */

// // Update countdown every second
const countdownInterval = setInterval(() => {
  updateCountdown(eventDate);
}, 1000);

function updateCountdown(eventDate) {
  const nowDate = new Date();
  const futureDate = new Date(eventDate); // Future date

  const difference = futureDate.getTime() - nowDate.getTime(); // Difference in milliseconds

  if (difference <= 0) {
    // If event has already occurred, set all countdown values to 0
    document.querySelector(".days").textContent = "0";
    document.querySelector(".hours").textContent = "0";
    document.querySelector(".mins").textContent = "0";
    document.querySelector(".secs").textContent = "0";

    clearInterval(countdownInterval);
    return;
  }

  // // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML content of the countdown elements
  document.querySelector(".days").textContent = days;
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".mins").textContent = minutes;
  document.querySelector(".secs").textContent = seconds;
}

// // Example usage
const eventDate = new Date(2024, 10, 15, 13, 49, 0);
