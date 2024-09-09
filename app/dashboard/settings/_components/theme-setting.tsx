'use client'

import { useTheme } from 'next-themes'

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export const ThemeSetting: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <AccordionItem value="theme">
      <AccordionTrigger>Theme</AccordionTrigger>
      <AccordionContent className="flex items-center justify-between">
        <Label htmlFor="theme">Dark mode</Label>
        <Switch
          name="theme"
          defaultChecked={theme === 'dark'}
          onCheckedChange={(e) => setTheme(e ? 'dark' : 'light')}
        />
      </AccordionContent>
    </AccordionItem>
  )
}
