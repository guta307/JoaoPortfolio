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
    },
  },
  plugins: [],
};
