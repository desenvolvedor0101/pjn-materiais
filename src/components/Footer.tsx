import { Instagram, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Nós", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Avaliações", href: "#testimonials" },
    { label: "Contato", href: "#contato" }
  ];

  const services = [
    "Materiais de Construção",
    "Britas & Agregados",
    "Fino de Quartzo & Sílica",
    "Consultoria Especializada"
  ];

  const handleLinkClick = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#353535] text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
                <Link to="/" className="flex items-center space-x-1">
                          <div className="w-32 px-1 flex items-center justify-center">
                            <img src="/src/assets/pjnlogo02.png" alt="PJN Materiais Logo" className="hidden md:block w-32 p-1 rounded-lg" />
                          </div>                          
                </Link>
                <p className="text-background/90 mb-6 leading-relaxed">
                Seu parceiro de confiança para materiais de construção premium.
                Qualidade garantida, entregue no prazo, sempre.
                </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/pjnmateriais" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/5571986873417" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 group"
                >
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-background/90 hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-background/90">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Contato & Horários</h4>

              {/* Business Hours */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-background/90 text-sm">
                      <div>Seg-Sex: 07:00 - 18:00</div>
                      <div>Sábado: 08:00 - 16:00</div>
                      <div>Domingo: Fechado</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <a 
                      href="https://wa.me/5571986873417"
                      className="text-background/90 hover:text-primary transition-colors"
                    >
                      (71) 98687-3417
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <a 
                      href="mailto:contact@yourdomain.com"
                      className="text-background/90 hover:text-primary transition-colors"
                    >
                      contato@pjnmateriais.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div className="text-background/90 text-sm">
                    <div>123 Avenida Pojuca</div>
                    <div>Pindamonhangaba, Pojuca - BA - 12345</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a 
                href="https://wa.me/5571986873417?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20materiais%20de%20constru%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm font-medium"
              >
                <Phone size={16} />
                Nosso Whatsapp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © {currentYear} PJN Materiais. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Politicas de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;