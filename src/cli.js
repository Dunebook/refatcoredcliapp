import { ArgumentsParser } from './argumentsParser.js';
import { BillOperation } from './operations/billOperation.js';

export class CLI {
  constructor() {
    this.parser = new ArgumentsParser(); // Instantiate ArgumentsParser
  }

  run(args) {
    try {
      const operationArgs = this.parser.parse(args); // Use parser to parse CLI arguments
      let operation;

      if (operationArgs.type === 'bill') {
        operation = new BillOperation(operationArgs.type, operationArgs.userId, operationArgs.amount);
      }

      if (operation) {
        operation.execute();
      } else {
        console.error('Unknown operation type:', operationArgs.type);
      }
    } catch (error) {
      console.error('Error processing command:', error.message);
    }
  }
}
