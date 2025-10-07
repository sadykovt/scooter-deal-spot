import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1920&h=1080&fit=crop)',
          }}
        />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Мотоциклы и Скутеры
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Найдите мотоцикл или скутер своей мечты в нашем каталоге
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="text-lg px-8">
                {t('catalog')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-foreground" asChild>
              <a href="tel:+998901234567" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                {t('call')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">Качество, надежность и лучшие цены</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏍️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Широкий выбор</h3>
              <p className="text-muted-foreground">Более 100 моделей мотоциклов и скутеров</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Все мотоциклы проходят проверку</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Лучшие цены</h3>
              <p className="text-muted-foreground">Конкурентные цены и гибкая система оплаты</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
