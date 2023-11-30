import './index.css';
import {Route, Routes} from 'react-router-dom'

const Home = function() {
  return <h1>Home Page</h1>
}
const Blog = function() {
  return <h1>Blog Page</h1>
}
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
  )
}

export default App;
