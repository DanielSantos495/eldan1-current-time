const dateCurrent = new Date();
let hours = dateCurrent.getHours();
    minutes = dateCurrent.getMinutes();
    seconds = dateCurrent.getSeconds();

const time = (ampm) => `${hours}:${minutes}:${seconds} ${ampm}`;

// Before midnight
if (hours >= 12) {
  hours = hours === 12 ? hours : hours - 12;
  console.log(time('PM'));
} else {
// After midnight
  hours = hours === 0 ? 12 : hours;
  console.log(time('AM'));
}



console.log(time);
