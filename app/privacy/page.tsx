/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDarkMode } from "../context/DarkModeContext";

export default function PrivacyPolicy() {
  const { isDarkMode } = useDarkMode();

  const bgColor = isDarkMode
    ? "bg-gradient-to-b from-[#000000] via-[#001027] to-[#000000]"
    : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const headingColor = isDarkMode ? "text-blue-400" : "text-blue-600";
  const mutedText = isDarkMode ? "text-gray-300" : "text-gray-600";

  return (
    <main className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-500`}>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className={`text-4xl font-bold mb-4 ${headingColor}`}>Privacy Policy</h1>
        <p className={`mb-8 ${mutedText}`}>
          Last Updated: January 13, 2026
        </p>

        <div className="space-y-8">
          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>1. Introduction</h2>
            <p className={mutedText}>
              Welcome to ElectrifAI Philippines Solutions Corp. ("ElectrifAI," "we," "us," or "our"). 
              We are committed to protecting your personal information and your right to privacy. This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>2. Information We Collect</h2>
            <h3 className={`text-xl font-semibold mb-3 mt-4 ${textColor}`}>2.1 Personal Information</h3>
            <p className={mutedText}>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className={`list-disc pl-6 mt-2 space-y-2 ${mutedText}`}>
              <li>Register for an account or express interest in our services</li>
              <li>Fill out forms or contact us through our website</li>
              <li>Subscribe to our newsletters or communications</li>
              <li>Apply for career opportunities</li>
              <li>Participate in surveys or provide feedback</li>
            </ul>
            <p className={`mt-4 ${mutedText}`}>
              This information may include: name, email address, phone number, company name, job title, 
              and any other information you choose to provide.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>2.2 Automatically Collected Information</h3>
            <p className={mutedText}>
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className={`list-disc pl-6 mt-2 space-y-2 ${mutedText}`}>
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>3. How We Use Your Information</h2>
            <p className={mutedText}>We use the information we collect to:</p>
            <ul className={`list-disc pl-6 mt-2 space-y-2 ${mutedText}`}>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and communicate with you</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>4. Information Sharing and Disclosure</h2>
            <p className={mutedText}>
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information in the following circumstances:
            </p>
            <ul className={`list-disc pl-6 mt-2 space-y-2 ${mutedText}`}>
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>5. Cookies and Tracking Technologies</h2>
            <p className={mutedText}>
              We use cookies and similar tracking technologies to track activity on our website and store certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being 
              sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>6. Data Security</h2>
            <p className={mutedText}>
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, no method 
              of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee 
              absolute security.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>7. Data Retention</h2>
            <p className={mutedText}>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>8. Your Rights</h2>
            <p className={mutedText}>Depending on your location, you may have the following rights:</p>
            <ul className={`list-disc pl-6 mt-2 space-y-2 ${mutedText}`}>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to our processing of your information</li>
              <li><strong>Portability:</strong> Request transfer of your information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time</li>
            </ul>
            <p className={`mt-4 ${mutedText}`}>
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>9. Children's Privacy</h2>
            <p className={mutedText}>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children. If we become aware that we have collected personal information 
              from a child without parental consent, we will take steps to delete that information.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>10. International Data Transfers</h2>
            <p className={mutedText}>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have data protection laws that are different from the laws of your country. We 
              take appropriate measures to ensure that your personal information remains protected.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>11. Changes to This Privacy Policy</h2>
            <p className={mutedText}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>12. Contact Us</h2>
            <p className={mutedText}>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className={`mt-4 ${mutedText}`}>
              <p><strong>ElectrifAI Philippines Solutions Corp.</strong></p>
              <p>Email: privacy@electrifaiph.tech</p>
              <p>Website: <a href="/" className="text-blue-500 hover:underline">www.electrifaiph.tech</a></p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>13. Governing Law</h2>
            <p className={mutedText}>
              This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic 
              of the Philippines, including the Data Privacy Act of 2012 (Republic Act No. 10173).
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className={`text-center ${mutedText}`}>
            By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
