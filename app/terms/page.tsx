/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDarkMode } from "../context/DarkModeContext";

export default function TermsOfService() {
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
        <h1 className={`text-4xl font-bold mb-4 ${headingColor}`}>Terms of Service</h1>
        <p className={`mb-8 ${mutedText}`}>
          Last Updated: January 13, 2026
        </p>

        <div className="space-y-8">
          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>1. Agreement to Terms</h2>
            <p className={mutedText}>
              Welcome to ElectrifAI Philippines Solutions Corp. ("ElectrifAI," "Company," "we," "us," or "our"). 
              These Terms of Service ("Terms") govern your access to and use of our website, services, and products 
              (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>2. Use of Our Services</h2>
            <h3 className={`text-xl font-semibold mb-3 mt-4 ${textColor}`}>2.1 Eligibility</h3>
            <p className={mutedText}>
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant 
              that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>2.2 Account Registration</h3>
            <p className={mutedText}>
              To access certain features of our Services, you may be required to register for an account. You agree to:
            </p>
            <ul className={`list-disc pl-6 mt-2 space-y-2 ${mutedText}`}>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>2.3 Prohibited Uses</h3>
            <p className={mutedText}>You agree not to:</p>
            <ul className={`list-disc pl-6 mt-2 space-y-2 ${mutedText}`}>
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Impersonate any person or entity</li>
              <li>Harvest or collect information about other users</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>3. Intellectual Property Rights</h2>
            <h3 className={`text-xl font-semibold mb-3 mt-4 ${textColor}`}>3.1 Our Content</h3>
            <p className={mutedText}>
              All content, features, and functionality of the Services, including but not limited to text, graphics, 
              logos, icons, images, audio clips, software, and the compilation thereof (collectively, "Content"), are 
              the exclusive property of ElectrifAI and are protected by copyright, trademark, and other intellectual 
              property laws.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>3.2 Limited License</h3>
            <p className={mutedText}>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services 
              for your personal or internal business purposes, subject to these Terms.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>3.3 User Content</h3>
            <p className={mutedText}>
              If you submit, post, or transmit any content to our Services, you grant us a worldwide, non-exclusive, 
              royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content in connection 
              with our Services.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>4. Services and Products</h2>
            <h3 className={`text-xl font-semibold mb-3 mt-4 ${textColor}`}>4.1 Service Description</h3>
            <p className={mutedText}>
              ElectrifAI provides energy management solutions, AI-powered analytics, and related services. We reserve 
              the right to modify, suspend, or discontinue any aspect of our Services at any time without notice.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>4.2 Service Availability</h3>
            <p className={mutedText}>
              While we strive to maintain high availability, we do not guarantee that our Services will be uninterrupted, 
              timely, secure, or error-free. We may perform maintenance that temporarily interrupts access to the Services.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>4.3 Pricing and Payment</h3>
            <p className={mutedText}>
              Pricing for our Services is as quoted or displayed on our website. All fees are in the specified currency 
              and are exclusive of applicable taxes unless stated otherwise. Payment terms will be specified in separate 
              agreements or invoices.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>5. Privacy and Data Protection</h2>
            <p className={mutedText}>
              Your privacy is important to us. Our collection and use of personal information is governed by our 
              Privacy Policy. By using our Services, you consent to our collection and use of personal information 
              as outlined in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>6. Disclaimers and Limitations of Liability</h2>
            <h3 className={`text-xl font-semibold mb-3 mt-4 ${textColor}`}>6.1 Disclaimer of Warranties</h3>
            <p className={mutedText}>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR 
              IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>6.2 Limitation of Liability</h3>
            <p className={mutedText}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ELECTRIFAI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>6.3 Indemnification</h3>
            <p className={mutedText}>
              You agree to indemnify, defend, and hold harmless ElectrifAI and its officers, directors, employees, 
              and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the 
              Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>7. Third-Party Links and Services</h2>
            <p className={mutedText}>
              Our Services may contain links to third-party websites or services that are not owned or controlled by 
              ElectrifAI. We have no control over and assume no responsibility for the content, privacy policies, or 
              practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>8. Termination</h2>
            <p className={mutedText}>
              We may terminate or suspend your access to our Services immediately, without prior notice or liability, 
              for any reason, including but not limited to breach of these Terms. Upon termination, your right to use 
              the Services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>9. Governing Law and Dispute Resolution</h2>
            <h3 className={`text-xl font-semibold mb-3 mt-4 ${textColor}`}>9.1 Governing Law</h3>
            <p className={mutedText}>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of the 
              Philippines, without regard to its conflict of law provisions.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>9.2 Dispute Resolution</h3>
            <p className={mutedText}>
              Any disputes arising out of or relating to these Terms or the Services shall be resolved through good 
              faith negotiations. If negotiations fail, disputes shall be submitted to arbitration in accordance with 
              the rules of the Philippine Dispute Resolution Center, Inc.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>10. Changes to Terms</h2>
            <p className={mutedText}>
              We reserve the right to modify these Terms at any time. If we make material changes, we will notify you 
              by updating the "Last Updated" date and, where appropriate, provide additional notice. Your continued use 
              of the Services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>11. Miscellaneous</h2>
            <h3 className={`text-xl font-semibold mb-3 mt-4 ${textColor}`}>11.1 Entire Agreement</h3>
            <p className={mutedText}>
              These Terms constitute the entire agreement between you and ElectrifAI regarding the use of our Services.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>11.2 Severability</h3>
            <p className={mutedText}>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall 
              remain in full force and effect.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>11.3 Waiver</h3>
            <p className={mutedText}>
              No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any 
              other term.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${textColor}`}>11.4 Assignment</h3>
            <p className={mutedText}>
              You may not assign or transfer these Terms without our prior written consent. We may assign these Terms 
              without restriction.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>12. Contact Information</h2>
            <p className={mutedText}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className={`mt-4 ${mutedText}`}>
              <p><strong>ElectrifAI Philippines Solutions Corp.</strong></p>
              <p>Email: legal@electrifaiph.tech</p>
              <p>Website: <a href="/" className="text-blue-500 hover:underline">www.electrifaiph.tech</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className={`text-center ${mutedText}`}>
            By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </main>
  );
}
