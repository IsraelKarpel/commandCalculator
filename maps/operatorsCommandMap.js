const AddCommand = require('../commands/addCommand')
const SubCommand = require('../commands/subCommand')
const MultCommand = require('../commands/multCommand')
const DivCommand = require('../commands/divCommand')

const operatorsCommandsMap = {
    '+': () => {return new AddCommand()},
    '-': () => {return new SubCommand()},
    '*': () => {return new MultCommand()},
    '/': () => {return new DivCommand()},
}

module.exports = {operatorsCommandsMap}
