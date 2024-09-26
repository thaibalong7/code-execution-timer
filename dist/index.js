"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class is designed for tracking and logging execution times for code sections.
 * It allows for multiple log entries and provides options to display or return them for further analysis.
 */
class CodeExecutionTimer {
    /**
     * Initializes the timer with a label, starts tracking time, and sets up the log entries
     * @param label
     */
    constructor(label) {
        this.label = label;
        this.initialTimestamp = Date.now();
        this.previousTimestamp = this.initialTimestamp;
        this.entries = [];
    }
    /**
     * Logs the duration between the last recorded time and the current time, along with a description.
     * @param description
     * @param startTimestamp
     * @returns
     */
    log(description, startTimestamp = this.previousTimestamp) {
        const currentTimestamp = Date.now();
        const executionTime = currentTimestamp - startTimestamp; // ms
        this.entries.push({
            description,
            duration: executionTime,
        });
        this.previousTimestamp = currentTimestamp;
        return this;
    }
    /**
     * Returns the list of log entries, optionally printing them, and resets the timer for reuse.
     * @param shouldPrint
     * @returns
     */
    complete(shouldPrint = false) {
        const loggedEntries = [...this.entries];
        if (shouldPrint) {
            this.printEntries(loggedEntries);
        }
        this.resetTimer();
        return loggedEntries;
    }
    /**
     * Resets the log entries and the timer
     */
    resetTimer() {
        this.entries = [];
        this.initialTimestamp = Date.now();
        this.previousTimestamp = this.initialTimestamp;
        return this;
    }
    /**
     * Outputs the log entries to the console in a readable format.
     * @param logEntries
     */
    printEntries(logEntries) {
        const logOutput = [`[Execution Timer Log] ${this.label}`, '\n'];
        logEntries.forEach(({ description, duration }) => {
            logOutput.push(`* ${description} ===> ${duration}ms`);
            logOutput.push('\n');
        });
        console.log(...logOutput);
    }
}
exports.default = CodeExecutionTimer;
