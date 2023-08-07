import styled from 'styled-components/native';
import {theme} from '../../theme/theme';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;

  ${props => (props.margin ? `margin: ${props.margin};` : '')}

  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.pinkTheme.pink};
`;

export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
  background-color: ${theme.colors.greenTheme.green};
`;

export const ActivityIndicatorButton = styled.ActivityIndicator`
  margin-left: 8px;
`;
