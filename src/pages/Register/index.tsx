import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ContainerRegister,
  ImageRegister,
} from '../../shared/styles/resgister.style';
import Input from '../../shared/components/input/Input';
import Button from '../../shared/components/button/Button';
import {theme} from '../../shared/theme/theme';
import {apiUser} from '../../services/api';

interface IRegisterScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Register = ({navigation}: IRegisterScreenProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnPress = async () => {
    if (name == '' || email== '' || password == '') {
      setErrorMessage('Campo obrigatório')
    }
    setLoading(true);
    try {
      await apiUser.post('/users', {
        name,
        email,
        password,
      });
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setName(event.nativeEvent.text);
    setErrorMessage('')
  };

  const handleEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setEmail(event.nativeEvent.text);
    setErrorMessage('')
  };

  const handlePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setPassword(event.nativeEvent.text);
    setErrorMessage('')
  };

  return (
    <ContainerRegister>
      <ImageRegister source={require('../../assets/images/imageMessage.png')} />
      <Input
        value={name}
        margin="0 0 12px 0"
        placeholder="Digite seu nome"
        title="Nome"
        onChange={handleName}
        errorMessage={errorMessage}
      />
      <Input
        value={email}
        margin="0 0 12px 0"
        placeholder="Digite seu e-email"
        title="E-mail"
        onChange={handleEmail}
        errorMessage={errorMessage}
      />
      <Input
        value={password}
        secureTextEntry
        placeholder="Digite sua senha"
        title="Senha"
        onChange={handlePassword}
        errorMessage={errorMessage}
      />
      <Button
        type={theme.buttons.buttonsTheme.primary}
        margin="16px"
        title={loading ? 'Cadastrando' : 'Cadastrar'}
        onPress={handleOnPress}
        loading={loading}
      />
      <Button
        type={theme.buttons.buttonsTheme.primary}
        title="Retornar ao login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </ContainerRegister>
  );
};

export default Register;
