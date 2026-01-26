import { Link } from "react-router-dom";
import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="fuer-wen" className="section-padding section-glow">
      <div className="container-max">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Für wen ist Vayn?</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Für alle, die auf Events schneller und klarer in Kontakt kommen wollen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 bg-card rounded-3xl border shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Besucher:innen</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Du möchtest auf Events die richtigen Leute finden, ohne lange zu suchen.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>QR scannen und sofort starten</li>
              <li>Teilnehmer sehen und Profile öffnen</li>
              <li>Anfragen senden und nach Annahme chatten</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 bg-card rounded-3xl border shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">Veranstalter</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Du willst, dass Gäste schneller ins Gespräch kommen und dein Event lebendig wirkt.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Einfacher Einstieg für alle per QR</li>
              <li>Mehr Austausch zwischen Gästen</li>
              <li>Netzwerken sichtbar machen</li>
            </ul>
            <Button asChild variant="outline" className="w-full rounded-xl border-foreground/20 sm:w-auto">
              <Link to="/fuer-veranstalter">Für Veranstalter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
