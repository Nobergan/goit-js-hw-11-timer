class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(selector);
    this.targetDate = new Date(targetDate);
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
      this.deltaTime = this.targetDate - this.currentTime;

      this.countTime(), this.timeMarkup();
      if (this.deltaTime < 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  countTime() {
    this.days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    this.mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
  }

  timeMarkup() {
    this.ref = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };

    this.ref.days.textContent = this.pad(this.days);
    this.ref.hours.textContent = this.pad(this.hours);
    this.ref.mins.textContent = this.pad(this.mins);
    this.ref.secs.textContent = this.pad(this.secs);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.deltaTime = 0;
    this.countTime(this.deltaTime);
    this.timeMarkup(this.deltaTime);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const countdownTimer = new CountdownTimer('#timer-1', 'Feb 17, 2021');

countdownTimer.startTimer();

// ---------------------------------------------------------------

// const ref = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]'),
// };

// const timer = {
//   intervalId: null,
//   targetDate: new Date('Feb 17, 2021'),
//   start() {
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = this.targetDate - currentTime;

//       updateClockface(deltaTime);
//     }, 1000);
//   },
// };
// timer.start();

// function updateClockface(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   ref.days.textContent = days;
//   ref.hours.textContent = hours;
//   ref.mins.textContent = mins;
//   ref.secs.textContent = secs;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }
