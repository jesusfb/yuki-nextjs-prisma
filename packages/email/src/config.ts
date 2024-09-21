import type {FontProps, TailwindConfig} from '@react-email/components';

export const tailwindConfig: TailwindConfig = {
  darkMode: 'class',
  theme: {
    fontFamily: { sans: ['Inter', 'sans-serif'] },
    colors: { background: 'hsl(0, 0%, 100%)', foreground: 'hsl(0, 0%, 3.9%)' },
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

export const hello = (name?: string): string => {
  const time = new Date().getHours()
  let greeting = ''

  if (time < 12) greeting = 'Good morning'
  else if (time < 18) greeting = 'Good afternoon'
  else greeting = 'Good evening'

  return `${greeting}, ${name}! 👋`
}

export interface EmailProps {
  preview: string
  subject?: string
  replyTo?: string
  data?: Record<string, string>
  children?: Readonly<React.ReactNode>
}
