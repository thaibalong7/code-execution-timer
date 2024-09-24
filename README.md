# Code Execution Timer

[![install size](https://packagephobia.com/badge?p=code-execution-timer)](https://packagephobia.com/result?p=code-execution-timer)
[![Coverage Status](https://coveralls.io/repos/github/thaibalong7/code-execution-timer/badge.svg?branch=master)](https://coveralls.io/github/thaibalong7/code-execution-timer?branch=master)
![NPM Downloads](https://img.shields.io/npm/dm/code-execution-timer?style=flat)
![GitHub License](https://img.shields.io/github/license/thaibalong7/code-execution-timer)

##### Javascript utility for tracking and logging execution times for code sections. It allows for multiple log entries and provides options to display or return them for further analysis.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)

## Install

You can install it by running:

```sh
npm install code-execution-timer
```

or using `yarn`:
```sh
yarn add code-execution-timer
```

## Usage

```javascript
import CodeExecutionTimer from 'code-execution-timer';

// Initialize the timer
const timer = new CodeExecutionTimer('My Task Timer');

// Log some execution sections with time delays
setTimeout(() => {
  timer.log('Started first section');
  
  setTimeout(() => {
    timer.log('Started second section');
    
    // Complete the timer and print logs
    const logs = timer.complete(true);
    
    // You can also get the logs without printing by omitting the 'true' parameter
    console.log('Logged Results:', logs);
  }, 500);
}, 300);

```

When the above code is executed, the expected console output will resemble the following (the actual times may vary):
```console
[Execution Timer Log] My Task Timer
* Started first section ===> 301ms
* Started second section ===> 501ms

Logged Results: [
  { description: 'Started first section', duration: 301 },
  { description: 'Started second section', duration: 501 }
]
```

## API

### Class: `CodeExecutionTimer`

#### `Constructor`
```typescript
constructor(label: string)
```
- `label` (**string**): A descriptive label for the timer, used for identification when printing logs.

#### `Methods`

**:point_right: `log`**: Logs the duration between the last recorded timestamp and the current time, creating a new log entry
```typescript
log(description: string, startTimestamp?: number): this
```

- `description` (**string**): A description of the code section being timed.
- `startTimestamp` (**number**, *optional*): The timestamp to start the timing from. Defaults to the last recorded timestamp.
**Returns**: The current instance of [`CodeExecutionTimer`](#class-codeexecutiontimer) for method chaining.

**:point_right: `complete`**: Returns the list of log entries and resets the timer for reuse
```typescript
complete(shouldPrint?: boolean): LogEntry[]
```
- `shouldPrint` (**boolean**, *optional*): If true, the log entries will be printed to the console. Defaults to `false`.
**Returns**: An array of [`LogEntry`](#logentry) objects representing the logged entries

**:point_right: `resetTimer`**: Resets the log entries and internal timestamps for fresh logging
```typescript
resetTimer(): this
```
**Returns**: The current instance of [`CodeExecutionTimer`](#class-codeexecutiontimer) for method chaining.

**:point_right: `printEntries`**: Outputs the log entries to the console in a readable format
```typescript
printEntries(logEntries: LogEntry[]): void
```
- `logEntries` ([**LogEntry[]**](#logentry)): An array of log entries to print.

### `Data Types`
#### **LogEntry**
```typescript
type LogEntry = {
  description: string;  // A description of the code section being timed
  duration: number;     // The elapsed time in milliseconds for this log entry
}
```

## Maintainer

[@thaibalong7](https://github.com/thaibalong7)

## Contributing

Please contribute! [Look at the issues](https://github.com/thaibalong7/code-execution-timer/issues).
