import CreateProperty from '../components/CreateProperty'
import User from '../components/User'

const Sell = () => (
  <div className="pri-pad">
    <div className="container">
      <h3 className="mb-30">Submit Property</h3>

      <User>
        {({ data: { me } }) => {
          if (me) return <CreateProperty id={me.id} />
          return <span>Login first!</span>
        }}
      </User>
    </div>
  </div>
)

export default Sell
