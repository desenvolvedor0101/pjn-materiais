import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import heroImage from '/construcao.webp';
import ProfileCard from "./ProfileCard";
import DashboardCard from "./DashboardCard";
import StatsCard from "./StatsCard";
import SearchCard from "./SearchCard";
import SitePhotoCard from "./SitePhotoCard";
import TagChips from "./TagChips";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <section className="min-h-[70%] grid-bg bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-50">
        <svg viewBox="0 0 1200 150" className="w-full h-full">
          <path
            d="M0,100 Q200,50 400,80 T800,60 Q1000,40 1200,70 L1200,150 L0,150 Z"
            fill="none"
            stroke="hsl(var(--brand-orange))"
            strokeWidth="1"
            className="animate-pulse"
          />
          <path
            d="M0,120 Q300,70 600,90 T1200,85 L1200,150 L0,150 Z"
            fill="none"
            stroke="hsl(var(--construction-yellow))"
            strokeWidth="0.5"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                <span className="gradient-text">PJN Materiais</span> Qualidade para sua Construção
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Fornecedor confiável com experiência sólida na venda de materiais de construção. Agregados, areias
                e materiais especializados com qualidade, eficácia e atendimento especializado. Atendemos obras de todos os portes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"https://wa.me/5571986873417?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20materiais%20de%20constru%C3%A7%C3%A3o."} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="group">
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
              </Link>

              <Link to="/produtos"> 
              <Button variant="hero-ghost" size="lg" className="group">
                Ver Produtos <ShoppingBag className="w-5 h-5" />
              </Button>
              </Link> 
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Materiais de construção PJN"
                className="w-full h-[600px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              
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
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

          {/* Right Column - Floating UI Elements 
          <div className="relative h-[600px] lg:h-[700px]">
            
            <div className="absolute top-0 right-0 z-50">
              <ProfileCard />
            </div>

            <div className="absolute top-32 right-8 z-40">
              <DashboardCard />
            </div>

            <div className="absolute top-48 left-12 z-30">
              <StatsCard />
            </div>

            <div className="absolute top-[420px] right-16 z-35">
              <SearchCard />
            </div>

            <div className="absolute bottom-16 right-0 z-40">
              <SitePhotoCard />
            </div>

            <div className="absolute top-40 right-[-40px] z-20 opacity-60">
              <TagChips />
            </div>

            <div className="absolute top-20 left-0 w-32 h-32 bg-construction-yellow/5 rounded-full blur-3xl animate-pulse-glow"></div>
            <div
              className="absolute bottom-20 right-20 w-40 h-40 bg-construction-orange/5 rounded-full blur-3xl animate-pulse-glow"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </div>*/}

    </section>
  );
};

export default Hero2;
