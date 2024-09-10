import { type FontProps, type TailwindConfig } from '@react-email/components'

export const tailwindConfig: TailwindConfig = {
  darkMode: 'class',
  theme: {
    fontFamily: { sans: ['Inter', 'sans-serif'] },
    colors: {
      background: 'hsl(240 10% 3.9%)',
      foreground: 'hsl(0 0% 98%)',
      border: 'hsl(240 3.7% 15.9%)',
    },
  },
}

export const font: FontProps = {
  fontFamily: 'Inter',
  fallbackFontFamily: 'sans-serif',
  webFont: {
    format: 'woff2',
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  },
  fontWeight: 400,
  fontStyle: 'normal',
}

export const replyTo = 'ttien56906@gmail.com'

export interface EmailProps {
  preview: string
  subject?: string
  replyTo?: string
  data?: Record<string, string>
  children?: Readonly<React.ReactNode>
}
