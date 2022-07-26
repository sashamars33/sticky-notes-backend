import { FaMoon } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { FaCog  } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'

const Header = () => {
  return (
    <ul className='flex headingUl'>
        <li><form className='newNoteForm flex'>
            <input type = "text" placeholder = "add a new page... " name = "new-note-input"></input>
            <button type="submit">+</button>
        </form></li>
        <li><FaMoon /></li>
        <li><FaCog /></li>
        <li><FaUserCircle /></li>
    </ul>
  )
}

export default Header