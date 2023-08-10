import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {useState} from 'react';
import {apiUser} from '../../services/api';
import {setUserAction} from '../../store/reducers/userReducer';
import {ContainerLogin, ImageLogo} from '../../shared/styles/login.style';
import Input from '../../shared/components/input/Input';
import Button from '../../shared/components/button/Button';
import {theme} from '../../shared/theme/theme';
import Text from '../../shared/components/text/Text';
import {textTypes} from '../../shared/components/text/textTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface ILoginScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Login = ({navigation}: ILoginScreenProps) => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnPress = async () => {
    setLoading(true);
    try {
      const {data} = await apiUser.post('/login', {
        email,
        password,
      });
      dispatch(setUserAction(data));
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    } catch (error) {
      setErrorMessage('Usuário ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };

  const handleEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setEmail(event.nativeEvent.text);
    setErrorMessage('');
  };

  const handlePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setPassword(event.nativeEvent.text);
    setErrorMessage('');
  };

  return (
    <ContainerLogin>
      <ImageLogo source={require('../../assets/images/logo.png')} />
      <Input
        value={email}
        errorMessage={errorMessage}
        margin="0 0 12px 0"
        placeholder="Digite seu e-email"
        title="E-mail"
        onChange={handleEmail}
      />
      <Input
        value={password}
        errorMessage={errorMessage}
        secureTextEntry
        placeholder="Digite sua senha"
        title="Senha"
        onChange={handlePassword}
      />
      <Button
        type={theme.buttons.buttonsTheme.primary}
        margin="16px"
        title={loading ? 'Entrando' : 'Entrar'}
        onPress={handleOnPress}
        loading={loading}
      />
      <Button
        type={theme.buttons.buttonsTheme.primary}
        title='Cadastre-se'
        onPress={() => {navigation.navigate('Register')}}
      />
      <Text
        margin="10px"
        type={textTypes.PARAGRAPH_SEMI_BOLD}
        color={theme.colors.pinkTheme.pink}>
        by Aline Carvalho
      </Text>
    </ContainerLogin>
  );
};

export default Login;