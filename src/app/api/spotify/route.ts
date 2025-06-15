import { NextResponse } from 'next/server';

import { getNowPlaying } from '@/lib/spotify';

export async function GET() {
  try {
    const response = await getNowPlaying();

    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { error: 'Error fetching Spotify data' },
      { status: 500 }
    );
  }
}
