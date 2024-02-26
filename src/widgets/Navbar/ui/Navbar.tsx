import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('navbar');
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={classNames(cls.links)}>
                <AppLink to="/" className={classNames(cls.mainLink)} theme={AppLinkTheme.SECONDARY}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
            </div>
        </div>
    );
};
