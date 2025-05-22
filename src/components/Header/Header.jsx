import { useState, useEffect } from 'react';
import { Burger, Container, Group, useMantineColorScheme, Flex, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { ActionIcon, Drawer, Stack } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useThemeColor } from "../../hooks/useThemeColor";

const links = [
    { link: '/', label: 'Главная' },
    { link: '/about', label: 'О блоге' },
    { link: '/destinations', label: 'Направления' },
    { link: '/blog', label: 'Блог' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';
    const location = useLocation();
    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(false);

    const color = useThemeColor();

    useEffect(() => {
        const admin = localStorage.getItem('isAdmin') === 'true';
        setIsAdmin(admin);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        setIsAdmin(false);
        navigate('/');
    };

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            to={link.link}
            className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ''}`
            }
            style={{ color: { color } }}
        >
            {link.label}
        </NavLink>
    ));

    return (
        <header className={classes.header}>
            <Container size="xl" className={classes.inner}>
                <Logo />
                <Group gap={30}>
                    <Group gap={30} visibleFrom="xs">
                        {items}
                    </Group>

                    <ActionIcon
                        onClick={toggleColorScheme}
                        variant="subtle"
                        aria-label="theme"
                        size="lg"
                    >
                        {isDark ? (
                            <IconSun size={24} stroke={1.5} color={color} />
                        ) : (
                            <IconMoon size={24} stroke={1.5} color={color} />
                        )}
                    </ActionIcon>

                    {isAdmin && (
                        <Button variant="outline" onClick={handleLogout} color={color} className={classes.hideOnMobile}>
                            Выйти
                        </Button>
                    )}

                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                </Group>
            </Container>

            <Drawer
                opened={opened}
                onClose={toggle}
                padding="md"
                size="100%"
                hiddenFrom="xs"
                overlayProps={{ opacity: 0.55, blur: 3 }}
            >
                <Stack gap="md">
                    {links.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.link}
                            className={({ isActive }) =>
                                `${classes.link} ${isActive ? classes.active : ''}`
                            }
                            onClick={toggle}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    {isAdmin && (
                        <Button variant="outline" onClick={handleLogout} color={color}>
                            Выйти
                        </Button>
                    )}
                </Stack>
            </Drawer>
        </header>
    );
}
