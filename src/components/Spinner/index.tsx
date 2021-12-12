import { x } from '@xstyled/styled-components'
import Loader from 'react-loader-spinner'

const Spinner = () => {
  return (
    <x.div display="flex" flex="1" justifyContent="center" alignItems="center">
      <Loader type="TailSpin" color="#2563eb" height={100} width={100} />
    </x.div>
  )
}

export default Spinner
