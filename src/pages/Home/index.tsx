import React, {useEffect, useState} from 'react';
import Text from '../../shared/components/text/Text';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ContainerHome, ImageMessage} from '../../shared/styles/home.style';
import Button from '../../shared/components/button/Button';
import {theme} from '../../shared/theme/theme';
import {textTypes} from '../../shared/components/text/textTypes';
import {messages} from '../../../database/messages';
import {IMessage} from '../../interfaces/databaseInterface';
import {Icon} from '../../shared/components/icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../store/reducers/userReducer';
import { RootState } from '../../store';

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Home = ({navigation}: IHomeScreenProps) => {
  const user = useSelector((state: RootState) => state.userReducer.user)
  const dispatch = useDispatch();
  const [message, setMessage] = useState<IMessage | undefined>();

  const handleMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    setMessage(randomMessage);
  };

  useEffect(() => {
    handleMessage();
  }, []);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigation.navigate('Login');
  };

  return (
    <ContainerHome>
      <ImageMessage source={require('../../assets/images/imageMessage.png')} />
      <Text
        textAlign="center"
        margin='10px'
        type={textTypes.SUB_TITLE_LIGTH}
        color={theme.colors.pinkTheme.pink}>
        {`Oi, ${user?.user.name}`}
      </Text>
      <Text
        textAlign="center"
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
        title="Sortear uma nova frase"
        onPress={handleMessage}
      />
      <Icon
        onPress={handleLogout}
        name="exit"
        size={30}
        color={theme.colors.pinkTheme.pink}
      />
    </ContainerHome>
  );
};

export default Home;
