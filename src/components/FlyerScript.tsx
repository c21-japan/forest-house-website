'use client';

import { useEffect } from 'react';
import { initFlyerFeatures } from '@/lib/flyer-utils';

export default function FlyerScript() {
  useEffect(() => {
    initFlyerFeatures();
  }, []);

  return null;
}
