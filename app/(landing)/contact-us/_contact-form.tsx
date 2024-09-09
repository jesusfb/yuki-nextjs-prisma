'use client'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

import { sendEmail } from '@/emails'
import { useRef, useTransition } from 'react'

export const ContactForm: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null!)

  const action = (formData: FormData) =>
    startTransition(async () => {
      const data = Object.fromEntries(formData) as { name: string; email: string; message: string }
      const res = await sendEmail({
        type: 'contact',
        email: 'ttien56906@gmail.com',
        from: data.name,
        replyTo: data.email,
        data,
      })
      formRef.current.reset()

      if (res.error) return alert(res.error)
      alert(res.message)
    })

  return (
    <form action={action} ref={formRef}>
      <CardContent className="grid w-full items-center gap-4">
        <FormField name="name" label="Name" placeholder="Your name" disabled={isPending} required />
        <FormField
          name="email"
          label="Email"
          placeholder="Your email"
          type="email"
          disabled={isPending}
          required
        />
        <FormField name="message" label="Message" disabled={isPending} asChild>
          <Textarea id="message" placeholder="Your message" required />
        </FormField>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button disabled={isPending}>Send Message</Button>
      </CardFooter>
    </form>
  )
}
