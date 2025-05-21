import { useState } from 'react';
import { Burger, Container, Group, useMantineColorScheme, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { ActionIcon, Drawer, Stack } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
    { link: '/', label: 'Главная' },
    { link: '/about', label: 'О блоге' },
    { link: '/destinations', label: 'Направления' },
    { link: '/blog', label: 'Блог' },
];



export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { colorScheme, setColorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';
    const location = useLocation();

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            to={link.link}
            className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ''}`
            }
            style={{ color: isDark ? '#f5f4f4' : '#181818', }}
        >
            {link.label}
        </NavLink>
    ));

    return (
        <header className={classes.header}>
            <Container size="xl" className={classes.inner}>
                <Logo></Logo>
                <Group gap={30}>
                    <Group gap={30} visibleFrom="xs">
                        {items}
                    </Group>
                    <ActionIcon onClick={() => toggleColorScheme()} variant='subtle' aria-label='theme' color='#40c6d5' size="lg">
                        {isDark ? <IconSun size={24} stroke={1.5} /> : <IconMoon size={24} stroke={1.5} />}
                    </ActionIcon>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                </Group>


            </Container>
            <Drawer
                opened={opened}
                onClose={toggle}
                padding="md"
                size="100%"
                title="Меню"
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
                            onClick={toggle} // закрываем меню при переходе
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </Stack>
            </Drawer>
        </header>
    );
}
