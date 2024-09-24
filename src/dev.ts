import CodeExecutionTimer, { LogEntry } from './index';

class CodeExecutionTimerEx extends CodeExecutionTimer {
  printEntries(logQueue: LogEntry[]) {
    console.log('override here');
    console.log(logQueue);
  }
}

function delay(ms = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

async function process() {
  const timer = new CodeExecutionTimerEx("Test");

  // Run step 1
  await delay(1000);
  timer.log("step 1 done");

  // Run step 2
  await delay(2000);
  timer.log("step 2 done");

  timer.complete(true);
}


process();
