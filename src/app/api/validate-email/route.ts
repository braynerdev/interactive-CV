import { NextRequest, NextResponse } from 'next/server'
import dns from 'dns'
import { promisify } from 'util'

const resolveMx = promisify(dns.resolveMx)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { valid: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { valid: false, error: 'Invalid email format' },
        { status: 200 }
      )
    }

    const domain = email.split('@')[1]

    try {
      const mxRecords = await resolveMx(domain)
      
      if (mxRecords && mxRecords.length > 0) {
        return NextResponse.json({ valid: true }, { status: 200 })
      } else {
        return NextResponse.json(
          { valid: false, error: 'Domain does not accept emails' },
          { status: 200 }
        )
      }
    } catch (dnsError) {
      return NextResponse.json(
        { valid: false, error: 'Invalid email domain' },
        { status: 200 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: 'Validation failed' },
      { status: 500 }
    )
  }
}
