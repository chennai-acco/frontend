import Reset from '../components/Reset'

const ResetPage = props => (
  <div className="pri-pad">
    <div className="container">
      <Reset resetToken={props.query.resetToken} />
    </div>
  </div>
)

export default ResetPage
