import { TextInput, useMantineColorScheme } from '@mantine/core';

export default function CustomTextInput(props) {
    const { colorScheme } = useMantineColorScheme();
    const focusColor = colorScheme === 'dark' ? '#40c6d5' : '#339eaa';

    return (
        <TextInput
            {...props}
            styles={{
                input: {
                    '--input-bd-focus': focusColor,
                },
            }}
        />
    );
}