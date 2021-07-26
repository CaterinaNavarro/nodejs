/* eslint-disable no-console */
import { showMenu, pause } from './Helpers/mensajes.cjs';

console.clear();

const main = async () => {

  try {
    
    console.log('Hola mundo'.cyan);

    let opt = await showMenu();
    console.log({opt});

    //await pause();
  
    console.log('\nBye bye! =)'.rainbow.italic);

  }

  catch (ex){
    console.err(ex.message);
  }
  
};

main();

