import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../services/paginationSlice'

const Pagination = () => {
  const starWarsPeople = useSelector((state) => state.starWarsPeople.value)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (starWarsPeople?.next) {
      setIsDisabledNext(true)
    }
    if (starWarsPeople?.previous) {
      setIsDisabledPrev(true)
    }
  }, [starWarsPeople])

  const handleNextPage = () => {
    dispatch(increment())
  }

  const handlePrevPage = () => {
    dispatch(decrement())
  }

  return (
    <div className='flex items-center space-x-1'>
      <button
        disabled={!isDisabledPrev}
        onClick={handlePrevPage}
        className='flex items-center px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white'
      >
        Previous
      </button>

      <button
        disabled={!isDisabledNext}
        onClick={handleNextPage}
        className='flex items-center px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white'
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
