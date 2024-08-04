import { contact } from '@/lib/data'

export const Contact: React.FC = () => (
  <div className="grid">
    <h3 className="text-lg font-semibold">Navigation</h3>

    <div className="flex flex-col text-muted-foreground">
      <p>Yuki Inc.</p>
      <p>{contact.address}</p>
      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </div>
  </div>
)
