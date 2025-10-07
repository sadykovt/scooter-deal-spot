export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: 'motorcycle' | 'scooter';
  type: 'sport' | 'cruiser' | 'urban' | 'touring';
  year: number;
  image: string;
  specs: {
    engine: string;
    power: string;
    maxSpeed: string;
    weight: string;
    fuelCapacity: string;
  };
  description: string;
}
