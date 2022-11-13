
class Calculator {
  current = 0;

  execute(command) {
   this.current = command.execute(this.current, command.value);
   console.log('The result is ', this.current)
  }
}

module.exports = Calculator;
