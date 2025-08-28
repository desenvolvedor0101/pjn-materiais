import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Solicitação de Orçamento Enviado!",
        description: "Entraremos em contato com você em até 24 horas com seu orçamento personalizado.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Falha ao enviar sua solicitação. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Contate-nos",
      details: ["Whatsapp: (71) 98687-3417", "Ou Ligue: (71) 98687-3417"],
      action: "tel:+5571986873417"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contato@pjnmateriais.com.br", "orcamento@pjnmateriais.com.br"],
      action: "mailto:contato@pjnmateriais.com.br"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: ["Seg-Sex: 07:00 - 18:00", "Sab: 08:00 - 16:00, Dom: Fechado"],
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 hero-title">
              Solicite seu <span className="gradient-text">orçamento</span> hoje
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-3"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pronto para começar seu projeto? Entre em contato conosco para um orçamento personalizado
              e uma consulta especializada sobre suas necessidades de materiais de construção.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-card rounded-2xl shadow-medium p-8 overlay-magic">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Solicite um orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Digite seu endereço de email"
                  />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Número de Telefone <span className="text-orange-500">*</span>
                    </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Digite seu telefone. Ex.: (71) 91234-5678"
                  />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Detalhes do Projeto <span className="text-orange-500">*</span>
                    </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Fale sobre seu projeto, materiais necessários, cronograma e quaisquer requisitos específicos..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Orçamento
                      <Send size={18} />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Entre em contato
              </h3>
              
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card rounded-xl shadow-soft p-6 overlay-magic hover:scale-105 hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {info.action && info.action !== "#" ? (
                            <a 
                              href={info.action}
                              className="hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Call CTA */}
              <div className="bg-gradient-primary rounded-xl p-6 text-center shadow-glow">
                <h4 className="text-xl font-semibold text-primary-foreground mb-2 hero-title">
                  Precisa Conversar Conosco?
                </h4>
                <p className="text-primary-foreground/90 mb-4">
                  Ligue agora mesmo para necessidades de materiais ou consultoria especializada
                </p>
                <a 
                  href="https://wa.me/5571986873417" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold transition-smooth hover:bg-primary-foreground/90"
                >
                  <Phone size={18} />
                  Ligue Agora: (71) 98687-3417
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;