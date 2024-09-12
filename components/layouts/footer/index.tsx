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
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Yuki E-commerce Store. All rights reserved.</p>
          <div className="mt-2 flex gap-4 sm:mt-0">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-muted-foreground"
            >
              Sitemap
            </a>

            <p>Do Not Sell My Information</p>
          </div>
        </div>
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
