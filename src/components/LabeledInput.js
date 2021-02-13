import React from "react"

const LabeledInput = ({ label, value, onChange, autoFocus }) => {
  return (
    <div className="border-2 border-solid rounded px-4 py-2 inline-flex flex-col w-full">
      <label className="text-gray-500 font-light">{label}</label>
      <input
        className="outline-none"
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default LabeledInput
