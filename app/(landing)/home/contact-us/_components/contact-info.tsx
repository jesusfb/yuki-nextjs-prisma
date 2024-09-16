import { Mail, MapPin, Phone } from 'lucide-react'

import * as card from '@/components/ui/card'

export const ContactInfo: React.FC = () => (
  <card.Card>
    <card.CardHeader>
      <card.CardTitle>Contact Information</card.CardTitle>
      <card.CardDescription>
        You can also reach us through the following channels:
      </card.CardDescription>
    </card.CardHeader>
    <card.CardContent className="space-y-6">
      <div className="flex items-center space-x-4">
        <MapPin className="h-6 w-6 text-gray-500" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="text-sm text-gray-500">123 E-commerce Street, Digital City, 12345</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Phone className="h-6 w-6 text-gray-500" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-sm text-gray-500">+1 (123) 456-7890</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Mail className="h-6 w-6 text-gray-500" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm text-gray-500">support@yuki.com</p>
        </div>
      </div>
    </card.CardContent>
    <card.CardFooter>
      <p className="text-sm text-gray-500">
        Our customer support team is available Monday to Friday, 9am to 5pm EST.
      </p>
    </card.CardFooter>
  </card.Card>
)
