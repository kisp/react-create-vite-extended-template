import {clsx} from 'clsx'
const title = 'Hello React'
const classes = clsx('mb-5 bg-blue-500 py-5 text-center text-5xl')
function App() {
  return <h1 className={classes}>{title}</h1>
}
export default App
