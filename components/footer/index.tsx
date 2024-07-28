import { About } from './about'
import { Contact } from './contact'
import { Navigations } from './navigations'

export const Footer: React.FC = () => (
  <footer className="bg-muted py-12">
    <div className="container grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <About />

      <Navigations />

      <Contact />
    </div>

    <div className="container mt-12 max-w-7xl border-t pt-6 text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Yuki Inc. All rights reserved.</p>
    </div>
  </footer>
)
