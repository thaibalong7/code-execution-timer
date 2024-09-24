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
