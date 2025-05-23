import { useState, useEffect } from 'react';
import { Modal, TextInput, Button, Group, Text } from '@mantine/core';
import CustomDateInput from '../components/CustomDateInput/CustomDateInput';
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import { useBlogStore } from '../store/blogStore';
import { DropzoneImage } from '../components/DropZone/DropZoneModal';
import { useThemeColor } from "../hooks/useThemeColor";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

export default function EditModal({ opened, onClose, article }) {
    const updateArticle = useBlogStore(state => state.updateArticle);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(dayjs().toDate()); // Инициализация текущей датой
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const color = useThemeColor();

    // Инициализация формы
    useEffect(() => {
        if (article) {
            setTitle(article.title);
            setImage(article.image);

            const parsedDate = dayjs(article.date);
            setDate(parsedDate.isValid() ? parsedDate.toDate() : new Date());
        } else {
            // Сброс формы, если article не передан
            setTitle('');
            setDate(new Date());
            setImage(null);
        }
    }, [article]);

    const handleSave = () => {
        setError('');

        if (!title.trim()) {
            setError('Введите название');
            return;
        }

        if (!date) {
            setError('Укажите дату');
            return;
        }

        console.log('Сохранение', { id: article.id, title, date, image });

        updateArticle(article.id, {
            title,
            date: dayjs(date).format('MMMM DD, YYYY'),
            image
        });

        onClose();
    };

    return (
        <Modal opened={opened} onClose={onClose} title="Редактирование" size="md">
            <DropzoneImage image={image} setImage={setImage} />

            <CustomDateInput
                label="Дата"
                placeholder="Введите дату"
                clearable
                inputSize="md"
                value={date}
                onChange={setDate}
                error={error && !date ? error : null}
                mt="md"
            />

            <CustomTextInput
                label="Название"
                value={title}
                onChange={(e) => {
                    setTitle(e.currentTarget.value);
                    setError('');
                }}
                error={!title.trim() && error}
                mt="md"
            />

            {error && (
                <Text c="red" size="sm" mt="xs">
                    {error}
                </Text>
            )}

            <Group justify="center" mt={40}>
                <Button
                    onClick={handleSave}
                    disabled={!title.trim() || !date}
                    color={color}
                    size="md"
                >
                    Сохранить
                </Button>
                <Button
                    variant="outline"
                    onClick={onClose}
                    color={color}
                    size="md">
                    Отмена
                </Button>

            </Group>
        </Modal>
    );
}