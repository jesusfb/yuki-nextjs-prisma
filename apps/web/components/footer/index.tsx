import Link from 'next/link'
import { Facebook, Github, Twitter, Youtube } from 'lucide-react'

import { Button } from '@yuki/ui/button'
import { Input } from '@yuki/ui/input'

import { Links, SocialLinks } from './links'
import { Shop } from './shop'

export const Footer: React.FC = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <Shop />

        {links.map(({ title, links }) => (
          <Links key={title} title={title} links={links} />
        ))}

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
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
    title: 'Customer Service',
    links: [
      { title: 'Contact Us', href: '/home/contact' },
      { title: 'Shipping & Returns', href: '/home/shipping' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Size Guide', href: '/home/size-guide' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { title: 'Our Story', href: '/home/our-story' },
      { title: 'Careers', href: '/home/careers' },
      { title: 'Sustainability', href: '/home/sustainability' },
      { title: 'Press', href: '/home/press' },
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
