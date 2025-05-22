import { PasswordInput, useMantineColorScheme } from '@mantine/core';

export default function CustomPasswordInput(props) {
    const { colorScheme } = useMantineColorScheme();
    const focusColor = colorScheme === 'dark' ? '#40c6d5' : '#339eaa';

    return (
        <PasswordInput
            {...props}
            styles={{
                input: {
                    '--input-bd-focus': focusColor,
                },
            }}
        />
    );
}