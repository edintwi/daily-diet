import { DefaultTheme } from "styled-components/native";

const theme: DefaultTheme = {
  colors: {
    product: {
      RED_DARK: "#BF3B44",
      RED_MID: "#F3BABD",
      RED_LIGHT: "#F4E6E7",
    },
    base: {
      GRAY_100: "#1B1D1E",
      GRAY_200: "#333638",
      GRAY_300: "#5C6265",
      GRAY_400: "#B9BBBC",
      GRAY_500: "#DDDEDF",
      GRAY_600: "#EFF0F0",
      GRAY_700: "#FAFAFA",
      WHITE: "#FFFFFF",
    },
  },
  fontFamily: {
    REGULAR: "NunitoSans_400Regular",
    BOLD: "NunitoSans_700Bold",
  },
  fontSize: {
    SM: 12,
    MD: 14,
    LG: 16,
    XL: 18,
    XXL: 24,
    XXXL: 32,
  },
};

export { theme };

