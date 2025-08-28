'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const DynamicThreeBackground = dynamic(() => import('./ThreeBackground'), {
  ssr: false,
});

export default function ClientThreeBackground() {
  return <DynamicThreeBackground />;
}
