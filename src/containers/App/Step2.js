import React, { useMemo, useState } from "react"
import Button from "../../components/Button"
import LabeledInput from "../../components/LabeledInput"
import LabeledSelect from "../../components/LabeledSelect"

const OperandFn = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}

const Step2 = ({ operands, operators, onAddOperation }) => {
  const [operator, setOperator] = useState("+")
  const [operand, setOperand] = useState("")

  const ans = useMemo(() => {
    let buff = operands[0]
    for (let i = 1; i < operands.length; i++) {
      buff = OperandFn[operators[i - 1]](buff, operands[i])
    }

    return buff
  }, [operands, operators])

  const handleAddOperation = (e) => {
    e.preventDefault()
    const n = parseInt(operand) // can be changed to float
    if (!Number.isNaN(n)) {
      onAddOperation(e, operator, n)
    }
  }

  return (
    <div className="h-screen items-center flex flex-col">
      <div className="flex flex-wrap gap-2 justify-center mt-28">
        {operands.map((e, i) => (
          <div
            key={i}
            className="inline-flex items-center px-4 justify-center h-16 bg-gray-100 text-gray-900 rounded min-w-16 text-lg"
          >
            {e}
          </div>
        ))}
        {operators.map((e, i) => (
          <div
            key={i}
            className="inline-flex items-center px-4 justify-center h-16 bg-gray-100 text-gray-900 rounded min-w-16 text-lg"
          >
            {e}
          </div>
        ))}
      </div>
      <div className="text-gray-600 font-thin text-7xl">=</div>
      <div className="text-8xl font-thin text-green-300">{ans}</div>
      <div></div>
      <form
        className="fixed bottom-0 left-0 right-0 grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 sm:w-10/12 mx-auto"
        onSubmit={handleAddOperation}
      >
        <LabeledSelect
          id="sel_operator"
          label="Operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          {Object.keys(OperandFn).map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </LabeledSelect>
        <LabeledInput
          id="txt_operand"
          label="Operand"
          value={operand}
          onChange={(e) => setOperand(e.target.value)}
        />
        <Button
          type="submit"
          className="w-full bg-green-300 text-white col-span-2 sm:col-span-1"
        >
          Add operation
        </Button>
      </form>
    </div>
  )
}

export default Step2
