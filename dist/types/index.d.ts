export type LogEntry = {
    /**
     * A description of the code section being timed
     */
    description: string;
    /**
     * The elapsed time in milliseconds for this log entry
     */
    duration: number;
};
/**
 * This class is designed for tracking and logging execution times for code sections.
 * It allows for multiple log entries and provides options to display or return them for further analysis.
 */
export default class CodeExecutionTimer {
    private label;
    private entries;
    private initialTimestamp;
    private previousTimestamp;
    /**
     * Initializes the timer with a label, starts tracking time, and sets up the log entries
     * @param label
     */
    constructor(label: string);
    /**
     * Logs the duration between the last recorded time and the current time, along with a description.
     * @param description
     * @param startTimestamp
     * @returns
     */
    log(description: string, startTimestamp?: number): this;
    /**
     * Returns the list of log entries, optionally printing them, and resets the timer for reuse.
     * @param shouldPrint
     * @returns
     */
    complete(shouldPrint?: boolean): LogEntry[];
    /**
     * Resets the log entries and the timer
     */
    resetTimer(): this;
    /**
     * Outputs the log entries to the console in a readable format.
     * @param logEntries
     */
    printEntries(logEntries: LogEntry[]): void;
}
