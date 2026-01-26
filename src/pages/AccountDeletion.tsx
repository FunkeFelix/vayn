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
          <h1 className="text-4xl font-bold gradient-text mb-8">Account Deletion</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Delete your account in the app</h2>
              <p className="text-muted-foreground leading-relaxed">
                Open Vayn → Profile → Delete account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">What gets deleted</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your account, profile, and connections are removed when you delete your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How long it takes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Data deletion happens as soon as possible. Some data may take additional time to be
                removed from backups if needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Need help?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you cannot access the app or want us to delete your account manually, email{" "}
                <a href="mailto:support@vaynconnect.de">support@vaynconnect.de</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletion;
