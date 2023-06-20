import React from "react";
import SliderComponent from "./common/SliderComponent";

function SliderSelect({ data, setData }) {
  const bank_limit = 10000;

  const handleChangehomeValue = (e, value) => {
    setData({
      ...data,
      homeValue: value.toFixed(0),
      downPayment: (0.2 * value).toFixed(0),
      loanAmount: (0.8 * value).toFixed(0),
    });
  };
  const handleChangeLoanAmount = (e, value) => {
    setData({
      ...data,
      loanAmount: value.toFixed(0),
      downPayment: (data.homeValue - value).toFixed(0),
    });
  };
  const handleChangeDownPayment = (e, value) => {
    setData({
      ...data,
      downPayment: value.toFixed(0),
      loanAmount: (data.homeValue - value).toFixed(0),
    });
  };

  return (
    <div>
      <SliderComponent
        onChange={handleChangehomeValue}
        defaultValue={+data.homeValue}
        min={1000}
        max={bank_limit}
        step={100}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={+data.homeValue}
      />
      <SliderComponent
        onChange={handleChangeDownPayment}
        defaultValue={data.downPayment}
        min={1000}
        max={bank_limit}
        step={100}
        unit="$"
        amount={data.downPayment}
        label="Loan Amount"
        value={data.downPayment}
      />
      <SliderComponent
        onChange={handleChangeLoanAmount}
        defaultValue={data.loanAmount}
        min={1000}
        max={bank_limit}
        step={100}
        unit="$"
        amount={data.loanAmount}
        label="Loan Amount"
        value={data.loanAmount}
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            interestRate: value,
          });
        }}
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
        unit="%"
      />
    </div>
  );
}

export default SliderSelect;
