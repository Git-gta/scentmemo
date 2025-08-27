import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Welcome to ScentMemo API',
    version: '1.0.0'
  })
}