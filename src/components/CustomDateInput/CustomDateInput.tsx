import { useMantineColorScheme } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import '@mantine/dates/styles.css';

export default function CustomDateInput(props) {
    const { colorScheme } = useMantineColorScheme();
    const focusColor = colorScheme === 'dark' ? '#40c6d5' : '#339eaa';

    return (
        <DateInput
            {...props}
            styles={{
                input: {
                    '--input-bd-focus': focusColor,
                },
            }}
        />
    );
}