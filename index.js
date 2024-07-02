const day = document.querySelector(".day");
const time = document.querySelector(".time");
const image = document.querySelector("img");

const currentDate = new Date();
const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
const currentTimei = currentDate.toLocaleString('en-US', { timeStyle: 'short', timeZone: 'UTC' });

window.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
    day.textContent = `Current day of the week: ${dayOfWeek}`
    time.textContent = `Current time: ${currentTimei}`;
    
});

setInterval(() => {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleString('en-US', { timeStyle: 'short', timeZone: 'UTC' });
  time.textContent = `Current time: ${currentTime}`;
}, 1000);



