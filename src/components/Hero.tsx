import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Star } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id='inicio' className="relative flex items-center bg-gradient-to-br from-primary/10 to-accent/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl hero-title leading-tight">
                Materiais de
                <span className="text-primary block">Construção</span>
                de Qualidade
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Fornecedor confiável com experiência sólida na venda de materiais de construção. Agregados, areias 
                e materiais especializados com entrega rápida, com qualidade e atendimento especializado. Atendemos obras de todos os portes. 
              </p>
            </div>

            {/* Trust Indicators
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> Projetos Concluídos
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary group">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/produtos">
                <Button size="lg" variant="outline" className="border-2">
                  Ver Produtos <ShoppingBag className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats 
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Entrega Rápida</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Qualidade Garantida</div>
              </div>
            </div>*/}
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Materiais de construção PJN"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-brand-dark">Atendimento Especializado</h3>
                    <p className="text-sm text-muted-foreground">Consultoria técnica gratuita</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;