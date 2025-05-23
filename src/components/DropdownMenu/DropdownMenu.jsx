import { Menu, ActionIcon } from '@mantine/core';
import { IconEdit, IconTrash, IconDotsVertical } from '@tabler/icons-react';

export function DropdownMenu({ onDelete, onEdit }) {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                    <IconDotsVertical size={20} />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Действия</Menu.Label>
                <Menu.Item
                    leftSection={<IconEdit size={14} />}
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit();
                    }}
                >
                    Редактировать
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconTrash size={14} />}
                    color="red"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                >
                    Удалить
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}