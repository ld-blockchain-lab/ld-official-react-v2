import React from 'react'
import styled from 'styled-components'

const CommonInputContainer = styled.input`
  padding: 4px 8px;
  border: #000 solid 2px;
  background-color: #fff;
  color: #000;
  outline: none;

  &:hover {
    box-shadow: 0 0 0 2px var(--primary-color-p25);
  }
  &:focus {
    box-shadow: 0 0 0 3px var(--primary-color-p25);
  }
`

interface CommonInputProps {
  id?: string
  className?: string
  isLoading?: boolean
  type?: 'text' | 'password'
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disbaled?: boolean
}

const CommonInput: React.FC<CommonInputProps> = ({
  children,
  id,
  className,
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <CommonInputContainer
      id={id}
      className={className}
      value={value}
      onChange={onChange}
      type={type}
    >
      {children}
    </CommonInputContainer>
  )
}

export default CommonInput
