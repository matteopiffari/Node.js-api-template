const log = (message: string, level: 'info' | 'warn' | 'error' = 'info') => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
}

export const logger = {
    log,
    info: (message: string) => log(message, 'info'),
    warn: (message: string) => log(message, 'warn'),
    error: (message: string) => log(message, 'error')
};