import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import { api } from '../../../services/api';

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string
}
interface IUserResult {
  accessToken: 'string';
  user: IUser

}
export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUserResult | unknown>();

  const handleOnPress = async () => {
    setLoading(true);
    try {
      const {data} = await api.post('/login', {
          email,
          password,
        },
      );
      setUser(data.user);
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

  return {
    email,
    password,
    errorMessage,
    loading,
    handleOnPress,
    handleEmail,
    handlePassword,
  };
};
