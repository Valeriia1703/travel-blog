import { useState } from 'react';
import { Button, PasswordInput, Container, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useThemeColor } from "../hooks/useThemeColor";

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const color = useThemeColor();

    const handleLogin = () => {
        if (password === 'test123') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/blog'); // или куда нужно
        } else {
            alert('Неверный пароль');
        }
    };

    return (
        <Container size="xs" mt="sm" p="xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <Title order={2}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px',
                    fontFamily: 'Playfair Display, sans-serif',
                    color: color,
                }}>
                Wander with Julia
            </Title>
            <PasswordInput
                label="Пароль"
                placeholder='Введите пароль'
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                type="password"
                mt="md"
                size='xs'
            />
            <Button onClick={handleLogin} mt="md" variant="filled" color={color} size='xs'>Войти</Button>
        </Container>
    );
}
