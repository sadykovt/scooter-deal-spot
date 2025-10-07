import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    home: 'Главная',
    catalog: 'Каталог',
    phone: 'Телефон',
    call: 'Позвонить',
    leaveRequest: 'Оставить заявку',
    filters: 'Фильтры',
    category: 'Категория',
    all: 'Все',
    motorcycles: 'Мотоциклы',
    scooters: 'Скутеры',
    sport: 'Спортивные',
    cruiser: 'Круизеры',
    priceRange: 'Диапазон цен',
    brand: 'Бренд',
    year: 'Год',
    applyFilters: 'Применить',
    resetFilters: 'Сбросить',
    characteristics: 'Характеристики',
    engine: 'Двигатель',
    power: 'Мощность',
    maxSpeed: 'Макс. скорость',
    weight: 'Вес',
    fuelCapacity: 'Объем бака',
    price: 'Цена',
    name: 'Имя',
    phoneNumber: 'Номер телефона',
    comment: 'Комментарий',
    send: 'Отправить',
    requestSent: 'Заявка отправлена!',
    requestSuccess: 'Мы свяжемся с вами в ближайшее время',
    from: 'от',
    usd: '$',
  },
  uz: {
    home: 'Bosh sahifa',
    catalog: 'Katalog',
    phone: 'Telefon',
    call: "Qo'ng'iroq qilish",
    leaveRequest: 'Ariza qoldirish',
    filters: 'Filtrlar',
    category: 'Kategoriya',
    all: 'Hammasi',
    motorcycles: 'Mototsikllar',
    scooters: 'Skuterlar',
    sport: 'Sport',
    cruiser: 'Kruzer',
    priceRange: 'Narx oralig\'i',
    brand: 'Brend',
    year: 'Yil',
    applyFilters: 'Qo\'llash',
    resetFilters: 'Tozalash',
    characteristics: 'Xususiyatlari',
    engine: 'Dvigatel',
    power: 'Quvvat',
    maxSpeed: 'Maks. tezlik',
    weight: 'Og\'irlik',
    fuelCapacity: 'Bak hajmi',
    price: 'Narx',
    name: 'Ism',
    phoneNumber: 'Telefon raqami',
    comment: 'Izoh',
    send: 'Yuborish',
    requestSent: 'Ariza yuborildi!',
    requestSuccess: 'Biz tez orada siz bilan bog\'lanamiz',
    from: 'dan',
    usd: '$',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
