import PropTypes from 'prop-types';
import {
  SectionWrap,
  Title,
  Text,
  Container1,
  Advantageslist,
  AdvantagesItem,
} from './SecondSection.styled';

export const SecondSection = ({ title, text }) => {
  return (
    <SectionWrap>
      <Container1>
        <Advantageslist>
          <AdvantagesItem>
            <Title>Якість контенту</Title>
            <Text>
              Матеріали пройшли кілька етапів редагування для забезпечення їх
              відповідності освітнім стандартам і потребам учнів. Було
              використано сучасні методики та інструменти для створення
              відеоматеріалів та інтерактивних компонентів. Це дозволило
              створити ресурс, який не лише відповідає навчальним вимогам, але й
              є цікавим та доступним для учнів різного рівня підготовки.
            </Text>
          </AdvantagesItem>
          <AdvantagesItem>
            <Title>Актуальність</Title>
            <Text>
              У сучасному світі, де інформаційні технології стають невід'ємною
              частиною повсякденного життя, забезпечення високоякісної освіти з
              інформатики є надзвичайно важливим. Цей ресурс відповідає сучасним
              освітнім стандартам, дозволяючи учням отримувати актуальні знання
              та навички, необхідні для успішного функціонування у цифровому
              суспільстві.
            </Text>
          </AdvantagesItem>
          <AdvantagesItem>
            <Title>Доступність</Title>
            <Text>
              Платформа розроблена таким чином, щоб забезпечити зручний доступ
              до матеріалів з будь-якого пристрою, включаючи комп'ютери,
              планшети та смартфони. Це дозволяє учням і вчителям користуватися
              ресурсом у будь-який час та в будь-якому місці, що значно підвищує
              гнучкість навчального процесу. Інтуїтивно зрозумілий інтерфейс та
              адаптивний дизайн сприяють легкій навігації та використанню
              матеріалів, незалежно від технічних навичок користувача.
            </Text>
          </AdvantagesItem>
        </Advantageslist>
      </Container1>
    </SectionWrap>
  );
};
SecondSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};