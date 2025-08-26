import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Contactus from "@/components/Contactus";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Shield,
  Users,
  Award,
  CheckCircle,
  Clock,
  Lightbulb,
  Wrench,
  Contact,
} from "lucide-react";
import { Filter, Search } from "lucide-react";
import brita0Image from "@/assets/brita-0-pó-de-brita.webp";
import brita01Image from "@/assets/brita-01.webp";
import quartzSandImage from "@/assets/fino-de-quartzo.webp";
import silicaSandBagImage from "@/assets/sílica.webp";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Hero2 from "@/components/Hero2";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Agregados de Qualidade",
      description:
        "Materiais certificados e testados, seguindo rigorosos padrões de qualidade para sua obra.",
    },
    /*{
      icon: Truck,
      title: "Entrega Rápida",
      description:
        "Logística eficiente com entrega em até 24 horas em Salvador.",
    },*/ 
    {
      icon: Users,
      title: "Atendimento Especializado",
      description:
        "Equipe técnica qualificada para orientar na escolha ideal dos materiais.",
    },
    {
      icon: Award,
      title: "Preços Competitivos",
      description:
        "Melhor custo-benefício do mercado com condições especiais para grandes volumes.",
    },
  ];

  const quickTips = [
    {
      icon: Lightbulb,
      title: "Como Escolher a Brita Ideal",
      description:
        "Brita 0 para concreto fino e acabamentos. Brita 1 para estruturas e fundações. Saiba mais sobre cada tipo.",
      tips: [
        "Brita 0: 4,8mm a 9,5mm",
        "Brita 1: 9,5mm a 19mm",
        "Ideal para diferentes aplicações",
      ],
    },
    {
      icon: Wrench,
      title: "Calculando Quantidade de Material",
      description:
        "Use nossa calculadora para determinar a quantidade exata de materiais para seu projeto.",
      tips: [
        "1m³ de concreto = 0,6m³ de brita",
        "Considere 10% de margem",
        "Consulte nossos especialistas",
      ],
    },
  ];
  const [activeFilter, setActiveFilter] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Brita 0",
      category: "agregados",
      description:
        "Agregado fino perfeito para concretos de acabamento e blocos.",
      image: brita0Image,
      specs: [
        "Tamanho: 4,8mm a 9,5mm",
        "Ideal para acabamentos",
        "Concreto fino",
      ],
      applications: [
        "Concreto de acabamento",
        "Blocos de concreto",
        "Peças pré-moldadas",
      ],
    },
    {
      id: 2,
      name: "Brita 1",
      category: "agregados",
      description:
        "Agregado graúdo ideal para concreto estrutural e pavimentação.",
      image: brita01Image,
      specs: [
        "Tamanho: 9,5mm a 19mm",
        "Ideal para estruturas",
        "Concreto de alta resistência",
      ],
      applications: ["Concreto estrutural", "Pavimentação", "Fundações"],
    },
    {
      id: 3,
      name: "Fino de Quartzo",
      category: "areias",
      description:
        "Areia de quartzo de alta pureza para argamassas e revestimentos.",
      image: quartzSandImage,
      specs: ["Alta pureza", "Granulometria uniforme", "Ideal para argamassas"],
      applications: ["Argamassas", "Revestimentos", "Rejuntamento"],
    },
    {
      id: 4,
      name: "Sílica",
      category: "areias",
      description: "Saco de areia de sílica para projetos especiais e filtros.",
      image: silicaSandBagImage,
      specs: ["Saco 10kg", "Alta pureza", "Uso industrial"],
      applications: ["Filtros", "Fundição", "Jateamento"],
    },
  ];

  const filters = [
    { id: "todos", label: "Todos os Produtos" },
    { id: "agregados", label: "Agregados" },
    { id: "areias", label: "Areias" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesFilter =
      activeFilter === "todos" || product.category === activeFilter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleQuoteRequest = (productName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para ${productName}.`;
    const whatsappUrl = `https://wa.me/5571986873417?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen mt-[-4%]">
      {/* Hero Section */}
      <Hero2 />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-construction-orange/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-construction-orange/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title">
              Por que escolher a{" "}
              <span className="gradient-text">PJN Materiais</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em materiais de construção com
              qualidade e atendimento personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <Card key={index} className="card-elevated group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title">
              Como <span className="gradient-text">trabalhamos?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo simples e eficiente para atender suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Solicite seu Orçamento",
                description:
                  "Entre em contato conosco através do site, WhatsApp ou telefone",
                icon: CheckCircle,
              },
              {
                title: "Análise Especializada",
                description:
                  "Nossa equipe técnica avalia suas necessidades e recomenda os melhores materiais",
                icon: Users,
              },
              {
                title: "Atendimento Veloz",
                description: "Atendimento especializado para você escolher os melhores materiais.",
                icon: Clock,
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center relative border-collapse px-2 py-5 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <process.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title">
              <span className="gradient-text">Dicas rápidas</span> para sua obra
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Orientações práticas para seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {quickTips.map((tip, index) => (
              <Card
                key={index}
                className="card-elevated shadow-lg hover:shadow-xl transition-shadow transition-duration-500"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{tip.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                      <ul className="space-y-2">
                        {tip.tips.map((tipItem, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {tipItem}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div id="produtos" className="text-center mb-2 mt-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 hero-title">
          Nossos <span className="gradient-text">produtos</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Para Materiais de Construção
        </p>
      </div>
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className={activeFilter === filter.id ? "btn-primary" : ""}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter.label}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-input rounded-lg w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="card-elevated group flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-t-[12px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {product.category === "agregados"
                        ? "Agregados"
                        : "Areias"}
                    </Badge>
                  </div>

                  <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
                    <div className="flex-grow space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Specifications */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-foreground">
                          Especificações:
                        </h4>
                        <ul className="space-y-1">
                          {product.specs.map((spec, index) => (
                            <li
                              key={index}
                              className="text-xs text-muted-foreground flex items-center space-x-1"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applications */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-foreground">
                          Aplicações:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((application, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {application}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full btn-primary mt-4"
                      onClick={() => handleQuoteRequest(product.name)}
                    >
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white hero-title">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Solicite seu orçamento sem compromisso. Nossa equipe está pronta
            para atender suas necessidades com agilidade e qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"https://wa.me/5571986873417?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20materiais%20de%20constru%C3%A7%C3%A3o."} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Solicitar Orçamento
              </Button>
            </Link>
            <Link to={"/produtos"}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary"
              >
              Ver Produtos
            </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      <div id="contato">
        <Contactus />
      </div>
    </div>
  );
};

export default Home;
