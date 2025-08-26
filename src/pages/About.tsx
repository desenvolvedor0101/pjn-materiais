import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Heart, 
  Award, 
  Users,
  Shield,
  Truck,
  Clock,
  CheckCircle
} from 'lucide-react';
/*import aboutTeamImage from '@/assets/about-team.jpg';*/

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Qualidade',
      description: 'Materiais certificados que atendem aos mais altos padrões de qualidade da construção civil.'
    },
    {
      icon: Users,
      title: 'Confiança',
      description: 'Relacionamentos duradouros baseados em transparência, honestidade e cumprimento da qualidade do material.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Melhoria contínua em nossos processos para oferecer sempre o melhor atendimento.'
    },
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Dedicação total ao sucesso dos projetos de nossos clientes e parceiros.'
    }
  ];

  const achievements = [
    { number: '2+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Satisfação dos Clientes' },
    { number: '48h', label: 'Prazo de Entrega' }
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              {/*<div className="space-y-4">
                <h1 className="text-4xl md:text-5xl hero-title leading-tight">
                  Sobre a <span className="text-primary">PJN Materiais</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Há mais de uma década fornecendo materiais de construção de alta qualidade 
                  para projetos residenciais, comerciais e industriais em toda a região.
                </p>
              </div>*/}
              <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl hero-title leading-tight text-foreground">
                Sobre a{" "}
                <span className="gradient-text">PJN Materiais</span> <br />
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Há mais de uma década fornecendo materiais de construção de alta qualidade 
                  para projetos residenciais, comerciais e industriais em toda a região.
              </p>
            </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/engenheiro.webp"
                  alt="Mockup PJN Materiais de Construção"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-construction-orange/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-construction-orange/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-title">
                Nossa <span className="gradient-text">História</span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                A PJN Materiais nasceu em 2024 com um objetivo claro: fornecer materiais de 
                construção de alta qualidade com atendimento personalizado e eficiente. 
                Lorem ipsum dolor sit amet. Cum incidunt assumenda non cupiditate rerum et nesciunt porro non autem modi rem dolor nisi ut voluptatem velit. Eos natus adipisci
              </p>
              
              <p className="text-lg leading-relaxed">
                Nossa experiência abrange desde pequenos reparos residenciais até grandes obras 
                comerciais e industriais. Trabalhamos com construtoras, arquitetos, engenheiros 
                e proprietários, sempre com foco na satisfação total do cliente.
              </p>
              
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet. Cum incidunt assumenda non cupiditate rerum et nesciunt porro non autem modi rem dolor nisi ut voluptatem velit. Eos natus adipisci aut molestiae distinctio qui voluptatum maxime ut nulla reiciendis ea quas possimus aut voluptas itaque quo explicabo repudiandae.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Nossa Missão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer materiais de construção de alta qualidade com atendimento 
                  personalizado, contribuindo para o sucesso dos projetos de nossos 
                  clientes através de soluções eficientes, preços competitivos e 
                  qualidade dos materiais.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Nossa Visão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a principal fornecedora de materiais de construção 
                  da região, sendo referência em qualidade, inovação e relacionamento 
                  com clientes, contribuindo para o desenvolvimento da construção civil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho diário e nosso relacionamento com clientes e parceiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elevated group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/*
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white hero-title">
              Nossos Números
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Resultados que demonstram nosso compromisso com a excelência
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg opacity-90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       Team Section 
      <section className="py-20 section-alt bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-title">
              <span className="gradient-text">Equipe</span> Especializada
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Nossa equipe é formada por profissionais experientes e qualificados, 
              prontos para oferecer consultoria técnica e encontrar as melhores 
              soluções para cada projeto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Consultoria Técnica',
                  description: 'Orientação especializada na escolha dos materiais ideais para cada tipo de obra.'
                },
                {
                  title: 'Atendimento Personalizado', 
                  description: 'Relacionamento próximo e atendimento dedicado a cada cliente.'
                },
                {
                  title: 'Logística Eficiente',
                  description: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.'
                }
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default About;