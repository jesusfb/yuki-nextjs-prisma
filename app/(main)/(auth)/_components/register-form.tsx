'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const RegisterForm: React.FC = () => {
  const router = useRouter()

  return (
    <CardContent asChild>
      <form className="grid gap-4">
        <fieldset className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="yuki@example.com" />
        </fieldset>

        <fieldset className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" placeholder="Password" />
        </fieldset>

        <Button className="w-full">Login</Button>

        <div className="text-center text-sm">
          Already have an account?{' '}
          <button onClick={() => router.push('sign-in')} className="underline">
            Sign in
          </button>
        </div>
      </form>
    </CardContent>
  )
}
