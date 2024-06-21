export class Operation {
    constructor(type, userId, amount) {
      this.type = type;
      this.userId = userId;
      this.amount = amount;
    }
  
    execute() {
      throw new Error('Execute method must be implemented by subclasses');
    }
  }
  
  export class ExecutableOperation {
    execute() {
      throw new Error('Execute method must be implemented');
    }
  }