import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import EditPost from './components/EditPost';
import { Route, Routes } from 'react-router-dom';
 import { DataProvider } from './context/DataContext';


function App() {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/post' element={<NewPost />}></Route>
          <Route path='/edit/:id' element={<EditPost />}></Route>
          <Route path='/post/:id' element={<PostPage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/*' element={<Missing />}></Route>
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;

//08:10:32  
 