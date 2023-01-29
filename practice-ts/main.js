// ES Modules (2015)
import { logger } from "./02-data-types.js";


const printButton = document.querySelector('.printButton');

const handlePrint = () => {
  logger.log('hello TypeScript');
};

printButton.addEventListener('click', handlePrint);