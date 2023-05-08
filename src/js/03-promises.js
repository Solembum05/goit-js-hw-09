import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const formData = {
    delay: form.delay.value,
    step: form.step.value,
    amount: form.amount.value,
  };
  let step = Number(formData.delay);
  for (let i = 1; i <= Number(formData.amount); i++) {
    let prom = createPromise(i, step)
      .then((i, step) => {})
      .catch((i, step) => {});

    step += Number(formData.step);
  }
}

function createPromise(position, delay) {
  const promice = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });

  return promice;
}
