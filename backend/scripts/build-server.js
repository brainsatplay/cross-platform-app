import execa from 'execa';
import {execSync} from 'child_process'

/**
 * This function is used to create bundle for server. `Pkg` is not supporting es module resolution
 * that we need to create typesafety within tRPC
 */
async function createBundle() {
  return execSync('cd backend && tinybuild');
}
async function main() {
  try {
    await createBundle();
  } catch (e) {
    throw e;
  }
}

console.log('[brainsatplay] Building backend...\n');

main().then(() => { console.log('[brainsatplay] Done\n') }).catch(() => { console.log('[brainsatplay] Cannot build backend'); })