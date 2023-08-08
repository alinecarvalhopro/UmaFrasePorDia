import styled from 'styled-components/native';
import {theme} from '../../theme/theme';
import {Icon} from '../icon/Icon';

interface InputContainerProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const InputContainer = styled.TextInput<InputContainerProps>`
  width: 100%;
  height: 48px;

  padding: 16px;
  padding-right: ${props => (props.secureTextEntry ? '52px' : '16px')};

  border-radius: 4px;
  border: 1px solid
    ${props =>
      props.isError
        ? theme.colors.orangeTheme.orange
        : theme.colors.pinkTheme.pink};

  background-color: ${theme.colors.mainTheme.primary};

  color: ${theme.colors.neutralTheme.white};
`;

export const IconEye = styled(Icon)`
  color: ${theme.colors.pinkTheme.pink};
  position: absolute;
  right: 16px;
  top: 12px;
`;
