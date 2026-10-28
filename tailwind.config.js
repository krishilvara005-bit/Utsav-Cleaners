/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0F6E56',
          hover: '#0B5341',
          light: '#E6F4F0',
          dark: '#084435'
        },
        section: '#F7F7F5',
        ink: {
          DEFAULT: '#2C2C2A',
          muted: '#5F5E5A',
          subtle: '#888780'
        },
        border: '#E5E4DE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'custom': '12px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'hover': '0 8px 24px rgba(15, 110, 86, 0.08)',
      }
    },
  },
  plugins: [],
}
