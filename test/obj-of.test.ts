import { objOfTests } from './obj-of.utils';
import { objOf } from '../src/type-checker';
import { str } from '../src/str';
import { num } from '../src/num';

describe('`objOf` contract builder', () => {
    objOfTests(objOf, 'objOf');


    it('`strictObjOf(ContractMap)(x)` throws TypeError if x has extra properties', () => {
        const objContract = objOf({
            foo: str,
            bar: num
        });

        expect(() =>
            objContract({
                foo: 'baz',
                bar: 3,
                baz: undefined
            })
        ).toThrowError(TypeError);
    });

});
