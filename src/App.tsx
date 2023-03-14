import  { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import './assets/styles/reset.css'
const About = lazy(() => import('./routes/About'));
const Calc = lazy(() => import('./routes/Calc'));
function App() {
  return (
    <div>
      
    <Router>
    <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={ <About /> }>
        </Route>
        <Route path='/start' element={ <Calc /> }>
        </Route>
      </Routes>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
