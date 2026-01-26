import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Kostenlos",
      price: "0",
      period: "",
      description: "Für alle, die sofort loslegen wollen",
      features: [
        "QR-Code scannen und Event beitreten",
        "Teilnehmer sehen und Profile öffnen",
        "Verbindungsanfragen senden",
        "1:1 Chat nach Annahme",
        "Sichtbarkeit nach dem Event einstellen"
      ],
      buttonText: "Kostenlos starten",
      popular: false
    },
    {
      name: "Premium",
      price: "2,99",
      period: "pro Monat",
      description: "Mehr Sichtbarkeit und mehr Zugriff",
      features: [
        "Mehr Sichtbarkeit nach dem Event",
        "Sichtbarkeit für zukünftige Events",
        "Mehr Zugriff auf Premium-Funktionen"
      ],
      buttonText: "Premium freischalten",
      popular: true
    }
  ];

  return (
    <section id="premium" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Premium
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Starte kostenlos. Premium schaltet mehr Sichtbarkeit und Funktionen frei.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 sm:hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-lg' 
                  : 'bg-card border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Beliebt
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  {plan.price === "0" ? (
                    <span className="text-4xl font-bold gradient-text">Kostenlos</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold gradient-text">€{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-primary' : 'bg-muted'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.popular ? 'text-white' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'cta-button' 
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
