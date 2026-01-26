import { QrCode, Users, User, Send, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: QrCode,
      title: "QR scannen und Event beitreten",
      description: "Ein Scan reicht - du bist sofort im Event."
    },
    {
      number: "02",
      icon: Users,
      title: "Teilnehmer sehen",
      description: "Du siehst, wer gerade vor Ort ist."
    },
    {
      number: "03",
      icon: User,
      title: "Profil öffnen",
      description: "Kurz prüfen, ob es passt."
    },
    {
      number: "04",
      icon: Send,
      title: "Anfrage senden",
      description: "Verbinden, bevor der Chat startet."
    },
    {
      number: "05",
      icon: MessageCircle,
      title: "Nach Annahme chatten",
      description: "1:1 schreiben, sobald die Anfrage akzeptiert ist."
    }
  ];

  return (
    <section id="so-funktionierts" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">So funktioniert's</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Fünf klare Schritte - ohne Umwege.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-5 stagger-reveal">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="feature-card p-5 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
