import { connect } from 'react-redux';
import {
  appLoading,
  appLoaded
} from './actions';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatchLoadingApp()
  }

  componentDidMount() {
    this.props.dispatchLoadedApp()
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    dispatchLoadingApp: () => (
      dispatch(appLoading())
    ),
    dispatchLoadedApp: () => {
      dispatch(appLoaded())
    }
  }
)


export default connect(null, mapDispatchToProps)(App)
