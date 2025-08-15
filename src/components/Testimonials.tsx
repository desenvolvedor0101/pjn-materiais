import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mike Rodriguez",
      title: "General Contractor",
      company: "Rodriguez Construction",
      rating: 5,
      quote: "BuildPro Materials has been our go-to supplier for over 5 years. Their quality is unmatched, and their delivery times are incredible. They've never let us down on a project.",
      project: "Commercial Office Complex"
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Project Manager",
      company: "Urban Developments",
      rating: 5,
      quote: "The expert consultation we received helped us choose the perfect materials for our residential development. The cost savings and quality improvements exceeded our expectations.",
      project: "Luxury Residential Development"
    },
    {
      id: 3,
      name: "David Thompson",
      title: "Construction Supervisor",
      company: "Thompson & Associates",
      rating: 5,
      quote: "Working with BuildPro feels like having a partner, not just a supplier. Their technical support team is incredibly knowledgeable and always available when we need guidance.",
      project: "Municipal Infrastructure"
    },
    {
      id: 4,
      name: "Lisa Martinez",
      title: "Architect",
      company: "Martinez Design Studio",
      rating: 5,
      quote: "The range of premium materials and their attention to detail makes specifying products easy. My clients are always impressed with the quality of the finished projects.",
      project: "Custom Home Design"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what construction professionals 
              have to say about working with BuildPro Materials.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="group bg-gradient-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 p-8 overlay-magic relative"
                style={{ 
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={40} className="text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 fill-primary text-primary" 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium ml-2">
                    5.0
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                {/* Project Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  {testimonial.project}
                </div>

                {/* Author Info */}
                <div className="border-t border-border/50 pt-6">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    {/* Details */}
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-primary/5 rounded-full animate-float"></div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "98%", label: "Client Satisfaction" },
              { metric: "500+", label: "Projects Completed" },
              { metric: "15+", label: "Years Experience" },
              { metric: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium overlay-magic max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Join Our Satisfied Clients?
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the BuildPro difference with premium materials, 
                expert guidance, and exceptional service.
              </p>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-smooth hover:shadow-glow transform hover:scale-105"
              >
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;