import { AspectRatio, Card, Image, Text, Group } from '@mantine/core';
import classes from './BlogCard.module.css';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { useBlogStore } from '../../store/blogStore';
import { useDisclosure } from '@mantine/hooks';
import EditModal from '../EditModal';

export default function BlogCard({ article, isAdmin }) {
    const [opened, { open, close }] = useDisclosure(false);
    const removeArticle = useBlogStore(state => state.removeArticle);

    const handleDelete = () => {
        if (window.confirm('Вы уверены, что хотите удалить эту статью?')) {
            removeArticle(article.id);
        }
    };

    return (
        <>
            <Card radius="md" className={classes.card} withBorder padding="lg">
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={article.image} radius="md" />
                </AspectRatio>

                <Group justify="space-between" align="center" mt="md">
                    <Text className={classes.date} c="dimmed">
                        {article.date}
                    </Text>

                    {isAdmin && (
                        <DropdownMenu
                            onDelete={handleDelete}
                            onEdit={open}
                        />
                    )}
                </Group>

                <Text className={classes.title} mt="md">
                    {article.title}
                </Text>
            </Card>

            <EditModal
                opened={opened}
                onClose={close}
                article={article}
            />
        </>
    );
}