import { render } from 'react-dom';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'shared/config/i18n';

const root = document.querySelector('#root');
render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    root,
);
