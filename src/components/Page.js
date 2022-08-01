import { TiDelete } from 'react-icons/ti'
import PropTypes from 'prop-types'

const Page = ({ title }) => {
  
  const change = (e) => {
    console.log(e)
    
  }

  return (
    <div className="page flex" onClick={change}>
        <h2 className='pageTitle'>{title}</h2>
        <span><TiDelete className="deletePage"/></span>
    </div>
  )
}

Page.defaultProps = {
    title: "Untitled"
}

Page.propTypes = {
    title: PropTypes.string.isRequired
}

export default Page