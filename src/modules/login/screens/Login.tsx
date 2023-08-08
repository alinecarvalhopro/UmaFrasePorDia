import {Image, View} from 'react-native';
import {ContainerLogin, ImageLogo} from '../styled/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import {theme} from '../../../shared/theme/theme';
import {useLogin} from '../hooks/useLogin';
import Text from '../../../shared/components/text/Text';
import { textTypes } from '../../../shared/components/text/textTypes';

const Login = () => {
  const {
    email,
    password,
    errorMessage,
    loading,
    handleOnPress,
    handleEmail,
    handlePassword,
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo
          source={require('../../../assets/images/logo.png')}
        />
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
          title={loading ? "Entrando" : "Entrar"}
          onPress={handleOnPress}
          loading={loading}
        />
      <Text
          margin="10px"
          type={textTypes.PARAGRAPH_SEMI_BOLD}
          color={theme.colors.pinkTheme.pink}>
          by Aline Carvalho
        </Text>
      </ContainerLogin>
    </View>
  );
};

export default Login;
