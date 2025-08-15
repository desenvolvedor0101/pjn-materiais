import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  Filter,
  Search,
  Users,
  FileText,
} from "lucide-react";
import brita0Image from "@/assets/brita-0-pó-de-brita.png";
import brita01Image from "@/assets/brita-01.png";
import quartzSandImage from "@/assets/fino-de-quartzo.png";
import silicaSandBagImage from "@/assets/sílica.png";

const Products = () => {
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
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl hero-title leading-tight">
              Nossos <span className="gradient-text">Produtos</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Linha completa de agregados, areias e materiais especializados
              para todos os tipos de construção. Qualidade garantida e entrega
              rápida.
            </p>
          </div>
        </div>
      </section>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-construction-orange/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-30 left-0 w-96 h-96 bg-gradient-to-tr from-construction-orange/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      {/* Filters and Search */}
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

      {/* Info Section */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Qualidade</span> Garantida
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Todos os nossos materiais passam por rigoroso controle de
              qualidade e seguem as normas técnicas da ABNT. Oferecemos
              certificados de qualidade e laudos técnicos para todos os
              produtos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Certificação",
                  description:
                    "Materiais em conformidade com normas técnicas brasileiras",
                  icon: CheckCircle,
                },
                {
                  title: "Controle de Qualidade",
                  description:
                    "Testes laboratoriais regulares garantem a consistência",
                  icon: Users,
                },
                {
                  title: "Laudos Técnicos",
                  description:
                    "Documentação completa para aprovação em projetos",
                  icon: FileText,
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="text-center relative border-collapse px-2 py-5 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <process.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Não encontrou o que procura?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Trabalhamos com diversos outros materiais e podemos encontrar
            exatamente o que você precisa para seu projeto.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => handleQuoteRequest("materiais específicos")}
          >
            Fale Conosco
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
