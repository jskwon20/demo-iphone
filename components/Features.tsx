'use client';

import { Container, SimpleGrid, Paper, Text, Box, ThemeIcon } from '@mantine/core';
import { IconCpu, IconCamera, IconBatteryEco, IconWifi } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: IconCpu,
        title: 'A19 Pro Chip',
        description: '역대 가장 강력한 모바일 칩셋. 데스크탑급 성능.',
        span: 2,
        color: 'blue'
    },
    {
        icon: IconCamera,
        title: '48MP 망원',
        description: '전문가급 인물 사진을 위한 5배 광학 줌.',
        span: 1,
        color: 'gray'
    },
    {
        icon: IconBatteryEco,
        title: '하루 종일 가는 배터리',
        description: '최대 29시간 동영상 재생.',
        span: 1,
        color: 'green'
    },
    {
        icon: IconWifi,
        title: 'Wi-Fi 7',
        description: '초고속 무선 연결.',
        span: 2,
        color: 'indigo'
    },
];

export function Features() {
    return (
        <Container id="features" size="xl" py={100}>
            <Text size="xl" fw={700} mb="xl" ta="center">
                압도적인 성능.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{ gridColumn: `span ${feature.span}` }}
                    >
                        <Paper
                            radius="xl"
                            p="xl"
                            style={{
                                height: '300px',
                                background: '#151516',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s ease',
                            }}
                            withBorder={false}
                        >
                            <ThemeIcon size={48} radius="md" variant="light" color={feature.color}>
                                <feature.icon size={28} />
                            </ThemeIcon>
                            <Box>
                                <Text size="lg" fw={600} c="white" mb="xs">
                                    {feature.title}
                                </Text>
                                <Text size="sm" c="dimmed">
                                    {feature.description}
                                </Text>
                            </Box>
                        </Paper>
                    </motion.div>
                ))}
            </SimpleGrid>
        </Container>
    );
}
