import { redirect } from 'next/navigation'

import { auth } from '@/server/auth'

const AuthLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { user } = await auth()
  if (user) redirect('/')

  return (
    <main className="grid min-h-dvh place-items-center">
      <div className="container max-w-screen-md rounded-lg p-6 shadow-lg md:border">{children}</div>
    </main>
  )
}

export default AuthLayout
