export const Legal: React.FC = () => (
  <div>
    <h2 className="mb-4 text-lg font-semibold text-white">Legal</h2>
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
  { title: 'Terms of Service', url: '/terms-of-service' },
  { title: 'Privacy Policy', url: '/privacy-policy' },
  { title: 'Cookie Policy', url: 'https://youtu.be/dQw4w9WgXcQ' },
  { title: 'Accessibility', url: 'https://youtu.be/dQw4w9WgXcQ' },
]
