const ref = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const timer = {
  intervalId: null,
  targetDate: new Date('Feb 17, 2021'),
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;

      updateClockface(deltaTime);
    }, 1000);
  },
};
timer.start();

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  ref.days.textContent = days;
  ref.hours.textContent = hours;
  ref.mins.textContent = mins;
  ref.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
