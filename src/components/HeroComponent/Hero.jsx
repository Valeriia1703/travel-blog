import { Button, Container, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';

export function HeroImage() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title} order={1} style={{ fontFamily: 'Playfair Display' }}>
                            Добро пожаловать в{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: '#008593', to: '#40c6d5' }}
                                style={{ fontFamily: 'Playfair Display' }}
                            >
                                мир путешествий
                            </Text>{' '}
                            вместе с нашим блогом
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
                        >
                            Начать путешествие
                        </Button>
                    </div>
                </div>
            </Container >
        </div >
    );
}