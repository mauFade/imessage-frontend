import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme(
  { config },
  {
    colors: {
      brand: {
        100: "#3d84f7",
      },
    },
    styles: {
      global: () => ({
        body: {
          bg: "whiteAlpha.200",
        },
      }),
    },
  }
);
