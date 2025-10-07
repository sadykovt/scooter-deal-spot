import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FiltersProps {
  filters: {
    category: string;
    type: string;
    priceRange: [number, number];
    brand: string;
  };
  onFilterChange: (key: string, value: any) => void;
  onReset: () => void;
}

const Filters = ({ filters, onFilterChange, onReset }: FiltersProps) => {
  const { t } = useLanguage();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('filters')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>{t('category')}</Label>
          <Select value={filters.category} onValueChange={(value) => onFilterChange('category', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('all')}</SelectItem>
              <SelectItem value="motorcycle">{t('motorcycles')}</SelectItem>
              <SelectItem value="scooter">{t('scooters')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>{t('brand')}</Label>
          <Select value={filters.brand} onValueChange={(value) => onFilterChange('brand', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('all')}</SelectItem>
              <SelectItem value="Yamaha">Yamaha</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Suzuki">Suzuki</SelectItem>
              <SelectItem value="Kawasaki">Kawasaki</SelectItem>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Ducati">Ducati</SelectItem>
              <SelectItem value="Harley-Davidson">Harley-Davidson</SelectItem>
              <SelectItem value="Vespa">Vespa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>{t('priceRange')}: ${filters.priceRange[0].toLocaleString()} - ${filters.priceRange[1].toLocaleString()}</Label>
          <Slider
            min={0}
            max={30000}
            step={1000}
            value={filters.priceRange}
            onValueChange={(value) => onFilterChange('priceRange', value as [number, number])}
            className="w-full"
          />
        </div>

        <Button onClick={onReset} variant="outline" className="w-full">
          {t('resetFilters')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Filters;
