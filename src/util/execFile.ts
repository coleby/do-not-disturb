import { promisify } from 'util';
import childProcess from 'child_process';

export const execFile = promisify(childProcess.execFile);
