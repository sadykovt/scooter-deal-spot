import { Phone, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { FaTelegram } from 'react-icons/fa';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">M</span>
            </div>
            <span className="text-xl font-bold">MotoShop</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t('home')}
          </Link>
          <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
            {t('catalog')}
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
            {language === 'ru' ? 'Контакты' : 'Kontaktlar'}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="tel:+998901234567"
            className="hidden lg:flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-6 w-6" />
            <span>+998 90 123 45 67</span>
          </a>

          <a
            href="https://t.me/motoshop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            <FaTelegram className="h-7 w-7" />
          </a>

          <div className="flex items-center space-x-2 border-l border-border pl-4">
            <Button
              variant={language === 'ru' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('ru')}
              className="font-medium"
            >
              RU
            </Button>
            <Button
              variant={language === 'uz' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('uz')}
              className="font-medium"
            >
              UZ
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
