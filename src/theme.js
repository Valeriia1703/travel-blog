import { createTheme } from '@mantine/core';

export const theme = createTheme({
    colors: {
        primary: ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'],
        accent: ['#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F'],
    },
    primaryColor: 'primary', // по умолчанию цвет для всех color="primary"
});