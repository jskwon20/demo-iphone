'use client';

import { Drawer, Button, ScrollArea, Stack, Text, Group, ActionIcon, Box } from '@mantine/core';
import { useCartStore } from '@/store/useCartStore';
import { IconTrash, IconX } from '@tabler/icons-react';

export function CartDrawer() {
    const { isDrawerOpen, closeDrawer, items, removeItem } = useCartStore();

    const totalPrice = items.reduce((acc, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
        return acc + price;
    }, 0);

    return (
        <Drawer
            opened={isDrawerOpen}
            onClose={closeDrawer}
            title="장바구니"
            padding="md"
            size="md"
            position="right"
            styles={{
                header: { backgroundColor: '#1a1b1e', color: 'white' },
                content: { backgroundColor: '#1a1b1e', color: 'white' },
            }}
        >
            <Stack justify="space-between" h="calc(100vh - 80px)">
                <ScrollArea h="100%" scrollbarSize={2}>
                    {items.length === 0 ? (
                        <Text c="dimmed" ta="center" mt="xl">
                            장바구니가 비어있습니다.
                        </Text>
                    ) : (
                        <Stack gap="md">
                            {items.map((item) => (
                                <Box
                                    key={item.id}
                                    style={{
                                        padding: '1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                    }}
                                >
                                    <Group justify="space-between" align="start">
                                        <Box>
                                            <Text fw={600}>{item.name}</Text>
                                            <Text size="sm" c="dimmed">
                                                {item.color} | {item.storage}
                                            </Text>
                                            <Text size="sm" mt={4}>{item.price}</Text>
                                        </Box>
                                        <ActionIcon variant="subtle" color="gray" onClick={() => removeItem(item.id)}>
                                            <IconTrash size={16} />
                                        </ActionIcon>
                                    </Group>
                                </Box>
                            ))}
                        </Stack>
                    )}
                </ScrollArea>

                {items.length > 0 && (
                    <Box pt="md" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <Group justify="space-between" mb="lg">
                            <Text fw={700}>총 금액</Text>
                            <Text fw={700} size="xl">₩{totalPrice.toLocaleString()}</Text>
                        </Group>
                        <Button fullWidth size="lg" radius="xl" color="blue">
                            결제하기
                        </Button>
                    </Box>
                )}
            </Stack>
        </Drawer>
    );
}
