type Mods = {
    [key: string]: string | boolean
}

export const classNames = (main: string, mods: Mods = {}, rest: string[] = []): string => [
    main,
    // eslint-disable-next-line no-unused-vars
    ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([cls]) => cls),
    ...rest.filter(Boolean),
].join(' ');
