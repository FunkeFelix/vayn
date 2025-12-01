import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Nachricht gesendet!",
      description: "Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-max section-padding">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Support</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Kontaktieren Sie uns</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Haben Sie Fragen zu Vayn oder benötigen Sie Hilfe? Wir sind hier, um zu helfen! 
                Senden Sie uns eine Nachricht und wir werden uns schnellstmöglich bei Ihnen melden.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">E-Mail Support</p>
                    <p className="text-sm text-muted-foreground">lrc@vaynconnect.de</p>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-1">Antwortzeit</p>
                  <p className="text-sm text-muted-foreground">
                    Normalerweise antworten wir innerhalb von 24 Stunden
                  </p>
                </div>
                <div className="p-4 bg-card rounded-xl border">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Vayn UG (haftungsbeschränkt)</p>
                  <p className="text-sm text-muted-foreground">
                    Metzer Straße 30 · 50677 Köln · HRB 125570<br />
                    Geschäftsführer: Leon Röll Carrere
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Betreff *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="rounded-xl resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                <Button type="submit" className="w-full cta-button">
                  <Send className="w-4 h-4 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-16 p-6 bg-card rounded-2xl border">
            <h3 className="text-xl font-semibold mb-4">Häufige Fragen</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Wie funktioniert der QR-Code Login?</h4>
                <p className="text-sm text-muted-foreground">
                  Scannen Sie einfach den QR-Code am Event-Eingang mit der Vayn App. 
                  Sie werden automatisch zum Event hinzugefügt und können andere Teilnehmer sehen.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Wie lange kann ich nach einem Event Kontakte knüpfen?</h4>
                <p className="text-sm text-muted-foreground">
                  Sie haben 24 Stunden nach dem Event Zeit, um neue Kontakte zu knüpfen und Chats zu starten.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Ist Vayn kostenlos?</h4>
                <p className="text-sm text-muted-foreground">
                  Ja! Die Grundfunktionen sind kostenlos. Für erweiterte Features gibt es Vayn Premium für 2,99€/Monat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
