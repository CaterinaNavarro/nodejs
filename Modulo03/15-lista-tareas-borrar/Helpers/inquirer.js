import colors from 'colors';
import inquirer from 'inquirer';

const options = [
  'Crear tarea',
  'Listar tareas',
  'Listar tareas completadas',
  'Listar tareas pendientes',
  'Completar tarea(s)',
  'Borrar tarea',
  'Salir'
]

const showMenu = async () => {

  console.clear();

  const lineMessage = '========================================'.brightMagenta,
    messageMenu = 'Seleccione una opción'.rainbow.italic.bold;

  console.log(`${lineMessage}\n\t${messageMenu}\n${lineMessage}\n`); //Show initial message

  return await inquirer.prompt([
  {
    type: 'list',
    name: 'value',
    message: '¿Qué desea hacer?',
    choices : options.map((item, index, self) => {
      if(index === self.length - 1) return { name: `${'0.'.brightYellow}  ${item.italic}`, value: 0 };
      return { name: `${(`${index + 1}.`).toString().brightGreen}  ${item.italic}`, value: index +1 };
    })
  }]);
}

// pause readline until user press enter key
const confirmProcess = async (message = '¿Desea continuar? ') => {
  return await inquirer.prompt([
    {
      type: 'confirm',
      name: 'ok',
      message
    }]);
}

// Print question and waits answer
const readInput = async (message, validateMessage) => {

  return await inquirer.prompt([
    {
      type: 'input',
      name: 'value',
      message,
      validate (value) {
        return value.trim().length === 0 ? validateMessage : true; 
      }
    }]);
}

// List choices arr
const listChoices = async (message, choices) => {

  if (typeof choices == "undefined" || choices.lenght === 0) throw new Error('You must indicate some option.')

  choices.push('Salir');
  return await inquirer.prompt([
  {
    type: 'list',
    name: 'value',
    message,
    choices : choices.map((item, index, self) => {
      if(index === self.length - 1) return { name: `${'0.'.brightYellow}  ${item.italic}`, value: 0 };
      return { name: `${(`${index + 1}.`).toString().brightGreen}  ${item.desc.italic}`, value: item.id };
    })
  }]);
}

export { showMenu, confirmProcess, readInput, listChoices }