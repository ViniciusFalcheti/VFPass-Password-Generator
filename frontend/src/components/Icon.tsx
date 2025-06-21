import { Copy, RotateCcw } from 'lucide-react'
import './FormSection.css'
import type { ButtonHTMLAttributes } from 'react';

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: 'copy' | 'generate';
}

export function Icon({ iconType, ...rest }: IconProps) {
    const IconComponent = iconType === "copy" ? Copy : RotateCcw;

  return (
      <button type="button" className="icon-button" {...rest}>
        <IconComponent color="#0b2a35" size={30} />
      </button>
  )
}