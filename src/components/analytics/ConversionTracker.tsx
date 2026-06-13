"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const ConversionTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Paid-Media Agent: Log page view for conversion optimization
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    console.log(`[PAID-MEDIA] Conversion Tracking PageView: ${url}`);
    
    // Placeholder for GTM / FB Pixel / TikTok Pixel
    // if (typeof window !== 'undefined' && (window as any).fbq) {
    //   (window as any).fbq('track', 'PageView');
    // }
  }, [pathname, searchParams]);

  return null;
};
