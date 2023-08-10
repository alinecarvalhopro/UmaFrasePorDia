import Text from '../../shared/components/text/Text';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ContainerHome} from '../../shared/styles/home.style';
import Button from '../../shared/components/button/Button';
import {theme} from '../../shared/theme/theme';
import {useEffect, useState} from 'react';
import {textTypes} from '../../shared/components/text/textTypes';
import {messages} from '../../../database/messages';
import {IMessage} from '../../interfaces/messageInterface';

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Home = ({navigation}: IHomeScreenProps) => {
  const [message, setMessage] = useState<IMessage | undefined>();

  const handleOnPress = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  useEffect(() => {
    handleOnPress();
  }, []);

  return (
    <ContainerHome>
      <Text
        type={textTypes.SUB_TITLE_LIGTH}
        color={theme.colors.pinkTheme.pink}>
        {message?.message}
      </Text>
      <Text
        margin="10px 0"
        type={textTypes.PARAGRAPH_SEMI_BOLD}
        color={theme.colors.pinkTheme.pink}>
        {message?.author}
      </Text>
      <Button
        type={theme.buttons.buttonsTheme.primary}
        margin="16px"
        title='Sortear uma nova frase'
        onPress={handleOnPress}
      />
    </ContainerHome>
  );
};

export default Home;
