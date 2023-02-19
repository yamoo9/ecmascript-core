// Promise 클래스
// class Promise {}

export const delay = (timeount = 1000) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ message: '비동기 통신 성공' });
      } else {
        reject({ message: '비동기 통신 실패', reason: 'NETWORK ERROR' });
      }
    }, timeount);
  });

const onFulfilment = (response) => console.log(response.message);
const onRejection = (error) => console.error(`${error.reason} : ${error.message}`);
const OnFinally = () => console.log('understaing Promise process');

delay().then(onFulfilment).catch(onRejection).finally(OnFinally);
delay(3000).then(onFulfilment).catch(onRejection).finally(OnFinally);
delay(5000).then(onFulfilment).catch(onRejection).finally(OnFinally);
