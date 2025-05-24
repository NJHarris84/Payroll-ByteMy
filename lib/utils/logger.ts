// lib/utils/logger.ts

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerConfig {
  minLevel?: LogLevel;
  enableTimestamp?: boolean;
  enableColors?: boolean;
  prefix?: string;
}

export class Logger {
  private config: Required<LoggerConfig>;
  private levels: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  constructor(config: LoggerConfig = {}) {
    this.config = {
      minLevel: config.minLevel || 'info',
      enableTimestamp: config.enableTimestamp ?? true,
      enableColors: config.enableColors ?? process.env.NODE_ENV === 'development',
      prefix: config.prefix || '',
    };
  }

  private shouldLog(level: LogLevel): boolean {
    return this.levels[level] >= this.levels[this.config.minLevel];
  }

  private formatMessage(level: LogLevel, message: string): string {
    let formatted = '';

    // Add timestamp if enabled
    if (this.config.enableTimestamp) {
      const timestamp = new Date().toISOString();
      formatted += `[${timestamp}] `;
    }

    // Add prefix if provided
    if (this.config.prefix) {
      formatted += `[${this.config.prefix}] `;
    }

    // Add level
    const levelStr = level.toUpperCase();
    
    // Add colors if enabled
    if (this.config.enableColors) {
      const colors = {
        debug: '\x1b[36m', // Cyan
        info: '\x1b[32m',  // Green
        warn: '\x1b[33m',  // Yellow
        error: '\x1b[31m', // Red
      };
      const reset = '\x1b[0m';
      formatted += `${colors[level]}${levelStr}${reset}: `;
    } else {
      formatted += `${levelStr}: `;
    }

    formatted += message;
    return formatted;
  }

  debug(message: string, ...args: any[]): void {
    if (!this.shouldLog('debug')) return;
    console.debug(this.formatMessage('debug', message), ...args);
  }

  info(message: string, ...args: any[]): void {
    if (!this.shouldLog('info')) return;
    console.info(this.formatMessage('info', message), ...args);
  }

  warn(message: string, ...args: any[]): void {
    if (!this.shouldLog('warn')) return;
    console.warn(this.formatMessage('warn', message), ...args);
  }

  error(message: string, error?: Error, ...args: any[]): void {
    if (!this.shouldLog('error')) return;
    
    const errorMessage = error 
      ? `${message}\nError: ${error.message}\nStack: ${error.stack}`
      : message;
    
    console.error(this.formatMessage('error', errorMessage), ...args);
  }

  // Method to create a child logger with additional context
  child(prefix: string): Logger {
    return new Logger({
      ...this.config,
      prefix: this.config.prefix ? `${this.config.prefix}:${prefix}` : prefix,
    });
  }

  // Method to update log level at runtime
  setLevel(level: LogLevel): void {
    this.config.minLevel = level;
  }
}

// Export a default logger instance
export const logger = new Logger();
