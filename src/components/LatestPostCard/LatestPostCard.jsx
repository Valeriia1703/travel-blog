import { Badge, Button, Card, Center, Group, Image, Text, Title } from '@mantine/core';
import classes from './LatestPostCard.module.css';
import { useBlogStore } from '../../store/blogStore';
import { useThemeColor } from '../../hooks/useThemeColor';

export function LatestPostCard({ title, image, date }) {
    const articles = useBlogStore((state) => state.articles);
    const latest = articles[articles.length - 1];

    const color = useThemeColor();

    if (!latest) return null;

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image
                    src={image || "https://via.placeholder.com/400x200?text=No+Image"}
                    alt={title}
                    height={250}
                    style={{ objectFit: 'cover' }}
                    radius="md" />

            </Card.Section>

            <Group justify="space-between" mt="md" style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
                <div>
                    <Text fw={500}>{title}</Text>
                    <Text fz="xs" c="dimmed">
                        {date}
                    </Text>
                </div>
                <Badge variant="outline" color={color}>Новое</Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">

                <Group gap={30}>
                    <Button radius="md" color={color} style={{ flex: 1 }} >
                        Читать
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}