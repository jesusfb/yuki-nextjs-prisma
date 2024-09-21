import { Links } from './links'
import { Shop } from './shop'
import { SocialLinks } from './social-links'

export const Footer: React.FC = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Shop />
        <Links title="Customer Service" links={links.customerService} />
        <Links title="About Us" links={links.aboutUs} />
        <Links title="Legal" links={links.legal} />
        <SocialLinks />
      </div>

      <div className="mt-8 border-t border-primary pt-8 text-sm">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Yuki E-commerce Store. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

const links = {
  customerService: [
    { title: 'Contact Us', url: '/home/contact-us' },
    { title: 'Shipping & Returns', url: '/home/privacy-policy' },
    { title: 'FAQ', url: 'https://youtu.be/dQw4w9WgXcQ' },
    { title: 'Size Guide', url: 'https://youtu.be/dQw4w9WgXcQ' },
  ],
  aboutUs: [
    { title: 'Formation', url: '/home/about-us' },
    { title: 'Our Story', url: 'https://youtu.be/dQw4w9WgXcQ' },
    { title: 'Careers', url: 'https://youtu.be/dQw4w9WgXcQ' },
    { title: 'Sustainability', url: 'https://youtu.be/dQw4w9WgXcQ' },
  ],
  legal: [
    { title: 'Terms of Service', url: '/home/terms-of-service' },
    { title: 'Privacy Policy', url: '/home/privacy-policy' },
    { title: 'Cookie Policy', url: 'https://youtu.be/dQw4w9WgXcQ' },
    { title: 'Accessibility', url: 'https://youtu.be/dQw4w9WgXcQ' },
  ],
}
