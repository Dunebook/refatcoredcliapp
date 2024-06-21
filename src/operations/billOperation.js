import { Operation } from './operation.js';
import { getUserById } from '../utils.js'; 
import chalk from 'chalk'; 
export class BillOperation extends Operation {
  execute() {
    const user = getUserById(this.userId);
    if (!user) {
      console.error(chalk.red(`No user found with ID ${this.userId}`));
      return;
    }
    console.log(chalk.green(`Billing ${user.name} (User ID: ${this.userId}) for amount $${this.amount}`));
  }
}
