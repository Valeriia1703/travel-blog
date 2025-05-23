import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import classes from './Footer.module.css';
import { useThemeColor } from '../../hooks/useThemeColor';

export function Footer() {
    const color = useThemeColor();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner} size="xl">
                <Logo />
                <Group gap={15} className={classes.links} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color={color} variant="subtle" >
                        <IconBrandTwitter size={24} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color={color} variant="subtle">
                        <IconBrandYoutube size={24} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color={color} variant="subtle">
                        <IconBrandInstagram size={26} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}