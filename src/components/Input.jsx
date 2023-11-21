import { useId } from 'react';

const Input = ({
  label,
  classname = '',
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId(); // useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${classname}`}>
      {/* Additional CSS */}
      <div className='w-1/2'>
        <label
          htmlFor={amountInputId}
          className='text-black/40 mb-2 inline-block'
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type='number'
          className='outline-none w-full bg-transparent py-1.5'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          /* Amount we put in input exist or not (in event value are in form of string so we use Number to change it into a number)*/
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='roounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
