import React, { useState } from "react"
import Button from "../../components/Button"
import LabeledInput from "../../components/LabeledInput"

const Step1 = ({ onAddOperand }) => {
  const [number, setNumber] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()
    const n = parseInt(number) // can be changed to float
    if (!Number.isNaN(n)) {
      onAddOperand(e, n)
    }
  }

  return (
    <div>
      <h1 className="font-thin my-14 text-5xl text-center text-green-300">
        Expression Evaluator
      </h1>
      <form
        className="flex flex-col items-center gap-2 p-4 sm:flex-row sm:w-10/12 mx-auto"
        onSubmit={handleAdd}
      >
        <LabeledInput
          label="Please enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          autoFocus
        />
        <Button type="submit" className="w-full bg-green-300 text-white">
          Add number
        </Button>
      </form>
    </div>
  )
}

export default Step1
