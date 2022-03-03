import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGetStarWarsPeopleQuery } from './services/starWarsApiSlice'
import Loader from './components/Loader'
import { savePeople } from './services/starWarsPeopleSlice'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import CardPage from './components/CardPage'
import NotFoundPage from './components/NotFoundPage'
import { saveTheme } from './services/themeSlice'

function App() {
  const count = useSelector((state) => state.page.value)
  const theme = useSelector((state) => state.theme.value)

  const dispatch = useDispatch()

  const { data: starWarsPeopleList, isFetching } =
    useGetStarWarsPeopleQuery(count)

  useEffect(() => {
    dispatch(savePeople(starWarsPeopleList))
  }, [starWarsPeopleList, dispatch])

  // Them

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      dispatch(saveTheme('dark'))
    } else {
      document.documentElement.classList.remove('dark')
      dispatch(saveTheme('light'))
    }
  }, [theme, dispatch])

  if (isFetching) return <Loader />

  return (
    <div
      className='font-comf bg-[#F5F9FE] dark:bg-gray-800 min-h-screen w-full'
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/:id' element={<CardPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
