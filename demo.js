'use strict';

/**
 * Проста демонстрація примусового завершення асинхронної операції за 
 * допомогою цільового класу CancelablePromise / run -> node demo.js
 */

const CancelablePromise = require('./cancelable-promise');

// 1
const demo1 = async () => {
    let promise1 = new CancelablePromise(resolve => {
        setTimeout(() => {
            resolve('> 1 операція успішно завершена!');
        }, 1000);
    });
    console.dir({promise1});
    await promise1.then(console.log).catch(console.log);
};

// 2
const demo2 = async () => {
    let promise2 = new CancelablePromise(resolve => {
        setTimeout(() => {
            resolve('> 2 операція успішно завершена!');
        }, 1000);
    });    
    promise2.cancel();
    console.dir({promise2});
    await promise2.then(console.log).catch(console.log);
};

// 3 - MainScript:
demo1();
demo2();
