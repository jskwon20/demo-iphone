'use client';

import { Container, Grid, Text, Stack } from '@mantine/core';
import { useState } from 'react';
import { ProductPreview } from '@/components/buy/ProductPreview';
import { ProductConfigurator } from '@/components/buy/ProductConfigurator';
import { Header } from '@/components/Header';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { useCartStore } from '@/store/useCartStore';
// import { v4 as uuidv4 } from 'uuid';

export default function BuyPage() {
    const [color, setColor] = useState('#363738');
    const [storage, setStorage] = useState('256GB');
    const { addItem, openDrawer } = useCartStore();

    const handleAddToCart = () => {
        addItem({
            id: crypto.randomUUID(),
            name: 'iPhone 17 Pro',
            color: color === '#363738' ? 'Black Titanium' : color === '#e8e8e8' ? 'White Titanium' : color === '#243a5e' ? 'Blue Titanium' : 'Natural Titanium',
            storage: storage,
            price: storage === '256GB' ? '₩1,550,000' : storage === '512GB' ? '₩1,850,000' : '₩2,150,000',
        });

        openDrawer();

        notifications.show({
            title: '장바구니에 담겼습니다',
            message: `iPhone 17 Pro ${storage} 추가됨`,
            color: 'green',
            icon: <IconCheck size="1.2rem" />,
            autoClose: 2000,
            styles: (theme) => ({
                root: {
                    backgroundColor: '#1a1b1e',
                    borderColor: '#333',
                },
                title: { color: theme.white, fontWeight: 700 },
                description: { color: theme.colors.gray[4] },
            }),
        });
    };

    return (
        <main style={{ minHeight: '100vh', background: '#000' }}>
            <Header />
            <Container size="xl" py={60}>
                <Text size="3rem" fw={700} mb={60}>
                    iPhone 17 Pro 구입하기.
                </Text>

                <Grid gutter={50}>
                    <Grid.Col span={{ base: 12, md: 7 }} style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                        <ProductPreview color={color} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <ProductConfigurator
                            color={color}
                            setColor={setColor}
                            storage={storage}
                            setStorage={setStorage}
                            onAddToCart={handleAddToCart}
                        />
                    </Grid.Col>
                </Grid>
            </Container>
        </main>
    );
}
