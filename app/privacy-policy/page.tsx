import NavbarWrapper from "@/app/components/NavbarWrapper";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Privacy Policy -  Jeet Learnings",
  description: "Privacy Policy for Jeet Learnings -  Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarWrapper />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Last Updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Welcome to Jeet Learnings. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              By using our website and services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              2.1 Personal Information
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Register for career counseling services</li>
              <li>Book a consultation or DMIT/Psychometric test</li>
              <li>Subscribe to our newsletter or blog</li>
              <li>Contact us through forms or email</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Educational background and career interests</li>
              <li>Date of birth and demographic information</li>
              <li>Payment and billing information</li>
              <li>Test results and assessment data</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 mt-6">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website and search terms</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>To provide and maintain our career counseling services</li>
              <li>To process your bookings and payments</li>
              <li>To conduct DMIT and psychometric assessments</li>
              <li>To communicate with you about services, updates, and promotions</li>
              <li>To improve our website and user experience</li>
              <li>To analyze usage patterns and trends</li>
              <li>To comply with legal obligations</li>
              <li>To protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and providing services (e.g., payment processors, email service providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Encryption of sensitive data during transmission</li>
              <li>Secure server infrastructure and regular security audits</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular backup and disaster recovery procedures</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              To exercise these rights, please contact us at <a href="mailto:privacy@jeetlearnings.com" className="text-blue-600 hover:underline">privacy@jeetlearnings.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our services are intended for students and parents. We collect information from minors only with parental consent. If you believe we have collected information from a child without proper consent, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              10. Contact Us
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base text-slate-700 mb-2">
                <strong>Jeet Learnings</strong>
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-2">
                Email: <a href="mailto:privacy@jeetlearnings.com" className="text-blue-600 hover:underline">privacy@jeetlearnings.com</a>
              </p>
              <p className="text-sm sm:text-base text-slate-700">
                Phone: +91 9670689777
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
