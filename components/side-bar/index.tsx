import { Navigation } from './navigation'
import { Title } from './title'

export const Sidebar: React.FC = () => (
  <aside className="col-span-2 h-full border-r">
    <Title />

    <hr />

    <Navigation />
  </aside>
)
