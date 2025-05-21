import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import classes from './Footer.module.css';

export function Footer() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner} size="xl">
                <Logo />
                <Group gap={15} className={classes.links} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="#40c6d5" variant="subtle" >
                        <IconBrandTwitter size={24} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="#40c6d5" variant="subtle">
                        <IconBrandYoutube size={24} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="#40c6d5" variant="subtle">
                        <IconBrandInstagram size={24} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}