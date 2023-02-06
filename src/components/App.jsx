import Sidebar from './Sidebar/Sidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import Customers from './Customers/Customers';
import NotFound from 'pages/NotFound/NotFound';
import scss from './App.module.scss';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className={scss.container}>
      <Sidebar />

      <Routes>
        <Route path="/" element={<RightSidebar />}>
          <Route path="/dashboard" element={<NotFound />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/products" element={<NotFound />}></Route>
          <Route path="/income" element={<NotFound />}></Route>
          <Route path="/promote" element={<NotFound />}></Route>
          <Route path="/help" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
