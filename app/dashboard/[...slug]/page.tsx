import { type NextPage } from 'next'

const Page: NextPage = () => {
  return Array.from({ length: 2 }).map((_, i) => (
    <p key={i}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac consectetur nunc. Nullam
      auctor, metus vel tempus posuere, nunc odio suscipit sapien, nec tempus purus odio nec libero.
      Nulla facilisi. Ut ultricies, nunc sit amet consectetur pharetra, nunc nunc ultricies sapien,
      nec fermentum odio purus nec libero. Nulla facilisi. Ut ultricies, nunc sit amet consectetur
      pharetra, nunc nunc ultricies sapien, nec fermentum odio purus nec libero. Nulla facilisi. Ut
      ultricies, nunc sit amet consectetur pharetra, nunc nunc ultricies sapien, nec fermentum odio
      purus nec libero. Nulla facilisi. Ut ultricies, nunc sit amet consectetur pharetra, nunc nunc
      ultricies sapien, nec fermentum odio purus nec libero. Nulla facilisi. Ut ultricies, nunc sit
      amet consectetur pharetra, nunc nunc ultricies sapien, nec fermentum odio purus nec libero.
      Nulla facilisi. Ut ultricies, nunc sit amet consectetur pharetra, nunc nunc ultricies sapien,
      nec fermentum odio purus nec libero. Nulla facilisi. Ut ultricies, nunc sit amet consectetur
      pharetra, nunc nunc ultricies sapien, nec fermentum odio purus nec libero. Nulla facilisi. Ut
      ultricies, nunc sit amet consectetur pharetra, nunc nunc ultricies sapien, nec fermentum odio
      purus nec libero. Nulla facilisi. Ut ultricies, nunc sit amet consectetur pharetra, nunc nunc
      ultricies sapien, nec fermentum odio purus nec libero. Nulla facilisi. Ut ultricies, nunc sit
      amet consectetur pharetra, nunc nunc ultricies sapien, nec fermentum odio purus nec libero.
      Nulla facilisi. Ut ultricies, nunc sit amet consectetur pharetra, nunc nunc ultricies sapien,
      nec fermentum odio purus nec libero. Nulla facilisi. Ut ultricies, nunc sit amet consectetur.
    </p>
  ))
}

export default Page
