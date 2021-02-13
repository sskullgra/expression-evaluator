import React from "react"

const Button = ({ children, className, ...root }) => {
  return (
    <button
      className={`h-16 rounded inline-flex items-center px-4 py-2 justify-center text-lg ${className}`}
      {...root}
    >
      {children}
    </button>
  )
}

export default Button
