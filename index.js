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
    if (seconds == 0) secondHand.style.transition = `all 0s`;
    else secondHand.style.transition = `all 30ms cubic-bezier(0.15, 1.25, 0.35, 1.4)`;

    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    if (minutes == 0) minuteHand.style.transition = `all 0s`;
    else minuteHand.style.transition = `all 30ms cubic-bezier(0.15, 1.25, 0.35, 1.4)`;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    if (hours == 0) hourHand.style.transition = `all 0s`;
    else hourHand.style.transition = `all 30ms cubic-bezier(0.15, 1.25, 0.35, 1.4)`;
  }

  setInterval(getTime, 1000);

  getTime();
});
