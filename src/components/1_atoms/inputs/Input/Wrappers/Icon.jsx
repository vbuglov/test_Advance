import React from 'react'
import { IconContainer } from '../styles/index'

const IconWrapper = (props) => {
  const { icon = null } = props

  if (!icon) return null
  return <IconContainer>{icon}</IconContainer>
}

export default IconWrapper
