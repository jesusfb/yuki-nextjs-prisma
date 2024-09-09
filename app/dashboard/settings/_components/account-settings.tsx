import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const AccountSetting: React.FC = () => (
  <AccordionItem value="account">
    <AccordionTrigger>Account</AccordionTrigger>
    <AccordionContent className="flex flex-col gap-2">
      {settings.map((setting) => (
        <Link key={setting.href} href={setting.href} className="group flex items-center gap-2">
          <span>{setting.name}</span>
          <div className="h-px bg-primary transition-all ease-linear group-hover:flex-1" />
          <ChevronRight size={16} className="hidden group-hover:flex" />
        </Link>
      ))}
    </AccordionContent>
  </AccordionItem>
)

const settings = [
  { name: 'Information', href: '/settings/information' },
  { name: 'Change Password', href: '/settings/ChangePassword' },
]
