import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowLeft } from 'lucide-react';
import { motorcycles } from '@/data/motorcycles';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import RequestModal from '@/components/RequestModal';

const MotorcycleDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const motorcycle = motorcycles.find((m) => m.id === id);

  if (!motorcycle) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Мотоцикл не найден</h1>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-8">
        <Link to="/catalog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('catalog')}
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
              <img
                src={motorcycle.image}
                alt={motorcycle.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{motorcycle.name}</h1>
              <p className="text-xl text-muted-foreground">{motorcycle.brand}</p>
              <div className="mt-4 flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-primary">
                  ${motorcycle.price.toLocaleString()}
                </span>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">{t('characteristics')}</h2>
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('engine')}:</span>
                    <span className="font-semibold">{motorcycle.specs.engine}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('power')}:</span>
                    <span className="font-semibold">{motorcycle.specs.power}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('maxSpeed')}:</span>
                    <span className="font-semibold">{motorcycle.specs.maxSpeed}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('weight')}:</span>
                    <span className="font-semibold">{motorcycle.specs.weight}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('fuelCapacity')}:</span>
                    <span className="font-semibold">{motorcycle.specs.fuelCapacity}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('year')}:</span>
                    <span className="font-semibold">{motorcycle.year}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">{motorcycle.description}</p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1" asChild>
                <a href="tel:+998901234567" className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>{t('call')}</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={() => setIsModalOpen(true)}
              >
                {t('leaveRequest')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        motorcycleName={motorcycle.name}
      />
    </div>
  );
};

export default MotorcycleDetail;
