'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SiSpotify } from 'react-icons/si';

type NowPlayingResponse = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingResponse | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();
        setData(data);
      } catch {
        setData(null);
      }
    };

    fetchNowPlaying();
    // Polling every 3 minutes
    const interval = setInterval(fetchNowPlaying, 180000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {data?.isPlaying && (
        <div className="sticky top-0 w-full bg-[#1ED760] py-1 px-2 z-50">
          <div className="container flex items-center justify-center gap-2 text-xs md:text-sm text-gray-900">
            <SiSpotify className="w-4 h-4" />
            <span>Now Playing:</span>
            <Link
              href={data.songUrl || '#'}
              target="_blank"
              className="inline-flex items-center gap-1 hover:underline"
            >
              <Image
                src={data.albumImageUrl || ''}
                alt={data.album || ''}
                width={16}
                height={16}
                className="rounded"
              />
              <span className="truncate max-w-[200px] md:max-w-full">
                {data.title} - {data.artist}
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
