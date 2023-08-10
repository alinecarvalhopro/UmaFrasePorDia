import {View} from 'react-native';
import Text from '../../shared/components/text/Text';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IRegisterScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Register = ({navigation}: IRegisterScreenProps) => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default Register;
