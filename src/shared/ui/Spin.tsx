import React from 'react'

interface Props {
  width?: number
}

const Spin: React.FC<Props> = ({width = 20}) => {
  return <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" width={width} />
}

export default Spin
