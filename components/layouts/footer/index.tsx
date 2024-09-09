import { AboutUs } from './about-us'
import { CustomerService } from './customer-service'
import { Legal } from './legal'
import { Shop } from './shop'
import { SocialLinks } from './social-links'

export const Footer: React.FC = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Shop />
        <CustomerService />
        <AboutUs />
        <Legal />
        <SocialLinks />
      </div>

      <div className="mt-8 border-t border-primary pt-8 text-sm">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Yuki E-commerce Store. All rights reserved.</p>
          <div className="mt-2 space-x-4 sm:mt-0">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-muted-foreground"
            >
              Sitemap
            </a>

            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-muted-foreground"
            >
              Do Not Sell My Information
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
