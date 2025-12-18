'use client';

import { Container, Group, Button, Box, Text, Burger, Drawer, Stack, Indicator, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconApple, IconShoppingBag } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { useEffect, useState } from 'react';

export function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const router = useRouter();
    const { items, openDrawer } = useCartStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToSection = (id: string) => {
        if (id === 'buy') {
            router.push('/buy');
            close();
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            close();
        } else {
            router.push('/#' + id);
            close();
        }
    };

    return (
        <>
            <Box
                component="header"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Container size="xl" w="100%">
                    <Group justify="space-between">
                        <Group gap="xs" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('overview')}>
                            <IconApple size={20} color="white" />
                            <Text fw={600} size="sm" c="white">iPhone 17 Pro</Text>
                        </Group>

                        <Group gap="xl" visibleFrom="sm">
                            <Text size="xs" c="dimmed" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('overview')}>개요</Text>
                            <Text size="xs" c="dimmed" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('specs')}>제품 사양</Text>
                            <Text size="xs" c="dimmed" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>비교하기</Text>
                            <Button size="xs" radius="xl" variant="white" c="black" onClick={() => scrollToSection('buy')}>
                                구입하기
                            </Button>
                            <Indicator label={mounted ? items.length : 0} size={16} color="red" offset={4} disabled={!mounted || items.length === 0}>
                                <ActionIcon variant="transparent" color="white" onClick={openDrawer}>
                                    <IconShoppingBag size={20} />
                                </ActionIcon>
                            </Indicator>
                        </Group>

                        <Group hiddenFrom="sm">
                            <Indicator label={mounted ? items.length : 0} size={16} color="red" offset={4} disabled={!mounted || items.length === 0}>
                                <ActionIcon variant="transparent" color="white" onClick={openDrawer}>
                                    <IconShoppingBag size={20} />
                                </ActionIcon>
                            </Indicator>
                            <Burger opened={opened} onClick={toggle} size="sm" color="white" />
                        </Group>
                    </Group>
                </Container>

                <Drawer
                    opened={opened}
                    onClose={close}
                    padding="md"
                    title="메뉴"
                    hiddenFrom="sm"
                    zIndex={1000}
                    styles={{
                        root: { color: 'white' },
                        content: { background: '#1a1b1e', color: 'white' },
                        header: { background: '#1a1b1e', color: 'white' }
                    }}
                >
                    <Stack align="center" gap="lg" mt="xl">
                        <Text size="lg" fw={500} onClick={() => scrollToSection('overview')} style={{ cursor: 'pointer' }}>개요</Text>
                        <Text size="lg" fw={500} onClick={() => scrollToSection('specs')} style={{ cursor: 'pointer' }}>제품 사양</Text>
                        <Text size="lg" fw={500} onClick={() => scrollToSection('features')} style={{ cursor: 'pointer' }}>비교하기</Text>
                        <Button fullWidth radius="xl" variant="filled" color="white" c="black" onClick={() => scrollToSection('buy')}>
                            구입하기
                        </Button>
                    </Stack>
                </Drawer>
            </Box>
            <CartDrawer />
        </>
    );
}
