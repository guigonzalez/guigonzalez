'use client';

import Image, { ImageProps } from 'next/image';

interface ImageWithBasePathProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export function ImageWithBasePath({ src, ...props }: ImageWithBasePathProps) {
  return <Image {...props} src={src} />;
}
