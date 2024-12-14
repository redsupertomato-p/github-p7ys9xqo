import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Address from '@/models/Address';
import { getServerSession } from 'next-auth';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    await connectDB();
    const address = await Address.findByIdAndUpdate(params.id, data, { new: true });
    return NextResponse.json(address);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update address' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    await Address.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Address deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete address' }, { status: 500 });
  }
}