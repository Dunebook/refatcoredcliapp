#!/usr/bin/env node
import { CLI } from './src/cli.js'; 

const cli = new CLI();
cli.run(process.argv);