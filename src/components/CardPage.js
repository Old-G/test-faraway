import { Link, useParams } from 'react-router-dom'
import { useGetStarWarsCurrentPeopleQuery } from '../services/starWarsApiSlice'
import Loader from './Loader'

const CardPage = () => {
  const { id } = useParams()
  const { data, isFetching } = useGetStarWarsCurrentPeopleQuery(id)

  if (!data || isFetching) return <Loader />

  return (
    <div className='p-6'>
      <Link to='/home'>
        <div className='mb-6 text-gray-700 dark:text-slate-100 font-bold'>
          Back
        </div>
      </Link>
      <div className='flex justify-center'>
        <div className='bg-slate-200 dark:bg-slate-100 p-6 rounded-[30px] space-y-2 text-gray-700 font-bold w-80 '>
          <div className='text-indigo-500 truncate overflow-hidden text-center'>
            {data?.name}
          </div>
          <div>
            Gender:{' '}
            <span className='text-gray-400'>
              {data?.gender === 'n/a' ? 'robot' : data?.gender}
            </span>
          </div>
          <div>
            Bday: <span className='text-gray-400'>{data?.birth_year}</span>
          </div>
          <div>
            Eye color: <span className='text-gray-400'>{data?.eye_color}</span>
          </div>
          <div>
            Hair color:{' '}
            <span className='text-gray-400'>
              {data?.hair_color === 'n/a' ? 'ha-ha!)' : data?.hair_color}
            </span>
          </div>
          <div>
            Height: <span className='text-gray-400'>{data?.height}</span>
          </div>
          <div>
            Mass: <span className='text-gray-400'>{data?.mass}</span>
          </div>
          <div>
            Skin color:{' '}
            <span className='text-gray-400'>{data?.skin_color}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPage
