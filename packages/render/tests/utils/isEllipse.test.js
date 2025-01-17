import * as P from '@react-pdf/primitives';
import isEllipse from '../../src/utils/isEllipse';

const ASSERTED_TYPE = P.Ellipse;
const PRIMITIVES = Object.keys(P);

describe('is ellipse util', () => {
  PRIMITIVES.forEach(type => {
    const isAssertedType = type === ASSERTED_TYPE;
    const result = isAssertedType ? 'true' : 'false';

    test(`should return ${result} for ${type} node`, () => {
      expect(isEllipse({ type })).toBe(isAssertedType);
    });
  });
});
