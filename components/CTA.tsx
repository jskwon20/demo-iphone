'use client';

import { Container, Text, Button, Stack, Box } from '@mantine/core';
import Link from 'next/link';

export function CTA() {
    return (
        <Box id="buy" py={100} style={{ background: '#111' }}>
            <Container size="md" ta="center">
                <Stack gap="xl" align="center">
                    <Text size="xl" fw={700}>
                        아이폰 17 Pro.
                    </Text>
                    <Text size="lg" c="dimmed">
                        지금 바로 예약하세요.
                    </Text>
                    <Link href="/buy" passHref>
                        <Button size="xl" radius="xl" variant="white" c="black" component="a">
                            사전 예약하기
                        </Button>
                    </Link>
                    <Text size="xs" c="dimmed" mt="xl">
                        * 2025년 9월 출시 예정. 실제 제품은 이미지와 다를 수 있습니다.
                        <br />
                        Copyright © 2024 Apple Inc. All rights reserved.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}
