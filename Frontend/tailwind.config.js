/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Grotesk-Black': ['Grotesk-Black', 'sans-serif'],
        'Grotesk-Extrabold': ['Grotesk-Extrabold', 'sans-serif'],
        'Grotesk-Bold': ['Grotesk-Bold', 'sans-serif'],
        'Nova-Bold': ['Nova-Bold', 'sans-serif'],
        'Nova-Regular': ['Nova-Regular', 'sans-serif'],
      },
      colors: {
        "custom-jaune": '#FACC15',
        "custom-jaune-hover": '#FCDE69',
        "custom-jaune-dark-text": "#422006",
        "custom-black-grotesk": '#080B12',
        "custom-black-label+value": '#0F172A',
        "custom-black-card-title": '#0c0a09',
        "custom-grey-card-border": '#E9E8E7',
        "custom-grey-placeholder+input": '#CACCCE',
        "custom-grey-amount": '#969A9C',
        "custom-grey-border-button-secondary": '#E2E8F0',
      }
    },
  },
  plugins: [],
}

