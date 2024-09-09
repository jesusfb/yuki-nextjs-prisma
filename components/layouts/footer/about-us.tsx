export const AboutUs: React.FC = () => (
  <div>
    <h2 className="mb-4 text-lg font-semibold">About Us</h2>
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
  { title: 'Formation', url: '/about-us' },
  { title: 'Our Story', url: 'https://youtu.be/dQw4w9WgXcQ' },
  { title: 'Careers', url: 'https://youtu.be/dQw4w9WgXcQ' },
  { title: 'Sustainability', url: 'https://youtu.be/dQw4w9WgXcQ' },
]
