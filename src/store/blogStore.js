import { create } from 'zustand';

const STORAGE_KEY = 'blog-articles';

export const useBlogStore = create((set, get) => ({
    articles: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],

    addArticle: (article) => {
        const newArticle = {
            ...article,
            id: get().generateId()
        };
        const updated = [...get().articles, newArticle];
        set({ articles: updated });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    },

    removeArticle: (id) => {
        const updated = get().articles.filter(a => a.id !== id);
        set({ articles: updated });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    },

    updateArticle: (id, updatedFields) => {
        const updated = get().articles.map(article =>
            article.id === id ? { ...article, ...updatedFields } : article
        );
        set({ articles: updated });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    },

    generateId: () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    },

    clearArticles: () => {
        set({ articles: [] });
        localStorage.removeItem(STORAGE_KEY);
    },
}));