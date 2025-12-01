import { Shield, Lock, Zap, Award } from "lucide-react";

const About = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "DSGVO Konform",
      description: "Vollständige Compliance mit europäischen Datenschutzstandards"
    },
    {
      icon: Lock,
      title: "End-to-End Verschlüsselung",
      description: "Alle Chats sind vollständig verschlüsselt und sicher"
    },
    {
      icon: Zap,
      title: "Firebase Backend",
      description: "Powered by Google's zuverlässige und skalierbare Infrastruktur"
    },
    {
      icon: Award,
      title: "Trusted by 10k+ Users",
      description: "Bereits von Tausenden Professionals erfolgreich genutzt"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Sicherheit & <span className="gradient-text">Vertrauen</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vayn ist eine deutsche Company mit Sitz in Köln. Wir entwickeln eine Event-App,
                die Sicherheit, DSGVO und Nutzerfreundlichkeit gleichermaßen priorisiert.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-2xl border">
                <h3 className="text-lg font-semibold mb-3">Warum Vayn?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir glauben an spontane Begegnungen ohne Social-Media-Rauschen. Vayn
                  verbindet Menschen dort, wo sie sich ohnehin treffen – mit Technologie,
                  die zuverlässig im Hintergrund funktioniert.
                </p>
              </div>

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <h3 className="text-lg font-semibold mb-3 text-primary">Unsere Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jede Begegnung hat Potenzial. Vayn UG entwickelt Tools, die Veranstalter:innen
                  und Besucher:innen helfen, diese Chancen festzuhalten.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-2xl border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Vayn in Zahlen</h3>
            <p className="text-muted-foreground">
              Das Vertrauen unserer Community spricht für sich
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Events Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Connections Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
