'use client';

import { Container, Text, Box, Button, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <Box
            id="overview"
            style={{
                height: 'calc(100vh - 56px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'radial-gradient(circle at center, #1a1b1e 0%, #000000 100%)',
            }}
        >
            <Container size="xl" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <Text c="dimmed" size="lg" mb="xs" fw={500}>
                        iPhone 17 Pro
                    </Text>
                    <Text
                        component="h1"
                        style={{
                            fontSize: 'clamp(3rem, 10vw, 6rem)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(180deg, #fff 0%, #888 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        티타늄. <br />
                        초강력.
                    </Text>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    style={{ marginTop: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
                >
                    <Box style={{ position: 'relative', width: '300px', height: '600px' }}>
                        <Image
                            src="/images/iphone-hero.png"
                            alt="iPhone 17 Pro"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Group justify="center" gap="md">
                        <Link href="/buy" passHref>
                            <Button size="lg" radius="xl" variant="white" c="black" component="a">
                                구입하기
                            </Button>
                        </Link>
                        <Button size="lg" radius="xl" variant="outline" color="rgba(255,255,255,0.5)" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                            더 알아보기
                        </Button>
                    </Group>
                </motion.div>
            </Container>
        </Box>
    );
}
