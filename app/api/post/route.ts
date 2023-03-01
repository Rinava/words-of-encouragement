import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { author, content } = await request.json();
  const post = await prisma.post.create({
    data: {
      author,
      content,
    },
  });

  return new NextResponse(JSON.stringify(post));
}
