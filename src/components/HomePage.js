import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardList from './CardList'
import Pagination from './Pagination'
import Toggle from './Toggle'

const HomePage = () => {
  const [people, setPeople] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const starWarsPeople = useSelector((state) => state.starWarsPeople.value)

  useEffect(() => {
    const filteredData = starWarsPeople?.results?.filter((people) =>
      people.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )

    setPeople(filteredData)
  }, [starWarsPeople, searchTerm])

  return (
    <div className='p-6'>
      <div className='font-bold text-2xl text-blue-400 text-center mb-6'>
        👾 Bonjour! This is Star Wars! 🚀
      </div>
      <div className='flex justify-end mb-6'>
        <Toggle />
      </div>
      <div className='flex justify-center mb-6'>
        <input
          className='w-96 bg-gray-200 appearance-none border-2 border-gray-200 rounded-[30px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          placeholder='Search Star Wars People'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='flex flex-col items-center sm:flex-row sm:flex-wrap'>
        <CardList people={people} />
      </div>
      <div className='flex justify-center'>
        <Pagination />
      </div>
    </div>
  )
}

export default HomePage
