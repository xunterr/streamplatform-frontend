import { Outlet } from 'react-router-dom';
import { AppContainer } from './AppContainer';

export const AuthLayout = () => {
    return (
        <AppContainer className={"flex justify-center items-center"}>
            <div className='w-1/4'>
                <Outlet/>
            </div>
        </AppContainer>
    )
}