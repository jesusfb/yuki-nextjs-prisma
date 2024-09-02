import { ChevronLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Title: React.FC = () => (
  <section className="flex flex-col gap-2 p-4">
    <Image src="/logo.svg" alt="logo" width={40} height={40} className="mx-auto dark:invert" />
    <h1 className="text-2xl font-bold">Dashboard</h1>

    <Link href="/" className="flex items-center hover:underline">
      <ChevronLeftIcon size={16} /> Back to home
    </Link>
  </section>
)
