import { useEffect, useState } from "react"
import { SalaryData, HourlyData } from "./data/SalaryData"

function Slider() {
  const [slideValue, setSlideValue] = useState({ value: 0 })
  const [maxValue, setMaxValue] = useState(SalaryData.length)
  const [payType, setPayType] = useState('Yes')
  const [salary, setSalary] = useState(0)

  function handleSalaryChange(e) {
    setSlideValue({ value: e.target.value })
    setSalary(SalaryData[slideValue.value])
  }

  function changeUp(e) {
    setPayType(e.target.value);
    setMaxValue(SalaryData.length)

  
  }

  useEffect(() => {
    if(payType === 'Yes') {
      console.log(SalaryData.length)
    } else {
      console.log(HourlyData.length)
    }
    document.title = `current slide value: ${slideValue.value}`;
  });

  return (
    <div>
        {
          payType === 'Yes'
          ? <div>
              <h2>Salary: ${salary}</h2>
              <label>Slider</label>
              <input type='range' min='0' max={maxValue} step='1' value={slideValue.value} onChange={handleSalaryChange} />
            </div>
          : <div>
              <h2>Pay Per Hour</h2>
            </div>
        }
    </div>
  )
}

export default Slider