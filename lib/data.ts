import { LeafIcon, RecycleIcon, TruckIcon } from 'lucide-react'

export const about = {
  title: 'Empowering Sustainable Living',
  desciption:
    'At Yuki Store, we&apos;re passionate about providing high-quality, eco-friendly products that help our customers live more sustainable lifestyles. Our mission is to make it easy for everyone to reduce their environmental impact.',
  story: {
    title: 'dsaadsad',
    desciption:
      "Yuki Ecommerce was founded in 2024 by a team of passionate environmentalists who saw the need for a more sustainable approach to retail. Over the years, we've grown to become a leading provider of eco-friendly home goods, apparel, and lifestyle products.",
    authors: [
      {
        name: 'Tiesen',
        avatar: 'https://avatars.githubusercontent.com/u/101703006?v=4',
        role: 'Founder & CEO',
      },
    ],
  },

  products: {
    title: 'Sustainable Solutions for Every Home',
    desciption:
      'Our product range includes a wide variety of eco-friendly home goods, apparel, and lifestyle products that are designed to reduce waste and promote sustainable living. From reusable water bottles to organic cotton t-shirts, we have something for everyone.',
    features: [
      {
        icon: LeafIcon,
        name: 'Eco-Friendly Materials',
        description:
          'All of our products are made from sustainable, natural materials that are gentle on the environment.',
      },
      {
        icon: RecycleIcon,
        name: 'Responsible Sourcing',
        description:
          'We work closely with our suppliers to ensure ethical and sustainable sourcing practices.',
      },
      {
        icon: TruckIcon,
        name: 'Efficient Logistics',
        description:
          'Our streamlined logistics and distribution network minimize our carbon footprint.',
      },
    ],
  },

  customers: {
    title: 'Hear from Our Satisfied customers',
    desciption:
      "Our customers love the quality and sustainability of our products. Here's what they have to say.",
    content: [
      {
        name: 'Sarah Johnson',
        rating: 5,
        review:
          "I've been using Yuki Ecommerce products for years and I'm always impressed by the quality and sustainability. Their reusable water bottles are a game-changer!",
      },
      {
        name: 'Alex Smith',
        rating: 4,
        review:
          "I'm really impressed with Yuki Ecommerce's commitment to sustainability. Their organic cotton t-shirts are not only comfortable, but they're also helping reduce my carbon footprint.",
      },
      {
        name: 'Emily Parker',
        rating: 3,
        review:
          "I love the wide range of eco-friendly products Yuki Ecommerce offers. Their reusable grocery bags have been a game-changer in my daily life, and I'm glad to support a company that's making a difference.",
      },
    ],
  },
}

export const contact = {
  title: 'Contact Us',
  description: 'Get in touch with our team for any inquiries or support.',
  address: '123 Main Street, Anytown, USA',
  phone: '1-800-123-4567',
  email: 'ttien56906@gmail.com',
  hours: ['Monday - Friday: 9am - 5pm', 'Saturday - Sunday: Closed'],
}

export const policy = {
  title: 'Our Policies',
  desciption:
    'Read our policies to learn more about how we operate and what you can expect when shopping with us.',
  content: [
    {
      title: 'Shipping',
      content: [
        'We offer free standard shipping on all orders within the continental United States. Expedited shipping options are available for an additional fee.',
        'Orders are typically processed and shipped within 1-2 business days. Delivery times may vary depending on your location and the shipping method you choose.',
        'We use reputable shipping carriers such as USPS, FedEx, and UPS to ensure your order arrives safely and on time.',
      ],
    },

    {
      title: 'Returns',
      content: [
        'We stand behind the quality of our products and offer a 30-day return policy. If you are not satisfied with your purchase, you may return the item for a full refund or exchange.',
        'To initiate a return, please contact our customer service team within 30 days of your delivery date. You will be responsible for the cost of return shipping, unless the item is defective or was shipped in error.',
        'Refunds will be issued to the original payment method used for the purchase. Please allow 7-10 business days for the refund to be processed.',
      ],
    },

    {
      title: 'Privacy',
      content: [
        'We take the privacy of our customers very seriously. We will never sell or share your personal information with third parties without your consent.',
        'Your information is used solely for the purpose of processing your orders, providing customer support, and improving our products and services. We use industry-standard security measures to protect your data.',
        'You can review our full Privacy Policy for more details on how we collect, use, and protect your personal information.',
      ],
    },

    {
      title: 'Terms of Service',
      content: [
        'By using our website, you agree to comply with our Terms of Service. Please review the following terms and conditions carefully before making a purchase.',
        'If you have any questions or concerns about our policies, please contact our customer service team for assistance.',
      ],
    },
  ],
}
