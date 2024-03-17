import '../App.css'
import PropTypes from 'prop-types'

export default function LoadingComp({ loading }) {
  return (
    <div className='test-comp'>{`Loading: ${loading?.status}`}</div>
  )
}

LoadingComp.propTypes = {
  loading: PropTypes.Object
}
