import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Agent from '@/models/Agent';
import { getServerSession } from 'next-auth';

export async function GET() {
  try {
    await connectDB();
    const agents = await Agent.find({});
    return NextResponse.json(agents);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch agents' }, { status: 500 });
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
    const agent = await Agent.create(data);
    return NextResponse.json(agent);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create agent' }, { status: 500 });
  }
}