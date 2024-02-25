import useTheme from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;