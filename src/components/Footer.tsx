import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold">MotoShop</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('language') === 'ru' 
                ? 'Продажа мотоциклов и скутеров. Широкий выбор моделей по лучшим ценам'
                : 'Mototsikl va skuterlar sotish. Eng yaxshi narxlarda modellarning keng tanlovi'
              }
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('language') === 'ru' ? 'Навигация' : 'Navigatsiya'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('catalog')}
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('language') === 'ru' ? 'Контакты' : 'Kontaktlar'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('language') === 'ru' ? 'Контакты' : 'Kontaktlar'}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <a href="tel:+998901234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a href="mailto:info@motoshop.uz" className="text-muted-foreground hover:text-primary transition-colors">
                  info@motoshop.uz
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  {t('language') === 'ru' ? 'Ташкент, Узбекистан' : 'Toshkent, O\'zbekiston'}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('language') === 'ru' ? 'Мы в соцсетях' : 'Ijtimoiy tarmoqlar'}</h3>
            <div className="flex space-x-4">
              <a
                href="https://t.me/motoshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTelegram className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/motoshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/motoshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MotoShop. {t('language') === 'ru' ? 'Все права защищены' : 'Barcha huquqlar himoyalangan'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
