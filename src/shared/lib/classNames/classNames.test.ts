import { classNames } from './classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('someClass'))
            .toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods true', () => {
        const expected = 'someClass hovered scrollable class1 class2';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', { hovered: false, scrollable: false }, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods true false', () => {
        const expected = 'someClass hovered class1 class2';
        // @ts-ignore
        const mods = { hovered: true, scrollable: false, flexed: undefined };
        expect(classNames('someClass', mods, ['class1', 'class2']))
            .toBe(expected);
    });
});
