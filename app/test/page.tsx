import { sendEmail } from '@/emails'
import React from 'react'

const Page = () => {
  const action = async () => {
    'use server'
    await sendEmail({
      type: 'welcome',
      email: 'ttien56906@gmail.com',
      data: { name: 'Tien' },
    })
    console.log('Email sent!')
  }
  return (
    <form action={action}>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Page
