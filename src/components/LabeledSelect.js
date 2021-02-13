import React from "react"

const LabeledSelect = ({ label, value, id, onChange, autoFocus, children }) => {
  return (
    <div className="border-2 border-solid rounded px-4 py-2 inline-flex flex-col w-full">
      <label htmlFor={id} className="text-gray-500 font-light">
        {label}
      </label>
      <select
        id={id}
        className="outline-none"
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  )
}

export default LabeledSelect
