import {Icon} from '@ui-kitten/components';
import React, {useEffect, useRef} from 'react';
import {formatArray} from 'src/lib/arrayObject';
import {
  COLOR_ERROR,
  COLOR_GRAY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
  COLOR_TRANSPARENT,
  COLOR_WARNING,
  COLOR_WHITE,
} from 'src/theme/styles/colorStyles';
import {dimensionStyles} from 'src/theme/styles/dimensionStyles';

export const DEFAULT_ICON_NAME = 'list';

export default function UKIcon({
  name = 'bell',
  style = [],
  color = '',
  fill = '',
  size = 'medium',
  animation = '',
  ...props
}) {
  const iconRef = useRef();

  const sizeStyles =
    size === 'medium'
      ? [dimensionStyles.h32, dimensionStyles.w32]
      : size === 'small'
      ? [dimensionStyles.h20, dimensionStyles.w20]
      : [];

  useEffect(() => {
    if (animation) {
      iconRef.current.startAnimation();
    }
  }, [animation]);

  return (
    <Icon
      ref={iconRef}
      style={[...sizeStyles, ...formatArray(style)]}
      name={name}
      animation={animation}
      fill={
        color === 'transparent'
          ? COLOR_TRANSPARENT
          : color === 'primary'
          ? COLOR_PRIMARY
          : color === 'secondary'
          ? COLOR_SECONDARY
          : color === 'success'
          ? COLOR_SUCCESS
          : color === 'warning'
          ? COLOR_WARNING
          : color === 'danger'
          ? COLOR_ERROR
          : color === 'white'
          ? COLOR_WHITE
          : color === 'basic'
          ? COLOR_GRAY
          : fill
      }
      {...props}
    />
  );
}
