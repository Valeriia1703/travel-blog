import { useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import BlogCard from '../components/BlogCard/BlogCard';
import AddCard from '../components/AddCard/AddCard';

export default function BlogList() {
    const [articles, setArticles] = useState([
        {
            title: 'Top 10 places to visit in Norway this summer',
            image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=720&q=80',
            date: 'August 18, 2022',
        },
        {
            title: 'Best forests to visit in North America',
            image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=720&q=80',
            date: 'August 27, 2022',
        },
    ]);

    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    const handleAdd = (newArticle) => {
        setArticles((prev) => [...prev, newArticle]);
    };

    return (
        <Container py="xl" size="xl">
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
                {articles.map((article) => (
                    <BlogCard key={article.title + article.date} article={article} />
                ))}
                {isAdmin && <AddCard onAdd={handleAdd} />}
            </SimpleGrid>
        </Container>
    );
}
