import React, { useState } from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"

const App = () => {
  const [operands, setOperands] = useState([])
  const [operators, setOperators] = useState(["+"])

  const handleAddOperand = (e, value) => {
    setOperands((p) => [...p, value])
  }

  const handleAddOperation = (e, operator, operand) => {
    setOperands((p) => [...p, operand])
    setOperators((p) => [...p, operator])
  }

  return (
    <>
      {operands.length < 2 && (
        <Step1 key={operands.length} onAddOperand={handleAddOperand} />
      )}
      {operands.length >= 2 && (
        <Step2
          key={operands.length}
          operands={operands}
          operators={operators}
          onAddOperation={handleAddOperation}
        />
      )}
    </>
  )
}

export default App
