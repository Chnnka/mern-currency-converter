import React, { useState } from 'react'

export default function HomePage() {

  //states for the form fields
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSource, setAmountInSource] = useState(0);
  const [amountInTarget, setAmountInTarget] = useState(0);

  return (
    <div>
      <h1 className='lg:mx-10 text-5xl text-green-500 font-bold'>Let's see how much is it...</h1>
      <p className='lg:mx-10 py-4 text-gray-300'>Welcome, enter your currency details and date, and check exchange rates.</p>
      <div className='mt-5 flex flex-col items-center justify-center'>
        <section className='w-full lg:w-1/2'>
          <form>

            {/* get date */}
            <div className="mb-4">
              <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date:</label>
              <input type="date" id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@flowbite.com" required />
            </div>

            {/* get source currency */}
            <div className="mb-4">
              <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source:</label>
              <select name={sourceCurrency} id={sourceCurrency} value={sourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                <option value="">Select the source currency</option>
              </select>
            </div>

            {/* get target currency */}
            <div className="mb-4">
              <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target currency:</label>
              <select name={targetCurrency} id={targetCurrency} value={targetCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                <option value="">Select the target currency</option>
              </select>
            </div>

            {/* get amount to converted */}
            <div className="mb-4">
              <label htmlFor={amountInSource} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
              <input type="text" id={amountInSource} name={amountInSource} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder='Enter Amount' required />
            </div>
            <button className='text-white bg-green-900 py-3 px-6 mt-4  hover:bg-green-950 rounded-md'>Get Value</button>


          </form>
        </section>
      </div>
    </div>
  );
}
