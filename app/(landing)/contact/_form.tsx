'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/emails'
import { siteConfig } from '@/lib/site'

export const Form: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const action = (formData: FormData) =>
    startTransition(async () => {
      const data = Object.fromEntries(formData) as Record<string, string>

      const args = {
        to: siteConfig.email,
        subject: `New message from ${data.name} <${data.email}>`,
        data: { message: data.message ?? '' },
        type: 'contact' as const,
      }

      const promise = async () => {
        const res = await sendEmail(args)
        if (res?.error) throw new Error(res.message, { cause: res.error })
        return res
      }

      toast.promise(promise, {
        loading: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message',
        description: (data) =>
          data instanceof Error && <pre>{JSON.stringify(data.cause, null, 2)}</pre>,
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
