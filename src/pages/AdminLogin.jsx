import { useState } from 'react';
import { Button, PasswordInput, Container, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useThemeColor } from "../hooks/useThemeColor";
import CustomPasswordInput from '../components/CustomPasswordInput';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const color = useThemeColor();

    const handleLogin = () => {
        // Добавляем проверку на пустой пароль
        if (!password.trim()) {
            setError('Введите пароль');
            return;
        }

        // Безопасное сравнение с переменной окружения
        if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
            localStorage.setItem('isAdmin', 'true');
            navigate('/blog');
        } else {
            setError('Неверный пароль');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <Container size="xs" mt="sm" p="xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <Title
                order={2}
                style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontFamily: 'Domine, sans-serif',
                    color: color,
                }}
            >
                Wander with Julia
            </Title>

            <CustomPasswordInput
                label="Пароль"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => {
                    setPassword(e.currentTarget.value);
                    setError(''); // Сбрасываем ошибку при вводе
                }}
                onKeyDown={handleKeyPress} // Добавляем обработчик Enter
                error={error}
                mt="md"
                size="xs"
                autoFocus
            />

            <Button
                onClick={handleLogin}
                mt="md"
                variant="filled"
                color={color}
                size="xs"
                fullWidth
            >
                Войти
            </Button>
        </Container>
    );
}