import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export const DangerZone = () => {
  return (
    <AccordionItem value="danger-zone">
      <AccordionTrigger className="text-destructive">Danger Zone</AccordionTrigger>
      <AccordionContent>
        <Button>Delete Account</Button>
      </AccordionContent>
    </AccordionItem>
  )
}
