import {classNames} from 'shared/lib/classNames';
import cls from './Navbar.module.scss'
import {FC} from 'react';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={classNames(cls.links)}>
                <AppLink to={'/'} className={classNames(cls.mainLink)} theme={AppLinkTheme.SECONDARY}>
                    Главная страница
                </AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
            </div>
        </div>)
}