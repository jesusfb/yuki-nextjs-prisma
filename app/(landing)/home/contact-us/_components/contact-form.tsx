'use client'

import { useRef, useTransition } from 'react'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import * as card from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

import { sendEmail } from '@/emails'
import { replyTo } from '@/emails/config'

export const ContactForm: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null!)

  const action = (formData: FormData) =>
    startTransition(async () => {
      const data = Object.fromEntries(formData) as {
        email: string
        subject: string
        message: string
      }
      const res = await sendEmail({
        type: 'Feedback',
        email: replyTo,
        replyTo: data.email,
        subject: data.subject,
        preview: 'You have received a new message',
        data,
      })
      formRef.current.reset()

      if (res.error) {
        toast.error(res.error)
      }
      toast.success('Message sent!')
    })

  return (
    <form action={action} ref={formRef}>
      <card.CardContent className="grid w-full items-center gap-4">
        <FormField
          type="email"
          name="email"
          label="Email"
          placeholder="yuki@example.com"
          disabled={isPending}
          required
        />
        <FormField
          name="subject"
          type="text"
          label="Subject"
          placeholder="What's it about?"
          disabled={isPending}
          required
        />
        <FormField name="message" label="Message" disabled={isPending} asChild>
          <Textarea placeholder="Write your message here" required />
        </FormField>
      </card.CardContent>

      <card.CardFooter className="flex justify-between">
        <Button disabled={isPending}>Send Message</Button>
      </card.CardFooter>
    </form>
  )
}
