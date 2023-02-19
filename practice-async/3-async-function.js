import { delay } from './2-promise.js';

// 비동기 함수 (async function)
// Asynchronous

function delayAndActionPromise(onSuccess, onFail, onEnd) {
  delay(2000)
    .then(onSuccess)
    .catch(onFail)
    .finally(onEnd);
}

// delayAndActionPromise(
//   (response) => {
//     console.log(response);
//   },
//   (error) => {
//     console.log(error);
//   },
//   () => console.log('end'),
// );



async function delayAndActionAsync() {
  try {
    const response = await delay(2000);
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('end');
  }
}

delayAndActionAsync();