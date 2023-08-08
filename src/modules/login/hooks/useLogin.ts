import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {api} from '../../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {setUserAction} from '../../../store/reducers/userReducer';

export const useLogin = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnPress = async () => {
    setLoading(true);
    try {
      const {data} = await api.post('/login', {
        email,
        password,
      });
      dispatch(setUserAction(data));
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
