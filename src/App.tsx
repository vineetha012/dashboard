import React, { Suspense } from 'react';
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
// import 'antd/dist/antd.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';
const Dashboard = React.lazy(() => import('./pages/dashboard/index'))
const WelcomeScreen = React.lazy(() => import('./pages/welcomeScreen/welcomescreen'))
const LayOut = React.lazy(() => import('./layouts/index'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path='*' element={<>not found</>} />
          <Route path='/' element={<WelcomeScreen />} />
          <Route element={<LayOut />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
