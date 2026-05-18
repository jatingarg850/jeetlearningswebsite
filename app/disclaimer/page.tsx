import NavbarWrapper from "@/app/components/NavbarWrapper";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Disclaimer -  Jeet Learnings",
  description: "Important disclaimers regarding Jeet Learnings career counseling services and information.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarWrapper />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Disclaimer
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Last Updated: January 2026
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 sm:p-6 rounded mb-8">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
            Please read this disclaimer carefully before using Jeet Learnings services. By accessing our website and services, you acknowledge and accept the terms outlined below.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              1. General Information Disclaimer
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              The information provided on the Jeet Learnings website and through our services is for general informational and educational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>The completeness, accuracy, reliability, or suitability of the information</li>
              <li>Career paths, educational institutions, or course details</li>
              <li>Salary ranges, job market trends, or employment statistics</li>
              <li>Admission requirements or acceptance rates</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Any reliance you place on such information is strictly at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              2. Career Counseling Services Disclaimer
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              2.1 Professional Guidance
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Our career counseling services provide guidance and recommendations based on:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Information provided by you</li>
              <li>Assessment results and analysis</li>
              <li>Current market trends and research</li>
              <li>Professional experience and expertise</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              However, we do not guarantee:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Specific career outcomes or success</li>
              <li>Admission to any educational institution</li>
              <li>Job placement or employment opportunities</li>
              <li>Specific salary levels or career advancement</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 mt-6">
              2.2 Individual Responsibility
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              All career decisions and actions taken based on our guidance are your sole responsibility. We strongly recommend that you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Conduct your own research and due diligence</li>
              <li>Verify information with official sources</li>
              <li>Consider multiple perspectives before making decisions</li>
              <li>Consult with parents, teachers, and other advisors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              3. DMIT and Psychometric Testing Disclaimer
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              3.1 Nature of Assessments
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              DMIT (Dermatoglyphics Multiple Intelligence Test) and psychometric assessments are tools designed to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Identify potential strengths and aptitudes</li>
              <li>Provide insights into personality traits and learning styles</li>
              <li>Suggest suitable career paths based on patterns</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 mt-6">
              3.2 Limitations of Tests
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              <strong>Important:</strong> These assessments are NOT:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Medical diagnoses or psychological evaluations</li>
              <li>Definitive predictions of future success or abilities</li>
              <li>Substitutes for professional medical or psychological advice</li>
              <li>Guarantees of career suitability or aptitude</li>
              <li>Absolute measures of intelligence or capability</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 mt-6">
              3.3 Test Results Interpretation
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Test results should be considered as one of many factors in career planning. Individual effort, dedication, education, and circumstances play crucial roles in determining success. Results may vary based on various factors and should not be the sole basis for major life decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              4. Educational Institution Information
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Information about educational institutions, courses, fees, and admission requirements is:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Gathered from publicly available sources and institutional websites</li>
              <li>Subject to change without notice by the institutions</li>
              <li>Provided for informational purposes only</li>
              <li>Not a substitute for official institutional communications</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We are not affiliated with or endorsed by any educational institutions mentioned on our website unless explicitly stated. Always verify information directly with the institutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              5. Study Abroad Services Disclaimer
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Our study abroad consultation services provide guidance on:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>University selection and application processes</li>
              <li>Visa requirements and documentation</li>
              <li>Scholarship opportunities</li>
              <li>Country-specific information</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              However, we do not guarantee:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>University admission or acceptance</li>
              <li>Visa approval or immigration success</li>
              <li>Scholarship awards or financial aid</li>
              <li>Specific outcomes in the application process</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Immigration laws, visa policies, and admission criteria are subject to change and vary by country. You are responsible for complying with all legal requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              6. Financial Information Disclaimer
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Cost estimates, salary ranges, and financial information provided are:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Approximate figures based on available data</li>
              <li>Subject to variation based on location, institution, and time</li>
              <li>Not guaranteed or binding</li>
              <li>For informational purposes only</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We are not financial advisors and do not provide financial planning services. Consult with qualified financial professionals for specific financial advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              7. Third-Party Content and Links
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites, resources, or references. We:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Do not endorse or guarantee the accuracy of third-party content</li>
              <li>Are not responsible for the availability or content of linked sites</li>
              <li>Do not control third-party privacy policies or practices</li>
              <li>Are not liable for any damages arising from third-party interactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              8. No Professional Relationship
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The use of our website or services does not create a professional-client relationship beyond the scope of career counseling services. Our services are not a substitute for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Medical or psychological treatment</li>
              <li>Legal advice or representation</li>
              <li>Financial planning or investment advice</li>
              <li>Academic tutoring or coaching</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, Jeet Learnings and its staff, counselors, and affiliates shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Any decisions made based on our guidance or information</li>
              <li>Career outcomes or lack of success in chosen paths</li>
              <li>Admission rejections or visa denials</li>
              <li>Financial losses or opportunity costs</li>
              <li>Indirect, consequential, or incidental damages</li>
              <li>Errors or omissions in information provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              10. Changes and Updates
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              This disclaimer may be updated periodically to reflect changes in our services or legal requirements. Continued use of our services after changes constitutes acceptance of the updated disclaimer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              If you have questions about this disclaimer or need clarification, please contact us:
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
            <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold mb-2">
                IMPORTANT NOTICE:
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By using Jeet Learnings services, you acknowledge that you have read, understood, and accepted this disclaimer. You agree that all decisions and actions taken based on our services are your own responsibility, and you will not hold Jeet Learnings liable for any outcomes.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
