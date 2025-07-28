import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';

import DynamicPage from './pages/DynamicPage';
import DynamicPageList from './pages/DynamicPageList';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/page-list" element={<DynamicPageList />} />
        <Route path="/detail/:id" element={<DynamicPage />} />
      </Routes>
    </Router>
  );
}