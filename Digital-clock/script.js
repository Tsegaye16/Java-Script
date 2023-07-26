// Get references to the clock hands
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

// Function to update the clock hands
function updateClock() {
  const now = new Date();

  // Get the current time in hours, minutes, and seconds
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate the angles for the clock hands
  const secondsAngle = (seconds / 60) * 360 + 90;
  const minutesAngle = (minutes / 60) * 360 + 90;
  const hoursAngle = (((hours % 12) + minutes / 60) / 12) * 360 + 90;

  // Apply the rotation to the clock hands using CSS transform property
  secondHand.style.transform = `rotate(${secondsAngle}deg)`;
  minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
  hourHand.style.transform = `rotate(${hoursAngle}deg)`;
}

// Set up an interval to update the clock every second
setInterval(updateClock, 1000);

// Call updateClock once immediately to avoid a delay in showing the clock
updateClock();
