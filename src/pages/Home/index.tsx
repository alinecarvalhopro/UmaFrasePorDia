import {View} from 'react-native';
import Text from '../../shared/components/text/Text';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Home = ({navigation}: IHomeScreenProps) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
