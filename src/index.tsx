import {render} from 'react-dom';
import App from './App';
import './styles/index.scss'
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const root = document.querySelector('#root')
render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    , root)