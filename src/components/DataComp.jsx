import '../App.css'
import PropTypes from 'prop-types'

export default function DataComp({ data }) {
  return (
    <div className='test-comp'>{`Data: ${data?.status}`}</div>
  )
}

DataComp.propTypes = {
  data: PropTypes.Object
}
