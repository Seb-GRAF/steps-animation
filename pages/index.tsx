import type { NextPage } from 'next'
import { useState } from 'react'
import Step from '../components/Step'

const Home: NextPage = () => {
  const [step, setStep] = useState<number>(1)
  return (
    <div className='flex min-h-screen bg-slate-800 justify-center items-center p-4'>
      <div className='mx-auto w-full max-w-md rounded-2xl bg-white'>
        <div className='flex justify-between rounded p-8'>
          <Step step={1} currentStep={step} setStep={setStep} />
          <Step step={2} currentStep={step} setStep={setStep} />
          <Step step={3} currentStep={step} setStep={setStep} />
          <Step step={4} currentStep={step} setStep={setStep} />
        </div>
        <div className='px-8 pb-8'>
          <div>
            <div className='mt-2 h-6 w-40 rounded bg-slate-100' />
            <div className='mt-4 space-y-2'>
              <div className='h-4 w-5/6 rounded bg-slate-100' />
              <div className='h-4 rounded bg-slate-100' />
              <div className='h-4 w-4/6 rounded bg-slate-100' />
            </div>
          </div>

          <div className='mt-10 flex justify-between'>
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className={`${
                step === 1 ? 'invisible' : ''
              } rounded px-2 py-1 text-slate-400 hover:text-slate-700 select-none`}>
              Back
            </button>
            <button
              onClick={() => setStep(step > 4 ? step : step + 1)}
              className={`${
                step > 4 ? 'pointer-events-none opacity-50' : ''
              } bg flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 py-1.5 px-3 text-white select-none`}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
