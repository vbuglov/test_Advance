import React from 'react'
import { InputError } from './styles/index'
import { FalFaExclamationTriangle } from './icons'
import T from 'prop-types'

const ErrorDescriptionWrapper = ({ error }) => {
  if (!error) return null
  return (
    <InputError>
      <FalFaExclamationTriangle
        style={{ height: 12, fill: 'red', marginRight: 4 }}
      />
      <span style={{ color: 'gray', fontSize: 12 }}>{error}</span>
    </InputError>
  )
}

ErrorDescriptionWrapper.propTypes = {
  error: T.string,
}

ErrorDescriptionWrapper.defaultProps = {
  error: '',
}

export default ErrorDescriptionWrapper
