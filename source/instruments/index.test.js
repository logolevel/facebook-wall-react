//Core
import { sum, delay, getUniqueID } from './';

describe('instruments:', () => {
    test('sum function should be a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });
    
    test('sum function should throw when callen with non-number type as second argument', () => {
        expect(() => sum(2, 'hello')).toThrow();
    });
    
    test('sum function should throw when callen with non-number type as first argument', () => {
        expect(() => sum('hello', 2)).toThrow();
    });
    
    test('sum function should return right result', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(2, 3)).toMatchSnapshot();
    });
    
    test('delay function should return resolved promise', async () => {
        await expect(delay()).resolves.toBeUndefined();
    });

    test('getUniqueID function should be a function', async () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('getUniqueID function should throw, when called with not-number argument', async () => {
        expect(() => getUniqueID('hello')).toThrow();
    });

    test('getUniqueID function should produce a string of a desired given length', async () => {
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(5)).toHaveLength(5);
    });
});
