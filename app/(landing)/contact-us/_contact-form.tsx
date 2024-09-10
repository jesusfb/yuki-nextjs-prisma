'use client'

import { useRef, useTransition } from 'react'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

import { sendEmail } from '@/emails'

export const ContactForm: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null!)

  const action = (formData: FormData) =>
    startTransition(async () => {
      const data = Object.fromEntries(formData) as { name: string; email: string; message: string }
      const res = await sendEmail({
        type: 'Feedback',
        email: 'ttien56906@gmail.com',
        replyTo: data.email,
        preview: 'You have received a new message',
        data,
      })
      formRef.current.reset()

      if (res.error) return alert(res.error)
      alert(res.message)
    })

  return (
    <form action={action} ref={formRef}>
      <CardContent className="grid w-full items-center gap-4">
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
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button disabled={isPending}>Send Message</Button>
      </CardFooter>
    </form>
  )
}
