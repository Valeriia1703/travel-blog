// components/ModalCard.jsx
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import styles from './ModalCard.module.css';
import { DropzoneImage } from '../DropZone/DropZoneModal';
import CustomTextInput from "../CustomTextInput";
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useThemeColor } from "../../hooks/useThemeColor";

export function ModalCard({ opened, onClose, onSave }) {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(dayjs().toDate());
  const [image, setImage] = useState(null);

  const color = useThemeColor();

  const handleSave = () => {
    if (title.trim() && date) {
      onSave({
        title,
        date: dayjs(date).locale('ru').format('MMMM DD, YYYY'),
        image,
      });
      setTitle('');
      setDate(dayjs().toDate());  // Можно сбросить дату к текущей
      setImage(null);
      onClose();
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDate(dayjs().toDate());
    setImage(null);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Добавление записи"
      classNames={{ content: styles.customModalContent }}
      size="sm">
      <DropzoneImage image={image} setImage={setImage} />
      <CustomDateInput
        label="Дата"
        placeholder="Введите дату"
        clearable
        inputSize="md"
        defaultValue={dayjs().format('MM-DD-YYYY')}
        value={date}
        onChange={setDate}
      />

      <CustomTextInput
        data-autofocus
        label="Название"
        placeholder="Введите название"
        mt="md"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <Group justify="center">
        <Button
          variant="filled"
          color={color}
          size="md"
          mt={40}
          className={styles.control}
          onClick={handleSave}>
          Сохранить
        </Button>
        <Button
          variant="subtle"
          color={color}
          size="md"
          mt={40}
          className={styles.control}
          onClick={handleCancel}>
          Отмена
        </Button>
      </Group>

    </Modal>
  );
}
