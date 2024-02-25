import {Link} from 'react-router-dom';
import useTheme from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames';
import {AppRouter} from 'app/providers/router';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О нас</Link>
            <AppRouter/>
        </div>
    );
};

export default App;