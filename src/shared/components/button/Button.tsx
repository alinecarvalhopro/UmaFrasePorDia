import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {
  ActivityIndicatorButton,
  ButtonContainer,
  ButtonDisabled,
} from './button.style';
import Text from '../text/Text';
import {theme} from '../../theme/theme';
import {textTypes} from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}
const Button = ({
  title,
  type,
  loading,
  disabled,
  margin,
  onPress,
  ...props
}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>
        {title}
      </Text>
      {loading && (
        <ActivityIndicatorButton color={theme.colors.mainTheme.primary} />
      )}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.mainTheme.primary)}
      </ButtonDisabled>
    );
  }
  return (
    <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
      {renderText(theme.colors.mainTheme.primary)}
    </ButtonContainer>
  );
};

export default Button;
