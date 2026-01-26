import { QrCode, Users, User, Send, MessageCircle, Check } from "lucide-react";

const Features = () => {
  const benefits = [
    "Schneller Einstieg per QR",
    "Mehr relevante Kontakte",
    "Klarer, respektvoller Kontakt durch das Anfrage-System",
    "Sichtbarkeit nach dem Event steuerbar",
  ];

  const highlights = [
    {
      icon: QrCode,
      title: "QR scannen & beitreten",
      description: "In Sekunden im Event, ohne Formulare."
    },
    {
      icon: Users,
      title: "Teilnehmer sehen",
      description: "Du siehst, wer gerade da ist."
    },
    {
      icon: User,
      title: "Profile öffnen",
      description: "Kurz das Profil ansehen."
    },
    {
      icon: Send,
      title: "Anfrage senden",
      description: "Erst verbinden, dann chatten."
    },
    {
      icon: MessageCircle,
      title: "1:1 chatten",
      description: "Nach Annahme direkt schreiben."
    }
  ];

  return (
    <section id="warum-vayn" className="section-padding bg-muted/30 section-glow">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Warum <span className="gradient-text">Vayn</span>?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Auf Events willst du schnell wissen, wer da ist. Vayn macht den ersten Schritt
                leicht und spart dir den unangenehmen Start.
              </p>
            </div>

            <ul className="space-y-3 text-sm sm:text-base">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground">
              Verbindungen lassen sich jederzeit beenden. Danach wird der Chat ausgeblendet.
              Wie lange du nach dem Event sichtbar bist, stellst du selbst ein.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 stagger-reveal">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="feature-card p-5 sm:p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
