import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useFetchData from './hooks/useFetchData';

import Home from './components/Home';
import ItemDetailPage from './components/ItemDetailPage';

const App = () => {
  const urlApi = 'http://localhost:3000'
  const {data} = useFetchData(urlApi)

  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Inicio</Link>
        </nav>
        {data === null
          ? (<div>Cargando...</div>) // porque el fecth es ASÍNCRONO
          : <Routes>
            <Route path='/' element={<Home data={data} />} />
            {data.map(item => (
              <Route
                key={item._id}
                path={`/${item._id}`}
                element={<ItemDetailPage item={item} />} />
            ))}
          </Routes>
        }
      </div>
    </Router>
  )
};

export default App;