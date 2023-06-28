type GlobalObject = typeof globalThis | typeof global | typeof window;

const getGlobalObject = (): GlobalObject => globalThis ?? global ?? window;

export default getGlobalObject;
