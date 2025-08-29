'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const DynamicThreeBackground = dynamic(() => import('./ThreeBackground'), {
  ssr: false,
});

interface ClientThreeBackgroundProps {
  isMenuOpen?: boolean;
}

export default function ClientThreeBackground({ isMenuOpen = false }: ClientThreeBackgroundProps) {
  return <DynamicThreeBackground isMenuOpen={isMenuOpen} />;
}