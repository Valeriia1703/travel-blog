// components/BlogCard/BlogCard.jsx
import { AspectRatio, Card, Image, Text } from '@mantine/core';
import classes from './BlogCard.module.css';

export default function BlogCard({ article }) {
    return (
        <Card
            key={article.title}
            p="xs"
            radius="md"
            component="a"
            href="#"
            className={classes.card}
        >
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} radius="md" />
            </AspectRatio>
            <Text className={classes.date}>{article.date}</Text>
            <Text className={classes.title}>{article.title}</Text>
        </Card>
    );
}
