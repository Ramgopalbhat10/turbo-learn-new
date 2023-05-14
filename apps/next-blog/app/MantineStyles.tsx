'use client'

import { MantineProvider } from '@mantine/core'
import { useServerInsertedHTML } from 'next/navigation'
import { rtlCache } from './lib/rtl-cache';
import { useState } from 'react';

export default function MantineStylesProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cache] = useState(() => {
    const cache = rtlCache;
    cache.compat = true;
    return cache;
  });
  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return (
    <MantineProvider
      theme={{ colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
      emotionCache={rtlCache}
    >
      {children}
    </MantineProvider>
  )
}