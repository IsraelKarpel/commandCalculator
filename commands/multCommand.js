class MultCommand {

    constructor() {
        this.value = 0
        this.execute = (a,b) => {return a * b };
    }
    
    initialize(value) {
        this.value = parseInt(value)
      }
  }
  
  module.exports = MultCommand;
  