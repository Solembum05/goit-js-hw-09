import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let dateInputValue = 0;
let timeId = 'null';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateInputValue = selectedDates[0].getTime();
    if (dateInputValue - new Date() < 0) {
      Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};
const startBtn = document.querySelector('button[data-start]');
const timerInput = document.getElementById('datetime-picker');
const timer = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

flatpickr(timerInput, options);

startBtn.addEventListener('click', onBtnClick);
startBtn.setAttribute('disabled', 'disabled');

function onBtnClick() {
  timeId = setInterval(() => {
    const currentTime = new Date();
    const deltaTime = dateInputValue - currentTime;

    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    updateClock({ days, hours, minutes, seconds });

    if (deltaTime < 1000) {
      clearInterval(timeId);
      return;
    }
  }, 1000);
}

function updateClock({ days, hours, minutes, seconds }) {
  timer.days.textContent = `${days}`;
  timer.hours.textContent = `${hours}`;
  timer.minutes.textContent = `${minutes}`;
  timer.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
