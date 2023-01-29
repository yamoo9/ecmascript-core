/* -------------------------------------------------------------------------- */
/* Primitives                                                                 */
/* -------------------------------------------------------------------------- */

// number
let totalPrice: number = 98_000_000;

// string
let greetingMessage: string = '새해 복 많이 받으세요!';

// boolean
let isComplete: boolean = false;
let hasChildren: boolean = true;

// undefined
let cup: undefined;

// null
let bodyElement: null | HTMLElement = null;
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
const getElementById = (idName: string): null | HTMLElement => {
  return document.getElementById(idName);
};

// 사용자 정의 타입 활용
{
  // 구현 사항
  type GetElementByIdType = (idName: string) => null | HTMLElement;

  const getElementById: GetElementByIdType = (id) => {
    return document.getElementById(id);
  }
}

const rootElement = getElementById('root');


type GetElementsBySelector = (selector: string) => NodeListOf<HTMLElement>;

const getElementsBySelector: GetElementsBySelector = (selector) => {
  return document.querySelectorAll(selector);
}


// array
// 제네릭(Generic)
// const numbers: Array<number> = [101, 201, 301];
const numbers: number[] = [101, 201, 301];

numbers.push(1004);

// object
type LoggerType = {
  log(message: string): void;
  error(errorMessage: string): void;
  info(infoMessage: string): void;
}

const logger: LoggerType = {
  log(message) {
    console.log(message);
  }, 
  error(errorMessage) {
    console.error(errorMessage)
  }, 
  info(infoMessage) {
    console.info(infoMessage);
  }
}

