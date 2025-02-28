import React from 'react'

interface HocButtonProps {
    label: string;
  }

export const HocButton: React.FC<HocButtonProps> = ({label}) => {
  return (
    <button>{label}</button>
  )
}
