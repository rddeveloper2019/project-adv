import {render} from 'react-dom';
import App from './app/App';
import './app/styles/index.scss'
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';

const root = document.querySelector('#root')
render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    , root)