import { Link } from "react-router-dom";
import { ArrowLeft, Mail, QrCode, Users, Send, MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForOrganizers = () => {
  const steps = [
    {
      number: "01",
      icon: QrCode,
      title: "Veranstalter erhaelt QR-Code",
      description: "Du bekommst den Event-QR fuer deinen Einlass."
    },
    {
      number: "02",
      icon: Users,
      title: "Besucher scannen und treten bei",
      description: "Ein Scan reicht und alle sind im Event."
    },
    {
      number: "03",
      icon: Users,
      title: "Teilnehmer sehen und filtern",
      description: "Besucher sehen, wer da ist, und finden passende Kontakte."
    },
    {
      number: "04",
      icon: Send,
      title: "Anfragen senden und akzeptieren",
      description: "Kontakt entsteht erst nach Zustimmung."
    },
    {
      number: "05",
      icon: MessageCircle,
      title: "Nach Annahme chatten",
      description: "1:1 Chat startet nach der Annahme."
    }
  ];

  const benefits = [
    "Hoehere Zufriedenheit der Besucher",
    "Mehr Networking-Wert ohne Aufwand",
    "Schneller Start per QR",
    "Klarer, respektvoller Kontakt durch Anfragen",
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-section section-padding overflow-hidden">
        <div className="hero-orb w-64 h-64 -top-16 -left-12 bg-primary/40" />
        <div className="hero-orb w-72 h-72 top-12 -right-24 bg-secondary/40" />
        <div className="hero-orb w-52 h-52 bottom-8 left-1/2 bg-accent/60" />
        <div className="container-max relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurueck zur Startseite
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground">
                Fuer Veranstalter
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Mehr echte Verbindungen auf deinem Event
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vayn ist die Event-Netzwerk-App. Mit QR-Einstieg treten Besucher in Sekunden bei,
                sehen Teilnehmer, senden Anfragen und chatten nach Annahme 1:1.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="cta-button flex items-center gap-2">
                  <a href="#kontakt">
                    Demo anfragen
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 rounded-xl border-foreground/20 bg-transparent px-8 py-4 text-base hover:bg-foreground/5"
                >
                  <a href="mailto:support@vaynconnect.de">
                    Kontakt aufnehmen
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-4 stagger-reveal">
              <div className="p-6 bg-card rounded-2xl border shadow-lg">
                <h2 className="text-xl font-semibold mb-3">Was Vayn loest</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Besucher wissen nicht, wer da ist.</li>
                  <li>Networking ist oft unangenehm und zufaellig.</li>
                  <li>Ohne Kontakte wirkt das Event weniger wertvoll.</li>
                </ul>
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <h3 className="text-lg font-semibold mb-2 text-primary">Sichtbarkeit steuern</h3>
                <p className="text-sm text-muted-foreground">
                  Besucher steuern ihre Sichtbarkeit nach dem Event. Premium kann mehr Sichtbarkeit
                  und Sichtbarkeit fuer zukuenftige Events freischalten.
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl border shadow-sm">
                <p className="text-sm text-muted-foreground">
                  Verbindungen lassen sich jederzeit beenden. Danach wird der Chat ausgeblendet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">So laeuft es ab</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ein klarer Ablauf, der Besucher schnell ins Gespraech bringt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 stagger-reveal">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="feature-card"
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

      <section className="section-padding bg-muted/30 section-glow">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Vorteile fuer Veranstalter</h2>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-card rounded-2xl border shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Vorteile fuer Besucher</h3>
            <p className="text-muted-foreground">
              Besucher sehen, wer da ist, und koennen in Ruhe anfragen. Nach Annahme entsteht ein klarer
              1:1 Kontakt ohne peinlichen Austausch von Daten.
            </p>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Demo anfragen</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Erzaehl uns kurz von deinem Event. Wir melden uns schnell mit einem passenden Setup.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a className="hover:text-primary transition-colors" href="mailto:support@vaynconnect.de">
                  support@vaynconnect.de
                </a>
              </div>
            </div>

            <div className="space-y-6 bg-card rounded-3xl border p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">Kontakt aufnehmen</h3>
              <p className="text-muted-foreground">
                Schreib uns eine kurze Mail mit Event-Name, Datum und ungefaehrer Groesse.
                Wir melden uns mit den naechsten Schritten.
              </p>
              <Button asChild className="cta-button w-full">
                <a href="mailto:support@vaynconnect.de">
                  E-Mail schreiben
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForOrganizers;
