import NavbarWrapper from "@/app/components/NavbarWrapper";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Terms and Conditions -  Jeet Learnings",
  description: "Terms and Conditions for using Jeet Learnings services and website.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarWrapper />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Last Updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Welcome to Jeet Learnings. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              These terms apply to all visitors, users, and others who access or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              2. Services Provided
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Jeet Learnings provides career counseling and guidance services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Career path exploration and guidance</li>
              <li>DMIT (Dermatoglyphics Multiple Intelligence Test) assessments</li>
              <li>Psychometric testing and analysis</li>
              <li>Educational counseling and planning</li>
              <li>Study abroad consultation</li>
              <li>Career resources and information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              3. User Accounts and Registration
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              3.1 Account Creation
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              To access certain services, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 mt-6">
              3.2 Age Requirements
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              If you are under 18 years of age, you must have parental or guardian consent to use our services. Parents or guardians who provide consent are responsible for their child's use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              4. Booking and Payment Terms
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              4.1 Service Fees
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              All service fees are clearly displayed on our website. Prices are subject to change without notice, but changes will not affect bookings already confirmed.
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              4.2 Payment
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Payment must be made in full at the time of booking unless otherwise agreed</li>
              <li>We accept payment through secure payment gateways</li>
              <li>All payments are in Indian Rupees (INR) unless specified otherwise</li>
              <li>You are responsible for any bank charges or transaction fees</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 mt-6">
              4.3 Refund and Cancellation Policy
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li><strong>Cancellation by User:</strong> Cancellations made 48 hours before the scheduled session are eligible for a full refund. Cancellations within 48 hours are non-refundable</li>
              <li><strong>Rescheduling:</strong> Sessions can be rescheduled once without charge if requested 24 hours in advance</li>
              <li><strong>No-Show:</strong> Failure to attend a scheduled session without prior notice will result in forfeiture of fees</li>
              <li><strong>Cancellation by Jeet Learnings:</strong> If we cancel a session, you will receive a full refund or the option to reschedule</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              5. Intellectual Property Rights
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, images, videos, and software, is the property of Jeet Learnings and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Reproduce, distribute, or modify any content without written permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Copy or scrape data from our website using automated tools</li>
              <li>Create derivative works based on our content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              6. User Conduct and Prohibited Activities
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Use our services for any unlawful purpose</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, abuse, or harm other users or staff</li>
              <li>Upload viruses or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our website</li>
              <li>Collect or harvest personal information of other users</li>
              <li>Use our services to spam or send unsolicited communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              7. Confidentiality and Data Protection
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We maintain strict confidentiality of all information shared during counseling sessions. However, we may be required to disclose information if:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Required by law or legal process</li>
              <li>Necessary to protect the safety of individuals</li>
              <li>You provide explicit consent for disclosure</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              For more details, please refer to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Jeet Learnings provides services on an "as is" and "as available" basis</li>
              <li>We do not guarantee specific outcomes or career success</li>
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid for the specific service</li>
              <li>We are not responsible for decisions made based on our guidance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              While we strive to provide accurate and helpful guidance:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>We make no warranties about the accuracy or completeness of information</li>
              <li>Career guidance is based on available information and professional judgment</li>
              <li>DMIT and psychometric tests are assessment tools, not definitive predictions</li>
              <li>Individual results and outcomes may vary</li>
              <li>We do not guarantee admission to educational institutions or job placements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              10. Third-Party Links and Services
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these third parties. Your use of third-party services is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              11. Termination
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Suspend or terminate your account for violation of these terms</li>
              <li>Refuse service to anyone at any time</li>
              <li>Modify or discontinue services without notice</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Upon termination, your right to use our services will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in [Your City/State].
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We encourage you to contact us first to resolve any disputes amicably before pursuing legal action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              14. Contact Information
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base text-slate-700 mb-2">
                <strong>Jeet Learnings</strong>
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-2">
                Email: <a href="mailto:support@jeetlearnings.com" className="text-blue-600 hover:underline">support@jeetlearnings.com</a>
              </p>
              <p className="text-sm sm:text-base text-slate-700">
                Phone: +91 9670689777
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Important:</strong> By using Jeet Learnings services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
