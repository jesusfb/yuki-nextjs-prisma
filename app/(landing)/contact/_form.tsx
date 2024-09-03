'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/server/email/action'

export const Form: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const action = (formData: FormData) =>
    startTransition(async () => {
      const data = Object.fromEntries(formData) as Record<string, string>

      const args = {
        email: 'ttien56906@gmail.com',
        subject: `New message from ${data.name} <${data.email}>`,
        data: { message: data.message ?? '' },
        type: 'contact' as const,
      }

      const promise = async () => {
        const res = await sendEmail(args)
        if (res?.error) throw new Error(res.error)
        return res
      }

      toast.promise(promise, {
        loading: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message',
      })
    })

  return (
    <form action={action} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          label="Name"
          placeholder="Enter your name"
          disabled={isPending}
          required
        />

        <FormField
          name="email"
          label="Email"
          placeholder="Enter your email"
          disabled={isPending}
          required
        />
      </div>

      <FormField
        name="message"
        label="Message"
        placeholder="Enter your message"
        disabled={isPending}
        required
        asChild
      >
        <Textarea className="min-h-[120px]" />
      </FormField>

      <Button className="w-full" isLoading={isPending}>
        Submit
      </Button>
    </form>
  )
}
