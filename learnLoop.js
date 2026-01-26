console.log('start');

setTimeout(() => console.log('timeout-1'), 0);

Promise.resolve()
  .then(() => {
    console.log('promise-1');
    
    Promise.resolve().then(() => console.log('nested-promise-2'));
    queueMicrotask(() => {
      console.log('microtask-3');
      queueMicrotask(() => console.log('double-nested-4'));
    });
  })
  .then(() => console.log('promise-5'));

setTimeout(() => console.log('timeout-6'), 0);

queueMicrotask(() => {
  console.log('microtask-7');
  setTimeout(() => console.log('timeout-from-microtask-8'), 0);
});

console.log('end');