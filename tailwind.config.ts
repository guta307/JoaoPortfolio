function toRgba(cssVariable: any) {
  const color = `var(${cssVariable})`;
  return ({ opacityValue }: any) => `rgba(${color}, ${opacityValue})`;
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      md: "var(--text-md)",
      lg: "var(--text-lg)",
      xl: "var(--text-xl)",
      xxl: "var(--text-xxl)",
      tmd: "var(--title-md)",
      tlg: "var(--title-lg)",
      txl: "var(--title-xl)",
    },

    extend: {
      textColor: {
        primary: toRgba("--primary"),
      },
      backgroundColor: {
        primary: toRgba("--primary"),
      },
      screens: {
        mobile: "0px", // Valor para mobile
        tablet: "700px", // Valor para tablet
        desktop: "1090px", // Valor para desktop
        tv: "1440px", // Valor para tv
      },
    },
  },
  plugins: [],
};
