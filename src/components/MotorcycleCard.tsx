import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Motorcycle } from '@/types/motorcycle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import RequestModal from './RequestModal';

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

const MotorcycleCard = ({ motorcycle }: MotorcycleCardProps) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-glow animate-fade-in">
        <Link to={`/motorcycle/${motorcycle.id}`}>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={motorcycle.image}
              alt={motorcycle.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>

        <CardContent className="p-4">
          <Link to={`/motorcycle/${motorcycle.id}`}>
            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
              {motorcycle.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground mb-2">{motorcycle.brand}</p>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-primary">${motorcycle.price.toLocaleString()}</span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex flex-col gap-2">
          <Button
            variant="default"
            size="sm"
            className="w-full"
            asChild
          >
            <a href="tel:+998901234567">
              <Phone className="h-4 w-4 mr-2" />
              {t('call')}
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => setIsModalOpen(true)}
          >
            {t('leaveRequest')}
          </Button>
        </CardFooter>
      </Card>

      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        motorcycleName={motorcycle.name}
      />
    </>
  );
};

export default MotorcycleCard;
