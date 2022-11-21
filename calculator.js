class Calculator {
  current = 0;
  commands = [];

  constructor(number) {
    this.current = parseInt(number);
  }

  pushCommand(command) {
    this.commands.push(command);
  }

  execute() {
    this.commands.forEach((command) => {
      this.current = command.execute(this.current, command.value);
    });
    this.commands = [];
  }

  undo() {
    this.commands.pop();
  }

  getResult() {
    console.log("The result is ", this.current);
  }
}

module.exports = Calculator;
