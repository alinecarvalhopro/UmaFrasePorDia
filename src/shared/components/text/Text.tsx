import {TextProps as TextPropsNative} from 'react-native/types';
import {ContainerText} from './text.style';
import {textTypes} from './textTypes';
import {useMemo} from 'react';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({color, type, margin, ...props}: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_LIGTH:
      case textTypes.TITLE_REGULAR:
      case textTypes.TITLE_SEMI_BOLD:
        return '24px';
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.SUB_TITLE_LIGTH:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.SUB_TITLE_SEMI_BOLD:
        return '20px';
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_LIGTH:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_SMALL_SEMI_BOLD:
        return '10px';
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_LIGTH:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_SEMI_BOLD:
      default:
        return '12px';
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_LIGTH:
      case textTypes.BUTTON_REGULAR:
      case textTypes.BUTTON_SEMI_BOLD:
        return '14px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.BUTTON_BOLD:
        return 'Poppins-Bold';
      case textTypes.TITLE_LIGTH:
      case textTypes.SUB_TITLE_LIGTH:
      case textTypes.PARAGRAPH_SMALL_LIGTH:
      case textTypes.PARAGRAPH_LIGTH:
      case textTypes.BUTTON_LIGTH:
        return 'Poppins-Ligth';
      case textTypes.TITLE_REGULAR:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.BUTTON_REGULAR:
        return 'Poppins-SemiBold';
      case textTypes.TITLE_SEMI_BOLD:
      case textTypes.SUB_TITLE_SEMI_BOLD:
      case textTypes.PARAGRAPH_SMALL_SEMI_BOLD:
      case textTypes.PARAGRAPH_SEMI_BOLD:
      case textTypes.BUTTON_SEMI_BOLD:
      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return (
    <ContainerText
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      custonMargin={margin}
      {...props}
    />
  );
};

export default Text;
