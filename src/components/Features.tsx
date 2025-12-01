import { QrCode, Users, Clock, MessageCircle } from "lucide-react";
import qrFeature from "@/assets/qr-feature.jpg";
import attendeesFeature from "@/assets/attendees-feature.jpg";
import chatFeature from "@/assets/chat-feature.jpg";

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: "QR Access, No Friction",
      description: "Ein einziger Scan am Eingang und die Community ist live. Keine Formulare, keine Warteschlangen.",
      image: qrFeature,
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Live Guest Graph",
      description: "Vayn zeigt dir, wer gerade im Raum ist – inklusive Interessen und beruflichem Fokus.",
      image: attendeesFeature,
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "24h Smart Follow-Up",
      description: "Verbindungen bleiben 24 Stunden offen, damit Gespräche auch nach dem Event weitergehen.",
      image: null,
      color: "text-accent-foreground"
    },
    {
      icon: MessageCircle,
      title: "Secure Chats",
      description: "Direkter Chat mit Icebreaker Prompts – DSGVO-konform und auf deutschen Servern gehostet.",
      image: chatFeature,
      color: "text-primary"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Warum <span className="gradient-text">Vayn</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Die Networking Engine für Festivals, Konferenzen und Private Member Events – optimiert für echte Gespräche.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {feature.image && (
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${!feature.image ? 'mx-auto' : ''}`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
            <Users className="w-5 h-5" />
            Bereits 10.000+ Professionals vertrauen auf Vayn für meaningful connections
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
