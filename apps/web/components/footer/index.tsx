import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Github, Twitter, Youtube } from 'lucide-react'

import { Button } from '@yuki/ui/button'
import { Input } from '@yuki/ui/input'
import { Typography } from '@yuki/ui/typography'

import { Links, SocialLinks } from './links'

export const Footer: React.FC = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {links.map(({ title, links }, idx) => (
          <Links key={idx} title={title} links={links} />
        ))}

        <section className="space-y-4">
          <Typography level="h4">Stay Connected</Typography>
          <p>Subscribe to our newsletter for exclusive offers and updates.</p>
          <form className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-primary bg-secondary text-secondary-foreground"
            />
            <Button type="submit">Subscribe</Button>
          </form>

          <div className="flex space-x-4">
            {socials.map(({ title, icon: Icon, url }) => (
              <SocialLinks key={title} title={title} icon={Icon} url={url} />
            ))}
          </div>
        </section>
      </section>

      <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Your Ecommerce Store. All rights reserved.</p>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <Link href="/home/privacy-policy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/home/terms-of-service" className="transition-colors hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

const links = [
  {
    title: (
      <Link href="/" className="flex items-center gap-2">
        <div className="rounded-lg border border-primary p-1">
          <Image
            src="/assets/logo.svg"
            alt="Yuki"
            width={24}
            height={24}
            className="object-cover dark:invert"
          />
        </div>
        <Typography level="h3">Yuki</Typography>
      </Link>
    ),
    links: [
      { title: 'All Products', href: '/' },
      { title: 'Featured', href: '/' },
      { title: 'New Arrivals', href: '/' },
      { title: 'Sale', href: '/' },
    ],
  },
  {
    title: <Typography level="h4">Customer Service</Typography>,
    links: [
      { title: 'Contact Us', href: '/home/contact-us' },
      { title: 'Shipping & Returns', href: '/home/shipping' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Size Guide', href: '/home/size-guide' },
    ],
  },
  {
    title: <Typography level="h4">Company</Typography>,
    links: [
      { title: 'About Us', href: '/home/about-us' },
      { title: 'Our Story', href: '/home/our-story' },
      { title: 'Careers', href: '/home/careers' },
      { title: 'Sustainability', href: '/home/sustainability' },
    ],
  },
]

const socials = [
  {
    title: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
  },
  {
    title: 'Github',
    icon: Github,
    url: 'https://github.com',
  },
  {
    title: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com',
  },
  {
    title: 'Youtube',
    icon: Youtube,
    url: 'https://youtube.com',
  },
]
