import mitt from 'mitt';

// Global singleton pattern to ensure only ONE eventBus instance exists
let eventBusInstance = null;

if (!window.__EVENTBUS__) {
    window.__EVENTBUS__ = mitt();
}

export const eventBus = window.__EVENTBUS__;