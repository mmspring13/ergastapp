import 'styled-components/native';
import theme from './src/shared/theme';

type ThemeType = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
