import {classNames} from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss'
import {FC} from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button onClick={toggleTheme}
                theme={ThemeButton.CLEAR}
                className={classNames(cls.ThemeSwitcher, {}, [cls.ThemeSwitcher])}>
            {theme == Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>)
}