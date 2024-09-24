import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Logo from '@/assets/svg/logo.svg';
import { Switch } from '@/components/ui/switch';
import { TiWeatherNight, TiWeatherSunny } from 'react-icons/ti';
import { useEffect, useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Sync state with localStorage theme on initial render
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'default';
    setDarkMode(theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  // Toggle theme and update localStorage
  const handleThemeToggle = () => {
    const newTheme = darkMode ? 'default' : 'dark';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);

    // Apply the theme to the <html> element by setting data-theme attribute
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="flex justify-between shadow-md">
      <div className="flex">
        <div className="flex items-center font-bold gap-2 m-4">
          <img src={Logo} alt="logo" width="32" height="32"></img>
          <h1>Questionly</h1>
        </div>
        <NavigationMenu className="flex items-center w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                My Questions
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Ask new Question
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center mr-4">
        <Switch checked={darkMode} onCheckedChange={handleThemeToggle}>
          {darkMode ? <TiWeatherNight size={20} /> : <TiWeatherSunny size={20} />}
        </Switch>
      </div>
    </header>
  );
};

export default Header;
