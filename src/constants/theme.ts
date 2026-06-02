/**
 * E-ink color theme based on Material 3 values modified by Mudita.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  text: '#000000',
  textOnSelected: '#ffffff',
  background: '#ffffff',
  backgroundElement: '#ffffff',
  backgroundSelected: '#000000',
  textSecondary: '#000000',
} as const;

export type ThemeColor = keyof typeof Colors;

export const Fonts = {
  logo: 'Fredoka-SemiBold',
  sans: 'Lato',
  serif: Platform.select({ ios: 'ui-serif', default: 'serif', web: 'var(--font-serif)' }),
  rounded: 'Lato',
  mono: Platform.select({
    ios: 'ui-monospace',
    default: 'monospace',
    web: 'var(--font-mono)',
  }),
  lato: {
    regular: 'Lato',
    italic: 'Lato-Italic',
    thin: 'Lato-Thin',
    thinItalic: 'Lato-ThinItalic',
    light: 'Lato-Light',
    lightItalic: 'Lato-LightItalic',
    bold: 'Lato-Bold',
    boldItalic: 'Lato-BoldItalic',
    black: 'Lato-Black',
    blackItalic: 'Lato-BlackItalic',
  },
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const ButtonRadius = 8;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
