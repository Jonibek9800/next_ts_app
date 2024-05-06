import { Divider } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { FC } from "react";

const AboutUs: FC = () => {
    return (
        <div style={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
        }}>
            <Title level={2} style={{ color: "#1890ff" }}>О нас</Title>
            <Divider style={{ borderColor: "#ccc" }} />
            <Paragraph style={{ marginBottom: "16px" }}>
                Ресторан &quot;Вкусные сюрпризы&quot; приглашает вас на незабываемое кулинарное путешествие,
                где каждое блюдо - это настоящий шедевр, а атмосфера - воплощение уюта и радушия.
            </Paragraph>
            <Paragraph style={{ marginBottom: "16px" }}>
                Наша команда кулинаров и сервисного персонала стремится сделать ваше посещение нашего
                ресторана незабываемым, предоставляя высочайший уровень сервиса и кулинарного мастерства.
            </Paragraph>
            <Title level={3} style={{ color: "#52c41a" }}>Наши ценности</Title>
            <Paragraph style={{ marginBottom: "16px" }}>
                Мы верим в качество ингредиентов и их гармоничное сочетание в каждом блюде.
            </Paragraph>
            <Paragraph style={{ marginBottom: "16px" }}>
                Мы ценим уникальность и креативность в наших рецептах и подаче блюд.
            </Paragraph>
            <Paragraph style={{ marginBottom: "16px" }}>
                Мы стремимся создать атмосферу радушия и комфорта для наших гостей.
            </Paragraph>
        </div>
    );
}

export default AboutUs;