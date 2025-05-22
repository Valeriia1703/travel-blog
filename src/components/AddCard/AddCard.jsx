// components/AddCard/AddCard.jsx
import { useState, useCallback } from 'react';
import { AspectRatio, Card, Text, Center } from '@mantine/core';
import classes from './AddCard.module.css';
import { IconPlus } from '@tabler/icons-react';
import { ModalCard } from '../ModalCard/ModalCard'
import { useThemeColor } from '../../hooks/useThemeColor';

export default function AddCard({ onAdd }) {
    const [modalOpen, setModalOpen] = useState(false);
    const color = useThemeColor();

    return (
        <>
            <Card
                key="add"
                p="xs"
                radius="md"
                className={classes.card}
                style={{ cursor: 'pointer', border: `1px dashed ${color}` }}
                component="a"
                onClick={() => setModalOpen(true)}
            >
                <AspectRatio ratio={1920 / 1080}>
                    <Center>
                        <IconPlus size={48} stroke={1.5} color={color} />
                    </Center>
                </AspectRatio>
            </Card>
            <ModalCard
                opened={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={(data) => {
                    onAdd(data);
                }}
            />
        </>
    );
}
