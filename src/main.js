import commander from 'commander';
const program = new commander.Command();
program
.version("0.0.1") 
.option('--no-sauce', 'Remove sauce')
.option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
.option('--no-cheese', 'plain with no cheese')
.parse(process.argv);

const sauceStr = program.sauce ? 'sauce' : 'no sauce';
const cheeseStr = (program.cheese === false) ? 'no cheese' : `${program.cheese} cheese`;
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);