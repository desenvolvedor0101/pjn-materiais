import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Contato', path: '/contato' }
  ];

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-background/70 backdrop-blur-md border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(71) 98687-3417</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contato@pjnmateriais.com.br</span>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex justify-between items-center py-4">
          
          <Link to="/" className="flex items-center space-x-1 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-14 px-1 rounded-lg flex items-center justify-center">
              <img src="/src/assets/logopjn2.png" alt="PJN Materiais Logo" className="hidden md:block w-16 p-1 rounded-lg" />
            </div>
            <div>
              <img src="/src/assets/logopjnname.png" alt="PJN Materiais Logo" className="w-24 md:w-24" />
            </div>
            
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActivePage(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to={'https://wa.me/5571986873417?text=Ol%C3%A1!%20Desejo%20solicitar%20um%20or%C3%A7amento%20e%20tirar%20d%C3%BAvidas!'} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 transition-colors hover:text-primary ${
                    isActivePage(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="btn-primary w-fit mt-4">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;