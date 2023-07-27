function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  // Calculate angles for the clock hands
  const secondAngle = seconds * 6 - 90 + "deg";
  const minuteAngle = minutes * 6 - 90 + "deg";
  const hourAngle = ((hours % 12) + minutes / 60) * 30 - 90 + "deg";

  // Apply rotation to the clock hands
  secondHand.style.transform = `rotate(${secondAngle})`;
  minuteHand.style.transform = `rotate(${minuteAngle})`;
  hourHand.style.transform = `rotate(${hourAngle})`;
}

// Update the clock every 100 milliseconds
setInterval(updateClock, 100);
