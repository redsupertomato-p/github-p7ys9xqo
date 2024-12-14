import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Address from '@/models/Address';
import { getServerSession } from 'next-auth';

export async function GET() {
  try {
    await connectDB();
    const addresses = await Address.find({});
    return NextResponse.json(addresses);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch addresses' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    await connectDB();
    const address = await Address.create(data);
    return NextResponse.json(address);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create address' }, { status: 500 });
  }
}