'use client';

import { Box, Text, Transition } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProductPreviewProps {
    color: string;
}

const colorMap: Record<string, string> = {
    '#363738': 'Titanium Black',
    '#e8e8e8': 'Titanium White',
    '#243a5e': 'Titanium Blue',
    '#5e5e54': 'Titanium Natural',
};

export function ProductPreview({ color }: ProductPreviewProps) {
    return (
        <Box
            style={{
                width: '100%',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: '#1a1b1e',
                borderRadius: '24px',
                overflow: 'hidden',
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={color}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box style={{ position: 'relative', width: '300px', height: '450px' }}>
                        <Image
                            src="/images/iphone-preview.png"
                            alt="iPhone 17 Pro Preview"
                            fill
                            style={{
                                objectFit: 'contain',
                                filter: color === '#363738' ? 'brightness(0.8)' : color === '#e8e8e8' ? 'brightness(1.2)' : color === '#243a5e' ? 'hue-rotate(200deg) brightness(0.9)' : 'grayscale(1)',
                                transition: 'filter 0.3s ease'
                            }}
                            priority
                        />
                    </Box>
                </motion.div>
            </AnimatePresence>
        </Box>
    );
}
