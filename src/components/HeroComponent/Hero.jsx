import { Button, Container, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';
import { useNavigate } from 'react-router-dom';

export function HeroImage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/blog'); // укажи нужный путь
    };
    return (
        <div className={classes.root}>
            <Container size="xl">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title} order={1} style={{ fontFamily: 'Domine' }}>
                            Добро пожаловать в{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: '#008593', to: '#40c6d5' }}
                                style={{ fontFamily: 'Domine' }}
                            >
                                мир путешествий
                            </Text>{' '}
                            вместе с моим блогом
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Откройте для себя удивительные направления, советы для путешественников и вдохновение для ваших будущих приключений. Всё — в одном месте.
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: '#008593', to: '#40c6d5' }}
                            size="xl"
                            mt={40}
                            className={classes.control}
                            radius="md"
                            onClick={handleClick} // 
                        >
                            Начать путешествие
                        </Button>
                    </div>
                </div>
            </Container >
        </div >
    );
}