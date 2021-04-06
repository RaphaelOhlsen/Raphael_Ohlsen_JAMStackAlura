import propToStyle from './index';

describe('propToStyle()', () => {
  describe('when recives a simple argument', () => {
    test('and it is a string', () => {
      const propToSyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: 'center' };
      const styleResult = propToSyleResult(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });
    test('and it is a number', () => {
      const propToSyleResult = propToStyle('flex');
      // <Box flex={1} />
      const componentProps = { flex: 1 };
      const styleResult = propToSyleResult(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });
  describe('when recives an argument with breakpoints', () => {
    test('with one breakpoint resolution', () => {
      const propToStypeResult = propToStyle('textAlign');
      // <Box margin={xs: 10px} />
      const componentProps = { textAlign: { xs: 'center' } };
      const styleResult = propToStypeResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
  });
  describe('when recives an argument with breakpoints', () => {
    test('with two or more breakpoint resolution', () => {
      const propToStypeResult = propToStyle('textAlign');
      // <Box textAlign={xs: 'center', md: 'right'} />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } };
      const styleResult = propToStypeResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
  });
});
