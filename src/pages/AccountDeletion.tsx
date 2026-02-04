import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AccountDeletion = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-max section-padding">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Account Deletion (Google Play)</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">App and developer</h2>
              <p className="text-muted-foreground leading-relaxed">
                This page applies to the app <strong>Vayn</strong>, published by{" "}
                <strong>Vayn UG (haftungsbeschränkt)</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How to request account deletion</h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Open Vayn.</li>
                <li>Go to Profile.</li>
                <li>Tap Delete account and confirm.</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-3">
                If you cannot access the app, send your request to{" "}
                <a href="mailto:support@vaynconnect.de">support@vaynconnect.de</a> from the email
                address linked to your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data deleted with your account</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Account and profile data (name, email, profile details).</li>
                <li>Usage data tied to your account (event participation, check-ins, connections).</li>
                <li>In-app communication data linked to your account (chat content and metadata).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data that may be retained</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Security and system logs for abuse prevention and platform safety (up to 30 days).</li>
                <li>Backup copies (removed automatically within 30 days).</li>
                <li>Billing records, if required by law (up to 10 years under German commercial/tax law).</li>
                <li>
                  Aggregated or de-identified crash/analytics data (Firebase Analytics/Crashlytics),
                  where no direct account reference remains.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Deletion timeline</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your account is deactivated immediately after confirmation. Primary account data is
                deleted within 30 days. Backup deletion may take up to an additional 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Support: <a href="mailto:support@vaynconnect.de">support@vaynconnect.de</a>
                <br />
                Vayn UG (haftungsbeschränkt), Metzer Straße 30, 50677 Köln, Germany
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletion;
