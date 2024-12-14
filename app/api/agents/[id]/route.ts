import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Agent from '@/models/Agent';
import { getServerSession } from 'next-auth';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    await connectDB();
    const agent = await Agent.findByIdAndUpdate(params.id, data, { new: true });
    return NextResponse.json(agent);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update agent' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    await Agent.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Agent deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete agent' }, { status: 500 });
  }
}