import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';
import Navbar from '../Navbar/Navbar';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Redirect to login page if user is not authenticated
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`flex flex-row h-full ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="w-1/6">
                <SideBar />
            </div>
            <div className="flex flex-col w-full">
                <Navbar toggleTheme={toggleTheme} theme={theme}/>
                <div className="flex-grow p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Root;
