import CreateProperty from '../components/CreateProperty'
import PleaseSignin from '../components/PleaseSignin'

const Sell = () => (
  <div className="pri-pad">
    <div className="container">
      <PleaseSignin>
        <h3 className="mb-30">Submit Property</h3>

        <CreateProperty />
      </PleaseSignin>
    </div>
  </div>
)

export default Sell
