import styled from 'styled-components/native';
import {theme} from '../theme/theme';

export const ContainerRegister = styled.SafeAreaView`
  width: 100%;
  height: 100%;

  padding: 16px;

  background-color: ${theme.colors.mainTheme.primary};

  justify-content: center;
  align-items: center;
`;

export const ImageRegister = styled.Image`
  width: 200px;
  height: 200px;

  margin-bottom: 20px;
`;
