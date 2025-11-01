/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          200: "#b9dbff",
          300: "#8dc3ff",
          400: "#5aa3ff",
          500: "#2a83ff",
          600: "#1567e6",
          700: "#0f50b4",
          800: "#0e4596",
          900: "#0e3a7a",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.25rem",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.08)",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
      },
    },
  },
  plugins: [],
};
