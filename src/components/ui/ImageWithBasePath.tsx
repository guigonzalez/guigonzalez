'use client';

import Image, { ImageProps } from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/guigonzalez' : '';

interface ImageWithBasePathProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export function ImageWithBasePath({ src, ...props }: ImageWithBasePathProps) {
  const imageSrc = src.startsWith('/') ? `${basePath}${src}` : src;
  return <Image {...props} src={imageSrc} />;
}
