'use client';

import { useEffect } from 'react';

export const GoogleBatch = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div      
      data-iframe-width="850"
      data-iframe-height="270"
      data-share-badge-id="2d65bb03-7798-49c7-b57d-376243e4652c"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};


