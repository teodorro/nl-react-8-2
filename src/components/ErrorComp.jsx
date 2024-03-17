import '../App.css'
import PropTypes from 'prop-types'

export default function ErrorComp({ error }) {
  return (
    <div className='test-comp'>{`Error: ${error?.status}`}</div>
  )
}

ErrorComp.propTypes = {
  error: PropTypes.Object
}
