declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__: boolean;
