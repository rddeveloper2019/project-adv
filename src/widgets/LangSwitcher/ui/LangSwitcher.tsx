import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
