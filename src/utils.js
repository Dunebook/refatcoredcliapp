import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export function getUserById(userId) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const jsonPath = path.resolve(__dirname, 'store.json'); 
    const data = fs.readFileSync(jsonPath);
    const users = JSON.parse(data.toString());
    return users.find(user => user.id === userId);
}
