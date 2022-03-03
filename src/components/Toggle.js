import { useDispatch, useSelector } from 'react-redux'
import { saveTheme } from '../services/themeSlice'

const Toggle = () => {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark')
      dispatch(saveTheme('dark'))
    } else {
      localStorage.setItem('theme', 'light')
      dispatch(saveTheme('light'))
    }
  }

  return (
    <>
      <label
        htmlFor='toggle-example'
        className='flex items-center cursor-pointer relative mb-4'
      >
        <input
          type='checkbox'
          id='toggle-example'
          className='sr-only'
          onChange={handleChange}
          checked={localStorage.theme === 'dark' ? true : false}
        />
        <div className='toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full' />
        <div className='ml-2 text-gray-900 dark:text-gray-400 text-sm font-medium mt-1'>
          {theme === 'dark' ? '🌛' : '☀️'}
        </div>
      </label>
    </>
  )
}

export default Toggle
