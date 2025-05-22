import { useRef, useState } from 'react';
import { IconCloudUpload, IconDownload, IconX } from '@tabler/icons-react';
import { Button, Group, Text, useMantineTheme, Image, useMantineColorScheme } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import classes from './DropZoneModal.module.css';
import { useThemeColor } from '../../hooks/useThemeColor';

// DropzoneImage.jsx
export function DropzoneImage({ image, setImage }) {
    const theme = useMantineTheme();
    const openRef = useRef(null);
    const color = useThemeColor();

    const handleDrop = (files) => {
        const file = files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result); // возвращаем base64 в родителя
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className={classes.wrapper}>
            <Dropzone
                openRef={openRef}
                onDrop={handleDrop}
                className={classes.dropzone}
                radius="md"
                accept={['image/*']}
                maxSize={10 * 1024 ** 2}
            >
                <div style={{ pointerEvents: 'none' }}>
                    <Group justify="center">
                        <Dropzone.Accept>
                            <IconDownload size={50} color={theme.colors.blue[6]} stroke={1.5} />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconCloudUpload size={50} stroke={1.5} className={classes.icon} />
                        </Dropzone.Idle>
                    </Group>

                    <Text ta="center" fw={700} fz="lg" mt="xl">
                        <Dropzone.Accept>Отпустите файл</Dropzone.Accept>
                        <Dropzone.Reject>Только изображения до 10MB</Dropzone.Reject>
                        <Dropzone.Idle>Загрузите изображение</Dropzone.Idle>
                    </Text>
                </div>
            </Dropzone>

            <Button
                className={classes.control}
                variant="filled"
                color={color}
                size="md"
                radius="xl"
                onClick={() => openRef.current?.()}
            >
                Выбрать файл
            </Button>

            {image && (
                <Image
                    src={image}
                    alt="Preview"
                    mt="md"
                    radius="md"
                    w={200}
                    fit="contain"
                />
            )}
        </div>
    );
}
