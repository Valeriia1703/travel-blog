import { useState } from 'react';
import { Burger, Container, Group, useMantineColorScheme, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';


const links = [
    { link: '/home', label: 'Главная' },
    { link: '/about', label: 'О блоге' },
    { link: '/destinations', label: 'Направления' },
    { link: '/blog', label: 'Блог' },
];


export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { colorScheme, setColorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="lg" className={classes.inner}>
                <Logo></Logo>
                <Group gap={30} visibleFrom="xs">
                    {items}
                    <ActionIcon onClick={() => toggleColorScheme()} variant='subtle' aria-label='theme' color='#40c6d5'>
                        {isDark ? <IconSun size={24} stroke={1.5} /> : <IconMoon size={24} stroke={1.5} />}
                    </ActionIcon>
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}
