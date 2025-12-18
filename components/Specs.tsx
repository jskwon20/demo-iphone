'use client';

import { Container, Text, Group, Stack, ColorSwatch, Center, rem } from '@mantine/core';
import { useState } from 'react';
import { motion } from 'framer-motion';

const colors = [
    { value: '#363738', label: 'Black Titanium' },
    { value: '#e8e8e8', label: 'White Titanium' },
    { value: '#243a5e', label: 'Blue Titanium' },
    { value: '#5e5e54', label: 'Natural Titanium' },
];

export function Specs() {
    const [activeColor, setActiveColor] = useState(colors[0].value);

    return (
        <Container id="specs" size="xl" py={100}>
            <Stack align="center" gap="xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Text size={rem(48)} fw={700} ta="center" mb="lg">
                        마감의 미학.
                    </Text>
                </motion.div>

                <Group gap="lg">
                    {colors.map((color) => (
                        <motion.div
                            key={color.value}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ColorSwatch
                                component="button"
                                color={color.value}
                                onClick={() => setActiveColor(color.value)}
                                style={{
                                    color: '#fff',
                                    cursor: 'pointer',
                                    width: rem(32),
                                    height: rem(32),
                                }}
                                withShadow
                            >
                                {activeColor === color.value && (
                                    <Center>
                                        <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }} />
                                    </Center>
                                )}
                            </ColorSwatch>
                        </motion.div>
                    ))}
                </Group>

                <Text c="dimmed" size="sm">
                    {colors.find(c => c.value === activeColor)?.label}
                </Text>

                {/* Spec Sheet Preview */}
                <Stack gap="md" mt={50} style={{ width: '100%', maxWidth: '600px', textAlign: 'left' }}>
                    <Group justify="space-between" style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                        <Text fw={600}>화면</Text>
                        <Text c="dimmed">6.9" Super Retina XDR</Text>
                    </Group>
                    <Group justify="space-between" style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                        <Text fw={600}>소재</Text>
                        <Text c="dimmed">Grade 5 티타늄</Text>
                    </Group>
                    <Group justify="space-between" style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                        <Text fw={600}>칩</Text>
                        <Text c="dimmed">A19 Pro</Text>
                    </Group>
                    <Group justify="space-between" style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                        <Text fw={600}>커넥터</Text>
                        <Text c="dimmed">USB-C (Thunderbolt 5)</Text>
                    </Group>
                </Stack>
            </Stack>
        </Container>
    );
}
