import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contacts = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success(t('requestSent'), {
      description: t('requestSuccess'),
    });

    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="container px-4 py-12 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">
              {language === 'ru' ? 'Контакты' : 'Kontaktlar'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'ru' 
                ? 'Свяжитесь с нами удобным для вас способом'
                : 'Biz bilan qulay usulda bog\'laning'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>
                  {language === 'ru' ? 'Наши контакты' : 'Bizning kontaktlarimiz'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {language === 'ru' ? 'Телефон' : 'Telefon'}
                    </h3>
                    <a href="tel:+998901234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +998 90 123 45 67
                    </a>
                    <br />
                    <a href="tel:+998901234568" className="text-muted-foreground hover:text-primary transition-colors">
                      +998 90 123 45 68
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@motoshop.uz" className="text-muted-foreground hover:text-primary transition-colors">
                      info@motoshop.uz
                    </a>
                    <br />
                    <a href="mailto:sales@motoshop.uz" className="text-muted-foreground hover:text-primary transition-colors">
                      sales@motoshop.uz
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {language === 'ru' ? 'Адрес' : 'Manzil'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ru' 
                        ? 'г. Ташкент, ул. Амира Темура 123'
                        : 'Toshkent sh., Amir Temur ko\'chasi 123'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {language === 'ru' ? 'Режим работы' : 'Ish vaqti'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ru' ? 'Пн-Сб: 9:00 - 19:00' : 'Dush-Shan: 9:00 - 19:00'}
                    </p>
                    <p className="text-muted-foreground">
                      {language === 'ru' ? 'Вс: 10:00 - 16:00' : 'Yak: 10:00 - 16:00'}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold mb-3">
                    {language === 'ru' ? 'Мы в соцсетях' : 'Ijtimoiy tarmoqlar'}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://t.me/motoshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FaTelegram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/motoshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FaInstagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://facebook.com/motoshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FaFacebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>
                  {language === 'ru' ? 'Напишите нам' : 'Bizga yozing'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('name')}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('phoneNumber')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {language === 'ru' ? 'Сообщение' : 'Xabar'}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    {t('send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in">
            <CardContent className="p-0 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5179722788236!2d69.24384431543871!3d41.311151379270845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
