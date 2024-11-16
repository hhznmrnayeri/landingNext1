import { PluginCreator } from "tailwindcss/types/config";
import type { Config } from "tailwindcss";
const childPlugin: PluginCreator = ({ addVariant }) => {
  addVariant("child", "&>*");
  addVariant("child-hover", "&>*:hover");
};
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0500FA",
        secondary: "#E01E5A",
        black: "#0C0C0C",
        error: {
          DEFAULT: "#C30000",
          100: "#ED2E2E",
          200: "#FFF2F2",
        },
      },
      backgroundImage: {
        test: "url(/images/img.jpg)",
        // "header-representation":"linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(../images/representation/header.jpg)",
      },
      fontFamily: {
        outfit: "Outfit",
        outfitBold: "OutfitBold",
        outfitMedium: "OutfitMedium",
        outfitSemiBold: "OutfitSemiBold",
      },
      spacing: {
        30: "7.5rem",
      },
      boxShadow: {
        2: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        card: "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0,   0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)",
      },
      fontSize: {
        "2xs": [
          "10px",
          {
            lineHeight: "14px",
          },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "4rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [childPlugin],
} satisfies Config;
