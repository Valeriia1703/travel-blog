import { useState, useEffect } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import styles from './ModalCard.module.css';
import { DropzoneImage } from '../DropZone/DropZoneModal';
import CustomTextInput from "../CustomTextInput";
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useThemeColor } from "../../hooks/useThemeColor";
import { useBlogStore } from '../../store/blogStore';

dayjs.locale('ru');

export function ModalCard({ opened, onClose, editArticle }) {
  const { addArticle, updateArticle, generateId } = useBlogStore();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(dayjs().toDate());
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const color = useThemeColor();

  // Заполняем форму данными при редактировании
  useEffect(() => {
    if (editArticle) {
      setTitle(editArticle.title);
      setDate(dayjs(editArticle.date).toDate());
      setImage(editArticle.image);
    } else {
      resetForm();
    }
  }, [editArticle]);

  const resetForm = () => {
    setTitle('');
    setDate(dayjs().toDate());
    setImage(null);
    setError('');
  };

  const handleSave = () => {
    if (!title.trim()) {
      setError('Введите название');
      return;
    }

    if (!date) {
      setError('Укажите дату');
      return;
    }

    const articleData = {
      title: title.trim(),
      date: dayjs(date).format('MMMM DD, YYYY'),
      image,
    };

    if (editArticle) {
      // Редактирование существующей статьи
      updateArticle(editArticle.id, articleData);
    } else {
      // Добавление новой статьи
      addArticle({
        ...articleData,
        id: generateId(),
      });
    }

    resetForm();
    onClose();
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleCancel}
      title={editArticle ? "Редактирование записи" : "Добавление записи"}
      classNames={{ content: styles.customModalContent }}
      size="sm"
    >
      <DropzoneImage image={image} setImage={setImage} />

      <CustomDateInput
        label="Дата"
        placeholder="Введите дату"
        clearable
        inputSize="md"
        value={date}
        onChange={setDate}
        error={error && !date ? error : null}
      />

      <CustomTextInput
        data-autofocus
        label="Название"
        placeholder="Введите название"
        mt="md"
        value={title}
        onChange={(e) => {
          setTitle(e.currentTarget.value);
          setError('');
        }}
        error={error && !title.trim() ? error : null}
      />

      {error && (
        <Text c="red" size="sm" mt="xs">
          {error}
        </Text>
      )}

      <Group justify="center" mt={40}>
        <Button
          variant="filled"
          color={color}
          size="md"
          className={styles.control}
          onClick={handleSave}
        >
          {editArticle ? 'Сохранить изменения' : 'Добавить запись'}
        </Button>
        <Button
          variant="subtle"
          color={color}
          size="md"
          className={styles.control}
          onClick={handleCancel}
        >
          Отмена
        </Button>
      </Group>
    </Modal>
  );
}