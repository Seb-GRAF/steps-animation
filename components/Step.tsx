import { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import CheckIcon from './CheckIcon'

interface Props {
  step: number
  setStep: (value: number) => void
  currentStep: number
}

const Step = ({ step, setStep, currentStep }: Props): JSX.Element => {
  let status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete'

  return (
    <motion.div
      className={`${
        status === 'complete' ? 'cursor-pointer' : ''
      } relative select-none`}
      animate={status}
      onClick={() => {
        if (step < currentStep) setStep(step)
      }}>
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.25,
            transition: {
              duration: 0.6,
              delay: 0.1,
              type: 'tween',
              ease: 'circOut',
            },
          },
        }}
        className='absolute inset-0 bg-blue-200 rounded-full'></motion.div>
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: '#fff',
            borderColor: '#e2e8f0',
            color: '#94a3b8',
          },
          active: {
            backgroundColor: '#fff',
            borderColor: '#3b82f6',
            color: '#3b82f6',
          },
          complete: {
            backgroundColor: '#3b82f6',
            borderColor: '#3b82f6',
            color: '#3b82f6',
          },
        }}
        transition={{ duration: 0.2 }}
        className='relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold'>
        <div className='flex items-center justify-center'>
          {status === 'complete' ? (
            <CheckIcon className='h-6 w-6 text-white' />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
export default Step
