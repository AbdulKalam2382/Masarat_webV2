import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const file = formData.get('cv') as File

    const buffer = await file.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    await resend.emails.send({
      from: 'careers@masaratkwt.com',
      to: 'info@masaratkwt.com',
      subject: `CV Submission — ${name}`,
      html: `
        <h2>New CV Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Position:</strong> ${position || 'Not specified'}</p>
      `,
      attachments: [{
        filename: file.name,
        content: Array.from(bytes),
      }]
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
