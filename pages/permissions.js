import PleaseSignin from '../components/PleaseSignin'
import Permissions from '../components/Permissions'

const PermissionsPage = () => (
  <div className="pri-pad">
    <div className="container">
      <PleaseSignin>
        <Permissions />
      </PleaseSignin>
    </div>
  </div>
)

export default PermissionsPage
