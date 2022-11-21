const { operatorsCommandsMap } = require("./maps/operatorsCommandMap");
const Calculator = require("./calculator");

const express = require("express");
const app = express();

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/calculate", (req, res) => {
  const {numbers, operators} = getNumbersAndParameters(req.body);
  const calc = new Calculator(numbers.shift());
  addCommandToCalculator(numbers, operators, calc);
  calc.execute();
  calc.getResult();
});

const getNumbersAndParameters = (parameters) => {
    let input = '';
    for (let parameter in parameters) {
      input += parameters[parameter]
    }
    const numbers = input.split(/\D/g);
    const operators = input.split(/\d/g).filter(Boolean);
    return {numbers, operators}
}

const addCommandToCalculator = (numbers, operators, calc) => {
  for (let i = 0; i < numbers.length; i++) {
    const commandOperator = operatorsCommandsMap[operators[i]]();
    commandOperator.initialize(numbers[i]);
    calc.pushCommand(commandOperator);
  }
}

app.listen(3001);
