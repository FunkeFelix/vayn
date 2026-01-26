import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* 1. Verantwortlicher / Controller */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Vayn UG (haftungsbeschränkt)</strong><br />
                Metzer Straße 30<br />
                50677 Köln, Deutschland<br />
                Geschäftsführer: Leon Röll Carrere<br />
                Handelsregister: HRB 125570, Amtsgericht Köln<br />
                E-Mail: <a href="mailto:lrc@vaynconnect.de">lrc@vaynconnect.de</a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">Letzte Aktualisierung: 01.12.2025</p>
            </section>

            {/* 2. Zwecke & Rechtsgrundlagen */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Zwecke &amp; Rechtsgrundlagen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir verarbeiten personenbezogene Daten zur Bereitstellung der App-Funktionen
                (QR-Check-in, Teilnehmerliste, Verbindungen &amp; Chat), zur Kontoverwaltung,
                Sicherheit und Support. Rechtsgrundlagen gem. Art. 6 Abs. 1 DSGVO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>(b) Vertragserfüllung</strong> – Nutzung der App-Funktionen</li>
                <li><strong>(a) Einwilligung</strong> – z. B. optionale Angaben/Benachrichtigungen</li>
                <li><strong>(f) Berechtigtes Interesse</strong> – z. B. Missbrauchs-/Betrugsvermeidung, App-Sicherheit</li>
              </ul>
            </section>

            {/* 3. Datenkategorien */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Welche Daten verarbeiten wir?</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Kontodaten</strong>: Name, E-Mail, ggf. Profilbild (Apple/Google Sign-In)</li>
                <li><strong>Profil</strong>: optionale Bio/Verfügbarkeitsangaben</li>
                <li><strong>Eventdaten</strong>: Event-Teilnahmen, QR-Check-ins, Verbindungsanfragen</li>
                <li><strong>Kommunikation</strong>: Chats &amp; Metadaten (z. B. Zeitstempel)</li>
                <li><strong>Technische Daten</strong>: Geräte-/App-Infos, Log-Daten, Fehlerberichte</li>
                <li><strong>Zahlung/Abos</strong>: Daten zur Abrechnung, falls Premium genutzt wird</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Chats werden während Übertragung und Speicherung verschlüsselt („in transit“ &amp; „at rest“).
              </p>
            </section>

            {/* 4. Herkunft */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Herkunft der Daten</h2>
              <p className="text-muted-foreground leading-relaxed">
                Daten stammen aus Ihrer Eingabe in der App bzw. aus Apple/Google Sign-In.
                Nutzungsdaten entstehen durch App-Funktionen (z. B. QR-Check-in, Verbindungen, Chat).
              </p>
            </section>

            {/* 5. Empfänger / Auftragsverarbeiter */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Empfänger &amp; Auftragsverarbeitung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Zur Bereitstellung der App nutzen wir u. a. folgende Dienste als Auftragsverarbeiter:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Firebase (Auth, Firestore/Storage, Crashlytics)</li>
                <li>Apple/Google Sign-In (Authentifizierung)</li>
                <li>App-Store-Abrechnung (Apple) für In-App-Käufe/Abos</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Die Verarbeitung kann außerhalb der EU/EWR stattfinden. In diesen Fällen werden geeignete
                Garantien (z. B. EU-Standardvertragsklauseln) eingesetzt.
              </p>
            </section>

            {/* 6. Abrechnung */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Abrechnung &amp; Abonnements</h2>
              <p className="text-muted-foreground leading-relaxed">
                Beim Premium-Abo (z. B. 2,99 €/Monat) werden zur Abwicklung notwendige Abrechnungsdaten verarbeitet.
                Die Zahlungsabwicklung erfolgt über den jeweiligen App-Store-Anbieter.
              </p>
            </section>

            {/* 7. Speicherdauer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Speicherdauer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir speichern Daten nur so lange, wie es für Zwecke der App erforderlich ist oder gesetzliche
                Aufbewahrungsfristen bestehen. Sie können Ihr Konto jederzeit löschen; damit werden personenbezogene
                Daten, soweit keine Aufbewahrungspflichten entgegenstehen, gelöscht.
              </p>
            </section>

            {/* 8. Ihre Rechte */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                Datenübertragbarkeit sowie Widerspruch (Art. 15–21 DSGVO). Zudem besteht ein Beschwerderecht
                bei einer Datenschutzaufsichtsbehörde. Kontakt:{" "}
                <a href="mailto:lrc@vaynconnect.de">lrc@vaynconnect.de</a>
              </p>
            </section>

            {/* 9. Minderjährige */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Minderjährige</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die App richtet sich nicht an Kinder unter 16 Jahren. Eine Nutzung setzt ein Mindestalter
                nach geltendem Recht bzw. die Zustimmung der Erziehungsberechtigten voraus.
              </p>
            </section>

            {/* Impressum / Provider Identification */}
            <section id="impressum">
              <h2 className="text-2xl font-semibold mb-4">Impressum</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Diensteanbieter / Verantwortlich für Inhalte gem. § 55 Abs. 2 RStV</strong><br />
                Vayn UG (haftungsbeschränkt)<br />
                Metzer Straße 30, 50677 Köln, Deutschland<br />
                Geschäftsführer: Leon Röll Carrere<br />
                Handelsregister: HRB 125570, Amtsgericht Köln<br />
                E-Mail: <a href="mailto:lrc@vaynconnect.de">lrc@vaynconnect.de</a>
              </p>
            </section>
          </div>

          {/* English summary box */}
          <div className="mt-12 p-6 bg-card rounded-2xl border">
            <h3 className="text-xl font-semibold mb-4">English Version (Summary)</h3>
            <section className="space-y-4">
              <h4 className="font-semibold">Data Controller</h4>
              <p className="text-muted-foreground">
                <strong>Vayn UG</strong>, Metzer Straße 30, 50677 Cologne, Germany<br />
                Managing Director: Leon Röll Carrere · Email:{" "}
                <a href="mailto:lrc@vaynconnect.de">lrc@vaynconnect.de</a>
              </p>

              <h4 className="font-semibold">Data We Process</h4>
              <p className="text-muted-foreground">
                Account & profile data, event participation (QR check-ins), connections, chat content/metadata,
                technical logs, and—if premium is used—billing-related data. Encryption in transit & at rest.
              </p>

              <h4 className="font-semibold">Legal Bases & Retention</h4>
              <p className="text-muted-foreground">
                Contract (Art. 6(1)(b)), consent (Art. 6(1)(a)), legitimate interests (Art. 6(1)(f)).
                Data is retained only as necessary or as required by law. You can request deletion anytime.
              </p>

              <h4 className="font-semibold">Processors</h4>
              <p className="text-muted-foreground">
                Google Firebase (Auth/DB/Storage/Crash), Apple/Google Sign-In, app-store billing. International
                transfers may apply with appropriate safeguards (e.g., SCCs).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
