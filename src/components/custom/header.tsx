import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Logo from '@/assets/svg/logo.svg';

const Header = () => {
  return (
    <header className="flex shadow-md dark:shadow-primary-foreground/10">
      <div className="flex items-center font-bold gap-4 m-4">
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
    </header>
  );
};

export default Header;
