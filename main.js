const Calculator = require ('./calculator')
const AddCommand = require('./commands/addCommand')
const SubCommand = require('./commands/subCommand')
const MultCommand = require('./commands/multCommand')
const DivCommand = require('./commands/divCommand')


const calc = new Calculator();
calc.execute(new AddCommand(2));
calc.execute(new SubCommand(1));
calc.execute(new AddCommand(3));
calc.execute(new MultCommand(5));
calc.execute(new DivCommand(2));
