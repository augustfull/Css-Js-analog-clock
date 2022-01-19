document.addEventListener("DOMContentLoaded", function () {
  const secondHand = document.querySelector(".hand.second-hand");
  const minuteHand = document.querySelector(".hand.minute-hand");
  const hourHand = document.querySelector(".hand.hour-hand");

  function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondDegrees = (seconds / 60) * 360 + 91;
    const minuteDegrees = (minutes / 60) * 360 + 91;
    const hourDegrees = (hours / 12) * 360 + 91;
  
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(getTime, 1000);
});
