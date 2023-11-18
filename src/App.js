import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/articles' element={<ArticleList />}/>
          <Route path='/article' element={<Article />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
