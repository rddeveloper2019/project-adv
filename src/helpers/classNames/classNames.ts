type Mods = {
    [key: string]: string | boolean
}

export const classNames = (main: string, mods: Mods, rest: string[]): string => {

    return [
        main,
        Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls]) => cls),
        ...rest
    ].join(' ')
}