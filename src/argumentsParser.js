export class ArgumentsParser {
    parse(args) {
      args.splice(0, 2); 
      const operation = {
        type: args[0],
        userId: undefined,
        amount: undefined
      };
      for (let i = 1; i < args.length; i++) {
        if (args[i] === '--id') {
          const userId = Number(args[i + 1]);
          if (Number.isNaN(userId)) {
            throw new Error('Item after `--id` must be a number');
          }
          operation.userId = userId;
          i++; // Skip the next element since it's already processed
        } else if (args[i] === '--amount') {
          const amount = Number(args[i + 1]);
          if (Number.isNaN(amount)) {
            throw new Error('Item after `--amount` must be a number');
          }
          operation.amount = amount;
          i++; // Skip the next element since it's already processed
        }
      }
      if (!(operation.userId && operation.amount)) {
        throw new Error('Must specify userId and amount via --id `id` and --amount `amount`');
      }
      return operation;
    }
  }
  