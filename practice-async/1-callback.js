function delay(callback, timeout = 200) {
  setTimeout(callback, timeout);
}

let callbackCount = 0;

function callback() {
  console.log(`callback ${++callbackCount}`);
}

delay(() => {
  callback();
  delay(() => {
    callback();
    delay(() => {
      callback();
      delay(() => {
        callback();
      }, 1600); // 1.6s
    }, 800); // 0.8s
  }, 400); // 0.4s
}); // 0.2s
