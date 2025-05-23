import { useBlogStore } from '../../store/blogStore'; // 
import { LatestPostCard } from '../LatestPostCard/LatestPostCard'; // твой компонент карточки
import { SimpleGrid, Container, Title } from '@mantine/core';
import classes from './LatestPosts.module.css'; // стили для компонента

export function LatestPosts() {
    const articles = useBlogStore((state) => state.articles);
    const latestThree = [...articles].slice(-3).reverse(); // последние 3

    return (
        <Container py="xl" size="xl">
            <Title order={2} style={{ fontFamily: 'Domine', marginBottom: '20px' }} className={classes.title}>
                Последние посты
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
                {latestThree.map((article) => (
                    <LatestPostCard
                        key={article.title + article.date}
                        title={article.title}
                        image={article.image}
                        date={article.date}
                    />
                ))}
            </SimpleGrid>
        </Container>
    );
}
