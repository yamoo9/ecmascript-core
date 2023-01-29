// ES Modules (2015)
import { logger } from './02-data-types.js';
const printButton = document.querySelector('.printButton');
const handlePrint = () => {
    logger.log('hello TypeScript → Compiled JavaScript on Browser 😃');
};
// 타입 보호(type guard)
if (printButton) {
    printButton.addEventListener('click', handlePrint);
}
