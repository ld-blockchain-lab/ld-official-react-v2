import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

const CommonRadioContainer = styled.div`
  .option {
    margin-bottom: 6px;

    &.selected a::before {
      background-color: #000;
    }

    a {
      cursor: pointer;

      & > * {
        vertical-align: middle;
      }

      &::before {
        content: '';
        display: inline-block;
        height: 12px;
        width: 12px;
        border: #000 solid 1px;
        vertical-align: middle;
        margin-right: 12px;
        box-sizing: border-box;
      }
    }
  }
`

interface CommonRadioOptionProps {
  text: string
  value: string
}

interface CommonRadioProps {
  id?: string
  className?: string
  options: CommonRadioOptionProps[]
  value?: string
  values?: string[]
  onChange: (value: string | string[]) => void
  disbaled?: boolean
  multi: boolean
}

const CommonRadio: React.FC<CommonRadioProps> = ({
  id,
  className,
  value,
  values = [],
  onChange,
  options,
  multi = false,
}) => {
  const handleChange = (value: string): void => {
    if (multi) {
      const i = values.findIndex((v) => v === value)
      if (i > -1) {
        values.splice(i, 1)
      } else {
        values.push(value)
      }
      onChange([...values])
    } else {
      onChange(value)
    }
  }

  return (
    <CommonRadioContainer id={id} className={className}>
      {options.map((option) => (
        <div
          key={option.value}
          className={classnames('option', {
            selected: option.value === value || values.includes(option.value),
          })}
        >
          <a onClick={() => handleChange(option.value)}>
            <span>{option.text}</span>
          </a>
        </div>
      ))}
    </CommonRadioContainer>
  )
}

export default CommonRadio
