import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      product: {
        RED_DARK: string;
        RED_MID: string;
        RED_LIGHT: string;
      };
      base: {
        GRAY_100: string;
        GRAY_200: string;
        GRAY_300: string;
        GRAY_400: string;
        GRAY_500: string;
        GRAY_600: string;
        GRAY_700: string;
        WHITE: string;
      };
    };
    fontFamily: {
      REGULAR: string;
      BOLD: string;
    };
    fontSize: {
      SM: number;
      MD: number;
      LG: number;
      XL: number;
      XXL: number;
      XXXL: number;
    };
  };
}


  