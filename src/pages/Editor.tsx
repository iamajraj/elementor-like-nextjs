'use client';

import React, { useState } from 'react';

import Elementor from '../components/Elementor';
import Container from '../components/Container';
import { cn } from '../libs/utils';

type Props = {};

export enum LAYOUT {
  GRID,
  FLEX,
}

function Editor({}: Props) {
  const [layout, setLayout] = useState<LAYOUT>(LAYOUT.FLEX);

  return (
    <main className="flex h-screen w-full gap-4">
      <Elementor className="w-[20%]" />
      <Container
        className={cn(
          layout === LAYOUT.FLEX ? 'flex h-full flex-col w-full' : 'grid'
        )}
      />
    </main>
  );
}

export default Editor;
