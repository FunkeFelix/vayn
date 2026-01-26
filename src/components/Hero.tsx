import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Download, Smartphone, Users, Zap } from "lucide-react";
import vaynMark from "@/assets/icon/1.0x/logo.png";
import appScreen01 from "@/assets/app/1.jpg";
import appScreen02 from "@/assets/app/2.jpg";
import appScreen03 from "@/assets/app/3.jpg";
import appScreen04 from "@/assets/app/4.jpg";
import appScreen05 from "@/assets/app/5.jpg";
import appScreen06 from "@/assets/app/6.jpg";
import appScreen07 from "@/assets/app/7.jpg";
import appScreen08 from "@/assets/app/8.jpg";

const Hero = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const appScreens = [
    appScreen01,
    appScreen02,
    appScreen03,
    appScreen04,
    appScreen05,
    appScreen06,
    appScreen07,
    appScreen08,
  ];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [carouselApi]);

  return (
    <section className="hero-section section-padding overflow-hidden">
      <div className="hero-orb w-64 h-64 -top-20 -left-10 bg-primary/40" />
      <div className="hero-orb w-80 h-80 top-10 -right-24 bg-secondary/40" />
      <div className="hero-orb w-56 h-56 bottom-10 left-1/3 bg-accent/60" />
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={vaynMark}
                  alt="Vayn Logo"
                  className="w-12 h-12 rounded-2xl shadow-lg"
                />
                <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground">
                  Aus Köln • Deutschland
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Finde die richtigen Leute auf Events in Sekunden.
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                Per QR-Code beitreten, Teilnehmer sehen, Profile öffnen, Anfragen senden und nach Annahme 1:1 chatten.
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Vayn ist die Event-Netzwerk-App. Auf Events weißt du selten, wer noch da ist. Vayn macht
              das Vernetzen leicht - ohne langen Austausch von Kontaktdaten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button asChild className="cta-button flex w-full items-center justify-center gap-2 sm:w-auto">
                <a href="https://apps.apple.com/de/app/vayn/id6757141911">
                  <Download className="w-5 h-5" />
                  App laden / Jetzt starten
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex w-full items-center justify-center gap-2 rounded-xl border-foreground/20 bg-transparent px-8 py-4 text-base hover:bg-foreground/5 sm:w-auto"
              >
                <a href="#so-funktionierts">So funktioniert's</a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-4 pt-2 text-center sm:justify-start sm:gap-8 sm:pt-4">
              {[
                { label: "Eventbeitritt", value: "QR" },
                { label: "Teilnehmer sehen", value: "Vor Ort" },
                { label: "Chat nach Annahme", value: "1:1" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <Carousel
                className="w-full max-w-sm sm:max-w-md mx-auto"
                opts={{ align: "start", loop: true }}
                setApi={setCarouselApi}
              >
                <CarouselContent>
                  {appScreens.map((screen, index) => (
                    <CarouselItem key={screen}>
                      <img
                        src={screen}
                        alt={`Vayn App-Ansicht ${index + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="w-full rounded-3xl shadow-2xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 hidden h-16 w-16 items-center justify-center rounded-full bg-primary/20 animate-float delay-1000 sm:flex">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden h-16 w-16 items-center justify-center rounded-full bg-secondary/20 animate-float delay-2000 sm:flex">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute top-1/2 -right-8 hidden h-12 w-12 items-center justify-center rounded-full bg-accent animate-float delay-500 sm:flex">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
