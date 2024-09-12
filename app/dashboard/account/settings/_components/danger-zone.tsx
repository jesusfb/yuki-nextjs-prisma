import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const DangerZone = () => {
  return (
    <AccordionItem value="danger-zone">
      <AccordionTrigger className="text-destructive">Danger Zone</AccordionTrigger>
      <AccordionContent>
        <p className="mb-2">
          Are you sure you want to delete your account? All of your data will be permanently
          removed. This action cannot be undone.
        </p>

        <Button variant="destructive" asChild>
          <Link href="/dashboard/delete-account">Delete Account</Link>
        </Button>
      </AccordionContent>
    </AccordionItem>
  )
}
