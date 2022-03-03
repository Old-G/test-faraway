import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center pt-32 text-blue-400 font-bold'>
      <Link to='/home'>
        <div className='mb-6 text-gray-700 dark:text-slate-100 font-bold'>
          Back
        </div>
      </Link>
      NotFoundPage
    </div>
  )
}

export default NotFoundPage
