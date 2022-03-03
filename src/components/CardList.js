import { Link } from 'react-router-dom'

const CardList = ({ people }) => {
  return (
    <>
      {people?.map((people, index) => (
        <Link to={`/${index + 1}`} key={index}>
          <div className='bg-slate-200 dark:bg-slate-100 px-4 py-4 rounded-[30px] space-y-2 text-gray-700 font-bold mb-6 mr-6 w-56'>
            <div className='text-indigo-500 truncate overflow-hidden'>
              {people?.name}
            </div>
            <div>{people?.gender === 'n/a' ? 'robot' : people?.gender}</div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default CardList
