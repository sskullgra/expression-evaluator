import React from "react"

const LabeledSelect = ({ label, value, onChange, autoFocus, children }) => {
  return (
    <div className="border-2 border-solid rounded px-4 py-2 inline-flex flex-col w-full">
      <label className="text-gray-500 font-light">{label}</label>
      <select
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
