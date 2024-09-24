/* eslint-disable @typescript-eslint/no-empty-function */
import CodeExecutionTimer from '../src/index'; // Adjust the import path as needed

describe('CodeExecutionTimer', () => {
  let timer: CodeExecutionTimer;

  beforeEach(() => {
    jest.setTimeout(60000);
    timer = new CodeExecutionTimer('Test Timer');
  });

  it('should initialize with an empty log and set start time', () => {
    expect(timer.complete()).toEqual([]);
  });

  it('should log time entries correctly', (done) => {
    // Wait for some time before logging
    setTimeout(() => {
      timer.log('First log entry');

      const logs = timer.complete();
      expect(logs.length).toBe(1);
      expect(logs[0].description).toBe('First log entry');
      expect(logs[0].duration).toBeGreaterThan(0);

      done(); // Since we're testing async code, we call done to ensure Jest waits
    }, 100);
  });

  it('should log multiple entries with correct timing', (done) => {
    setTimeout(() => {
      timer.log('First log entry');

      setTimeout(() => {
        timer.log('Second log entry');

        const logs = timer.complete();
        expect(logs.length).toBe(2);

        // Test first entry
        expect(logs[0].description).toBe('First log entry');
        expect(logs[0].duration).toBeGreaterThan(0);

        // Test second entry
        expect(logs[1].description).toBe('Second log entry');
        expect(logs[1].duration).toBeGreaterThan(0);

        done();
      }, 200);
    }, 100);
  });

  it('should reset the log and time', (done) => {
    setTimeout(() => {
      timer.log('First log entry');

      setTimeout(() => {
        timer.complete();
        timer.resetTimer();
        expect(timer.complete()).toEqual([]); // Should be empty after reset

        done();
      }, 200);
    }, 100);
  });

  it('should print logs to the console when complete is called with printLog = true', (done) => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log

    setTimeout(() => {
      timer.log('First log entry');

      timer.complete(true); // This should trigger console.log
      expect(consoleSpy).toHaveBeenCalled();

      // Check if the output contains the expected log description and time format
      const logOutput = consoleSpy.mock.calls.flat().join(' '); // Flatten the console.log calls into a single string

      expect(logOutput).toContain('[Execution Timer Log] Test Timer');
      expect(logOutput).toContain('First log entry ===>');

      consoleSpy.mockRestore(); // Restore console.log after the test

      done();
    }, 100);
  });
});
