"use client"
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
    const {theme, setTheme, systemTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme
    return (
        <div>
            {
                currentTheme === 'dark' ? <MdLightMode /> : <MdDarkMode />
            }
        </div>
    );
}

export default DarkModeSwitch;