import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ChildSafetyStandards = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-8">Child Safety Standards</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Not directed at children</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vayn is not directed at children. You must meet the minimum age required by local law
                to use the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Report abuse or safety concerns</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email us at <a href="mailto:support@vaynconnect.de">support@vaynconnect.de</a> with any abuse or
                safety concerns, including the relevant account or event details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How we respond</h2>
              <p className="text-muted-foreground leading-relaxed">
                We review reports as soon as possible and take appropriate action. This can include
                removing content, restricting access, or deleting accounts, and contacting authorities
                when required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">User content</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users can create profiles, connections, and messages. We handle user content to provide
                the service and remove content that violates our standards when it is reported to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Blocking and unmatching</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users can unmatch or block others so chat interactions are no longer possible.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildSafetyStandards;
