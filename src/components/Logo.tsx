'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-6 group py-2">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <Image
          src="/images/logo.jpg"
          alt="创啤社 Logo"
          width={96}
          height={96}
          className="object-contain transition-transform duration-300 group-hover:scale-110"
          priority
          unoptimized
          style={{ objectFit: 'contain' }}
        />
      </div>
      <span className="text-3xl font-bold text-white">创啤社</span>
    </Link>
  );
} 