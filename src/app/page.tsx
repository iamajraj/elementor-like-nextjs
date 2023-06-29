'use client';

import Elementor from '../components/Elementor';
import Container from '../components/Container';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full gap-4">
      <Elementor className="w-[20%]" />
      <Container className="w-full" />
    </main>
  );
}
