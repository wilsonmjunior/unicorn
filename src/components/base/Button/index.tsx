import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {useStyles} from '../../../config/unistyles';

import {stylesheet} from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: 'base' | 'outline';
};

export function Button({
  title,
  style,
  variant = 'base',
  ...othersProps
}: ButtonProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <TouchableOpacity
      style={[styles.containerButton, theme.components.button[variant], style]}
      {...othersProps}>
      <Text style={[styles.textButton, theme.components.buttonText[variant]]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
