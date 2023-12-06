import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1232px'
      },
      padding: {
        DEFAULT: '16px'
      }
    },
    extend: {
      colors: {
        third: '#F9FAFC',
        'primary-dark': '#171717',
        red: {
          1: '#E60000'
        }
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
        44: '44px',
        48: '48px',
        64: '64px'
      },
      boxShadow: {
        primary: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
        secondary: '0px 4px 16px 0px rgba(0, 0, 0, 0.20)',
        third: '0px 2px 2px 0px rgba(0, 0, 0, 0.04)'
      },
      lineHeight: {
        '1-1': '1.1',
        '1-2': '1.2',
        '1-4': '1.4'
      }
    }
  },
  plugins: []
}

export default config
