import Counter from './components/Counter';
import {Link, Route, Routes} from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import {Suspense, useContext, useState} from 'react';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {Theme, ThemeContext} from './theme/ThemeContext';
import useTheme from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            {/*<Counter/>*/}
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;