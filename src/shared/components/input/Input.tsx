import {TextInputProps, View} from 'react-native';
import {IconEye, InputContainer} from './input.style';
import {Display} from '../globalStyles/globalView.style';
import Text from '../text/Text';
import {textTypes} from '../text/textTypes';
import {theme} from '../../theme/theme';
import {useState} from 'react';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({
  title,
  errorMessage,
  secureTextEntry,
  margin,
  ...props
}: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(
    !!secureTextEntry,
  );

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  return (
    <Display customMargin={margin}>
      {title && (
        <Text
          margin="0 0 4px 0"
          type={textTypes.PARAGRAPH_SEMI_BOLD}
          color={theme.colors.pinkTheme.pink}>
          {title}
        </Text>
      )}
      <View>
        <InputContainer
          placeholderTextColor={`${theme.colors.neutralTheme.white}`}
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecure}
          isError={!!errorMessage}
          {...props}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={20}
          />
        )}
      </View>
      {errorMessage && (
        <Text
          margin="2px 0 0 0"
          type={textTypes.PARAGRAPH_SEMI_BOLD}
          color={theme.colors.orangeTheme.orange}>
          {errorMessage}
        </Text>
      )}
    </Display>
  );
};

export default Input;
