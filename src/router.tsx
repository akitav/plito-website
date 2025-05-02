import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Inquiries } from './Inqueries';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/inquiries' element={<Inquiries />} />
      </Routes>
    </BrowserRouter>
  );
};
