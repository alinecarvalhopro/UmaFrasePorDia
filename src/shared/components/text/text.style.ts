import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  custonMargin?: string;
  fontSize: string;
  fontFamily:
    | 'Poppins-Bold'
    | 'Poppins-Ligth'
    | 'Poppins-Regular'
    | 'Poppins-SemiBold';
  customTextAlign?: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${props => (props.color ? `color: ${props.color};` : '')}
  ${props => (props.custonMargin ? `margin: ${props.custonMargin};` : '')}
  ${props => (props.customTextAlign ? `textAlign: ${props.customTextAlign};` : '')};

  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`;
