import styled from 'styled-components/native';

interface DisplayProps {
  customMargin?: string;
}

export const Display = styled.View <DisplayProps>`
  width: 100%;

  margin: ${(props) => props.customMargin ? props.customMargin : 0};
  
  display: flex;
  flex-direction: column;
`;
