import { Outlet } from 'react-router-dom';
import Topbar from '../global/Topbar';
import Sidebar from '../global/Sidebar';
import { AppContainer } from './AppContainer';

export const AppLayout = () => {
    return (
        <>
            <Sidebar/>
            <AppContainer>
                <Topbar/>
                <Outlet/>
            </AppContainer>
        </>
    )
}