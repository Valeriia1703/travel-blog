import { Button, Container, Text, Title, Space, Image, useMantineColorScheme } from '@mantine/core';
import classes from './HeroAbout.module.css';
import AboutImage from "../../assets/AboutImage.jpg";


export function HeroAbout() {
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';

    const textGradient = isDark
        ? { from: '#40c6d5', to: '#339eaa' }
        : { from: '#277780', to: '#1a4f55' };

    const textColor = isDark ? '#f5f4f4' : '#181818';


    return (
        <div className={classes.root}>
            <Container size="xl">
                <div className={classes.inner}>
                    <Title className={classes.title} order={1} style={{ fontFamily: 'Playfair Display' }}>
                        Обо мне
                    </Title>
                    <div className={classes.innerContent}>
                        <div className={classes.content}>
                            <h3
                                className={classes.h3}
                                style={{ fontFamily: 'Playfair Display', color: isDark ? '#f5f4f4' : '#181818', textAlign: 'center' }}>
                                Привет, я {' '}
                                <Text
                                    component="span"
                                    inherit
                                    variant="gradient"
                                    gradient={textGradient}
                                    style={{ fontFamily: 'Playfair Display' }}
                                >
                                    Юлия
                                </Text>
                                !
                            </h3>
                            <Text className={classes.description} mt={30} c={textColor}>
                                Я не профессиональный путешественник и не инстаграмный блогер с идеальными кадрами. Я просто тот, кто любит иногда срываться с места и открывать для себя новые уголки планеты между работой и домашними делами.
                            </Text>

                            <h3
                                className={classes.h3}
                                style={{ fontFamily: 'Playfair Display', color: isDark ? '#f5f4f4' : '#181818' }}>
                                Почему я пишу:
                            </h3>
                            <ul>
                                <li>
                                    <Text className={classes.description} mt={30} c={textColor}>
                                        Потому что путешествия — это не про «успеть зачекиниться во всех точках», а про запахи утреннего кофе в маленькой итальянской пекарне или разговор с бабушкой на рыбном рынке в Тайланде, когда вы объясняетесь жестами.
                                    </Text>
                                </li>
                                <li>
                                    <Text className={classes.description} mt={30} c={textColor}>
                                        Чтобы делиться не глянцевыми открытками, а настоящими эмоциями: восторгом от случайно найденного книжного магазина в Праге, паникой при виде цен в Норвегии или смехом над своим кривым произношением местных слов.
                                    </Text>
                                </li>
                            </ul>
                            <h3
                                className={classes.h3}
                                style={{ fontFamily: 'Playfair Display', color: isDark ? '#f5f4f4' : '#181818' }}>
                                Мой стиль:
                            </h3>
                            <ul>
                                <li>
                                    <Text className={classes.description} mt={30} c={textColor}>
                                        <Text
                                            component="span"
                                            inherit
                                            variant="gradient"
                                            gradient={textGradient}
                                            style={{ fontFamily: 'Inter' }}
                                        >
                                            Бюджетно, но с душой
                                        </Text> {' '}
                                        — верю, что атмосферные места не требуют толстого кошелька
                                    </Text>
                                </li>
                                <li>
                                    <Text className={classes.description} mt={30} c={textColor}>
                                        <Text
                                            component="span"
                                            inherit
                                            variant="gradient"
                                            gradient={textGradient}
                                            style={{ fontFamily: 'Inter' }}
                                        >
                                            Без чек-листов
                                        </Text> {' '}
                                        — у меня нет списка «50 мест, которые нужно посетить до смерти»
                                    </Text>
                                </li>
                                <li>
                                    <Text className={classes.description} mt={30} c={textColor}>
                                        <Text
                                            component="span"
                                            inherit
                                            variant="gradient"
                                            gradient={textGradient}
                                            style={{ fontFamily: 'Inter' }}
                                        >
                                            Для таких же обычных людей
                                        </Text> {' '}
                                        — без экзотики «я медитировала с монахами 3 месяца» (хотя если вдруг — расскажу!)
                                    </Text>
                                </li>
                            </ul>
                            <h3
                                className={classes.h3}
                                style={{ fontFamily: 'Playfair Display', color: isDark ? '#f5f4f4' : '#181818' }}>
                                Где я была:
                            </h3>
                            <Text className={classes.description} mt={30} c={textColor}>
                                Несколько стран в Европе, о. Хайнань в Азии, и та самая поездка в [место], после которой поняла, что хочу делиться этими историями.
                                Этот блог — как разговор с другом за бокалом вина: честно, без пафоса и с парой забавных провалов.
                            </Text>


                        </div>
                        <div className={classes.image}>
                            <Image
                                radius="md"
                                w="auto"
                                fit="contain"
                                src={AboutImage}
                            />
                        </div>
                    </div>

                </div>
            </Container >
        </div >
    );
}