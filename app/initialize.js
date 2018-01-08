import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './configureStore';

const RENDER_NODE = document.getElementById('app')
const Initialize = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(<Initialize />, RENDER_NODE)
