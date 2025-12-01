import { Button } from "@/components/ui/button";
import { Download, Smartphone, Users, Zap } from "lucide-react";
import heroMockup from "@/assets/app-hero-mockup.jpg";
import vaynMark from "@/assets/icon/1.0x/logo.png";

const Hero = () => {
  return (
    <section className="hero-section section-padding overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={vaynMark}
                  alt="Vayn Logo"
                  className="w-12 h-12 rounded-2xl shadow-lg"
                />
                <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground">
                  Made in Cologne • Germany
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Vayn</span> verbindet Menschen, die schon am selben Event sind.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Sofort sehen, wer vor Ort ist, matchen via QR-Login und bis zu 24 Stunden nach dem Event weiter chatten.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Vayn ist die Event-App für echte Begegnungen. Veranstalter:innen aktivieren die Crowd mit einem einzigen QR-Code – Besucher:innen entdecken Profile, teilen Interessen und bleiben über ein abgesichertes Chat-Fenster verbunden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button flex items-center gap-2">
                <Download className="w-5 h-5" />
                App Store
              </Button>
              <Button className="cta-button flex items-center gap-2">
                <Download className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4">
              {[
                { label: "Community Connections", value: "50k+" },
                { label: "Kurierte Events", value: "600+" },
                { label: "Secure Follow-Ups", value: "24h" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroMockup} 
                alt="Vayn App Interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-float delay-1000">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center animate-float delay-2000">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float delay-500">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
