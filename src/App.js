import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './scenes/home';
import Start from './scenes/start';
import NotFound from './scenes/global/NotFound';
import Dashboard from './scenes/dashboard';
import { Watch } from './scenes/watch';
import { AppLayout } from './scenes/layout/AppLayout';
import Login from './scenes/auth/Login';
import { AuthLayout } from './scenes/layout/AuthLayout';
import {  useIsAuthenticated } from 'react-auth-kit';
import Register from './scenes/auth/Register';

function App() {
  const PrivateRoute = ({Component}) => {
    const isAuthenticated = useIsAuthenticated();
    const auth = isAuthenticated();
    return auth ? <Component/> : <Navigate to="/auth/login" />;
  };
  return (
    <div className='app w-full h-full'>
      <Routes>
        <Route path='/auth' element={<AuthLayout/>}>
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/auth/register" element={<Register/>}/>
        </Route>
        <Route element={
          <PrivateRoute Component={AppLayout}/>
        }>
          <Route path="/home" element={<Home/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/watch" element={<Watch/>}/>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
