class AddCommand {

  constructor(value) {
      this.value = value;
      this.execute = (a,b) => {return a + b };
  }
  
}

module.exports = AddCommand;
