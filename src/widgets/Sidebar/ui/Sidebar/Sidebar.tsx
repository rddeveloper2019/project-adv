import {classNames} from 'shared/lib/classNames';
import cls from './Sidebar.module.scss'
import {FC, useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {Button} from 'shared/ui/Button/Button';
import {LangSwitcher} from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => setCollapsed(!collapsed)
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>

            <Button onClick={onToggle}>toggle2</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>)
}