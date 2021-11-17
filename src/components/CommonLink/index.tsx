import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import './style.scss'

const PROTOCOL_REP = /^([a-zA-Z]+):\/\/(.+)$/

interface LinkResult {
  type: 'url' | 'wechat' | 'default' | 'scroll'
  target: string
}

function getLinkResult(link: string): LinkResult {
  if (link.startsWith('//')) {
    return {
      type: 'url',
      target: link,
    }
  }
  const match = link.match(PROTOCOL_REP)
  if (match) {
    const [, protocol, target] = match
    if (protocol === 'http' || protocol === 'https') {
      return {
        type: 'url',
        target,
      }
    }
    if (protocol === 'wechat') {
      return {
        type: 'wechat',
        target,
      }
    }
    if (protocol === 'scroll') {
      return {
        type: 'scroll',
        target,
      }
    }
  }
  return {
    type: 'default',
    target: link,
  }
}

interface CommonLinkProps {
  to: string
  className?: string
  wechatContainerClassName?: string
}

const CommonLink: React.FC<CommonLinkProps> = ({
  to,
  children,
  wechatContainerClassName,
  ...rest
}) => {
  const result = useMemo(() => getLinkResult(to), [to])
  const { type, target } = result
  if (type === 'default') {
    return (
      <Link to={target} {...rest}>
        {children}
      </Link>
    )
  }
  if (type === 'wechat') {
    return (
      <div
        className={classnames('common-link-wechat', wechatContainerClassName)}
      >
        <a {...rest}>{children}</a>
        <div className="common-link-wechat-img">
          <img src={target} alt="" />
        </div>
      </div>
    )
  }
  if (type === 'scroll') {
    return <a {...rest}>{children}</a>
  }
  return (
    <a href={target} {...rest}>
      {children}
    </a>
  )
}

export default CommonLink
