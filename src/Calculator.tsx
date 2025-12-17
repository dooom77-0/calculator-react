import { useState } from 'react'
import Buttons from './Buttons.tsx'
import { evaluate } from 'mathjs';
export default function calculator() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [input, setInput] = useState<string>('')
    
    function handleClick(value: string) {
      setInput((prev) => prev + value);
    }

    const calculate = () => {
        try {
        setInput(evaluate(input).toString());
      } catch {
        setInput('Error');
      }
    }

    const clear = () => {
        setInput('');
    }
    const deleteLast = () => {
        setInput(input.slice(0, -1));
    }
    
  return (
    <div className='App flex flex-col justify-center items-center min-h-screen w-screen px-0 sm:px-4'>
      <div className='flex flex-col text-3xl gap-4 bg-zinc-200 dark:bg-zinc-700 p-8 rounded-xl md:p-10 shadow-2xl'>
        <div className=' text-white bg-zinc-800 shadow-inner rounded-xl p-4 w-full text-right text-3xl'>
          {input || '0'}
        </div>
        <div className='grid grid-cols-4 gap-2 md:max-w-md md:max-h-md md:gap-4 md:grid-cols-4'>
          <Buttons label='AC' onClick={clear} className=' w-full bg-orange-600 hover:bg-orange-700' />
          <Buttons label='C' onClick={deleteLast} className=' w-full bg-red-500 hover:bg-red-600' />
          <Buttons label='/' onClick={() => handleClick('/')} className=' w-full bg-blue-500 hover:bg-blue-600' />
          <Buttons label='x' onClick={() => handleClick('*')} className=' w-full bg-blue-500 hover:bg-blue-600' />

          <Buttons label='7' onClick={() => handleClick('7')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          <Buttons label='8' onClick={() => handleClick('8')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          <Buttons label='9' onClick={() => handleClick('9')} className=' w-full bg-gray-500 hover:bg-gray-600' /> 
          <Buttons label='-' onClick={() => handleClick('-')} className=' w-full bg-blue-500 hover:bg-blue-600' />

          <Buttons label='4' onClick={() => handleClick('4')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          <Buttons label='5' onClick={() => handleClick('5')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          <Buttons label='6' onClick={() => handleClick('6')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          <Buttons label='+' onClick={() => handleClick('+')} className=' w-full bg-blue-500 hover:bg-blue-600' />

          <Buttons label='1' onClick={() => handleClick('1')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          <Buttons label='2' onClick={() => handleClick('2')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          <Buttons label='3' onClick={() => handleClick('3')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          
          <Buttons label='%' onClick={() => handleClick('%')} className=' w-full bg-blue-500 hover:bg-blue-600' />

          <Buttons label='0' onClick={() => handleClick('0')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          
          <Buttons label='00' onClick={() => handleClick('00')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          
          <Buttons label='.' onClick={() => handleClick('.')} className=' w-full bg-gray-500 hover:bg-gray-600' />
          
          <Buttons label='=' onClick={calculate} className=' w-full col-span-2 bg-emerald-500 hover:bg-emerald-600' />
          
      </div>
        
          
        </div>
    </div>
  )
}
