import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Display, Home } from '../pages';

function App() {
  return (
    <Layout>      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/view-images/:id" element={<Display/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
