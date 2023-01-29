"use strict";
/* -------------------------------------------------------------------------- */
/* Primitives                                                                 */
/* -------------------------------------------------------------------------- */
// number
let totalPrice = 98000000;
// string
let greetingMessage = '새해 복 많이 받으세요!';
// boolean
let isComplete = false;
let hasChildren = true;
// undefined
let cup;
// null
let bodyElement = null;
bodyElement = document.body;
// symbol
let id = Symbol('euid');
let anotherId = Symbol('euid');
/* -------------------------------------------------------------------------- */
/* Object                                                                     */
/* -------------------------------------------------------------------------- */
// function
// const js_getElementById = (id) => {
//   return document.getElementById(id);
// }
// 타입 애너테이션(annotation, 주석) 활용
const getElementById = (idName) => {
    return document.getElementById(idName);
};
// 사용자 정의 타입 활용
{
    const getElementById = (id) => {
        return document.getElementById(id);
    };
}
const rootElement = getElementById('root');
const getElementsBySelector = (selector) => {
    return document.querySelectorAll(selector);
};
// array
// 제네릭(Generic)
// const numbers: Array<number> = [101, 201, 301];
const numbers = [101, 201, 301];
numbers.push(1004);


// Module { logger }

export const logger = {
    log(message) {
        console.log(message);
    },
    error(errorMessage) {
        console.error(errorMessage);
    },
    info(infoMessage) {
        console.info(infoMessage);
    }
};
