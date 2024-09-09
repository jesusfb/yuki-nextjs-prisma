export const CustomerService: React.FC = () => (
  <div>
    <h2 className="mb-4 text-lg font-semibold">Customer Service</h2>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.title}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-muted-foreground"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const links = [
  { title: 'Contact Us', url: '/contact-us' },
  { title: 'Shipping & Returns', url: '/privacy-policy' },
  { title: 'FAQ', url: ' https://youtu.be/dQw4w9WgXcQ' },
  { title: 'Size Guide', url: 'https://youtu.be/dQw4w9WgXcQ' },
]
