// src/hooks/useThemeColor.js
import { useMantineColorScheme } from '@mantine/core';

export function useThemeColor(lightColor = '#339eaa', darkColor = '#40c6d5') {
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';
    return isDark ? darkColor : lightColor;
}
