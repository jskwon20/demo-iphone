'use client';

import { Stack, Text, Group, ColorSwatch, rem, Checkbox, Radio, Button, Box } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

interface ProductConfiguratorProps {
    color: string;
    setColor: (color: string) => void;
    storage: string;
    setStorage: (storage: string) => void;
    onAddToCart: () => void;
}

const colors = [
    { value: '#363738', label: 'Black Titanium' },
    { value: '#e8e8e8', label: 'White Titanium' },
    { value: '#243a5e', label: 'Blue Titanium' },
    { value: '#5e5e54', label: 'Natural Titanium' },
];

const storages = [
    { value: '256GB', price: '₩1,550,000' },
    { value: '512GB', price: '₩1,850,000' },
    { value: '1TB', price: '₩2,150,000' },
];

export function ProductConfigurator({
    color,
    setColor,
    storage,
    setStorage,
    onAddToCart,
}: ProductConfiguratorProps) {
    return (
        <Stack gap="xl">
            <Box>
                <Text size="sm" c="dimmed" mb="xs" fw={700} tt="uppercase">
                    색상. <span style={{ color: 'white' }}>가장 마음에 드는 마감을 선택하세요.</span>
                </Text>
                <Group gap="md">
                    {colors.map((c) => (
                        <ColorSwatch
                            key={c.value}
                            component="button"
                            color={c.value}
                            onClick={() => setColor(c.value)}
                            style={{
                                color: '#fff',
                                cursor: 'pointer',
                                width: rem(48),
                                height: rem(48),
                                border: color === c.value ? '2px solid #2997ff' : 'none',
                            }}
                            withShadow
                        >
                            {color === c.value && <IconCheck size="1.2rem" />}
                        </ColorSwatch>
                    ))}
                </Group>
                <Text mt="sm" fw={600}>
                    {colors.find((c) => c.value === color)?.label}
                </Text>
            </Box>

            <Box>
                <Text size="sm" c="dimmed" mb="md" fw={700} tt="uppercase">
                    저장 용량. <span style={{ color: 'white' }}>당신에게 알맞은 용량은?</span>
                </Text>
                <Stack gap="sm">
                    {storages.map((s) => (
                        <Box
                            key={s.value}
                            onClick={() => setStorage(s.value)}
                            style={{
                                padding: '1.5rem',
                                border: storage === s.value ? '2px solid #2997ff' : '1px solid #444',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: storage === s.value ? 'rgba(41, 151, 255, 0.1)' : 'transparent',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Box>
                                <Text fw={600} size="lg">{s.value}</Text>
                            </Box>
                            <Text size="sm" c="dimmed">{s.price}</Text>
                        </Box>
                    ))}
                </Stack>
            </Box>

            <Box pt="xl">
                <Button
                    fullWidth
                    size="xl"
                    radius="xl"
                    color="blue"
                    onClick={onAddToCart}
                >
                    장바구니에 담기
                </Button>
            </Box>
        </Stack>
    );
}
