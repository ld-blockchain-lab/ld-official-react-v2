import React from 'react'
import styled from 'styled-components'

const CommonButtonContainer = styled.button`
  padding: 6px 12px;
  border: #000 solid 2px;
  background-color: transparent;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:disabled:hover {
    background-color: transparent;
    color: #000;
  }
  &.large {
    padding: 12px 24px;
    font-size: 18px;
  }
`

interface CommonButtonProps {
  id?: string
  className?: string
  isLoading?: boolean
  type?: 'default' | 'primary' | 'black'
  onClick?: () => void
  disabled?: boolean
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  id,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <CommonButtonContainer
      id={id}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CommonButtonContainer>
  )
}

export default CommonButton
