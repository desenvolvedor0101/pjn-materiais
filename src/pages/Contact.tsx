import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Here you would normally send the data to your backend
      // For now, we'll just show a success message
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      details: ["Rua das Construções, 123", "Pojuca, BA - CEP 01234-567"],
      action: null,
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(71) 98687-3417"],
      action: () => window.open("tel:+5571986873417"),
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contato@pjnmateriais.com.br"],
      action: () => window.open("mailto:contato@pjnmateriais.com.br"),
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: [
        "Segunda à Sexta: 7:00 - 17:00",
        "Sábado: 7:00 - 12:00",
        "Domingo: Fechado",
      ],
      action: null,
    },
  ];

  const handleWhatsAppClick = () => {
    const message =
      "Olá! Gostaria de mais informações sobre os materiais de construção.";
    const whatsappUrl = `https://wa.me/5571986873417?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl hero-title leading-tight">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estamos prontos para atender suas necessidades. Entre em contato
              conosco e solicite seu orçamento sem compromisso.
            </p>
          </div>
        </div>
      </section>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-construction-orange/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-30 left-0 w-96 h-96 bg-gradient-to-tr from-construction-orange/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`card-elevated text-center ${
                  info.action ? "cursor-pointer" : ""
                } group`}
                onClick={info.action || undefined}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-sm text-muted-foreground"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Solicite seu <span className="gradient-text">Orçamento</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entraremos em contato em
                    breve.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="transition-colors focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="transition-colors focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(71) 98687-3417"
                        className="transition-colors focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva quais materiais você precisa, quantidade estimada, localização da obra e prazo desejado..."
                      className="transition-colors focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios. Responderemos em até 2 horas úteis.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Section */}
            <div className="space-y-8">
              {/* WhatsApp Card */}
              <Card className="card-elevated bg-green-50 border-green-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
                  <p className="text-muted-foreground mb-6">
                    Precisa de uma resposta rápida? Fale conosco diretamente
                    pelo WhatsApp!
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">
                    Atendimento Personalizado
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: CheckCircle,
                        text: "Orçamento gratuito e sem compromisso",
                      },
                      {
                        icon: CheckCircle,
                        text: "Consultoria técnica especializada",
                      },
                      {
                        icon: CheckCircle,
                        text: "Entrega rápida em Pojuca BA",
                      },
                      {
                        icon: CheckCircle,
                        text: "Condições especiais para grandes volumes",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="card-elevated bg-gradient-primary border-primary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2 text-secondary">
                    Urgência na Obra?
                  </h4>
                  <p className="text-sm text-muted mb-4">
                    Para emergências, ligue diretamente:
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://wa.me/5571986873417")}
                    className="border-primary text-primary hover:bg-secondary"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (71) 98687-3417
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Nossa <span className="gradient-text">Localização</span>
            </h2>
            <div className="bg-gray-100 rounded-xl overflow-hidden h-96">
              <iframe
                title="Mapa de Pojuca, BA"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.269380524007!2d-38.3315252!3d-12.4292741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716b6d8d3023fd9%3A0x83c0897b5a1e79ae!2sPojuca%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1691444477661"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
