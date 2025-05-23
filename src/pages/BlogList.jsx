import { useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import BlogCard from '../components/BlogCard/BlogCard';
import AddCard from '../components/AddCard/AddCard';
import { useBlogStore } from '../store/blogStore';


export default function BlogList() {
    const articles = useBlogStore((state) => state.articles);
    const addArticle = useBlogStore((state) => state.addArticle);

    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    const removeArticle = useBlogStore((state) => state.removeArticle);

    return (
        <Container py="xl" size="xl">
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
                {articles.map((article) => (
                    <BlogCard isAdmin={isAdmin} key={article.title + article.date} article={article} onDelete={() => removeArticle(article.title, article.date)} />
                ))}
                {isAdmin && <AddCard onAdd={addArticle} />}
            </SimpleGrid>
        </Container>
    );
}
