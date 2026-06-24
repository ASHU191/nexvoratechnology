"use client";

import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/motion-primitives";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How we protect and use your information"
        description="Nexvora Technology is committed to protecting your privacy and ensuring you have a positive experience on our website."
      />

      <section className="section-shell py-16 md:py-24 bg-white">
        <FadeIn className="mx-auto max-w-3xl space-y-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="text-black mb-6">
              Nexvora Technology ("we", "us", "our") operates the nexvoratechnology.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">2. Information Collection and Use</h2>
            <p className="text-black mb-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>

            <h3 className="text-lg font-semibold text-blue-600 mb-3">Types of Data Collected:</h3>
            <ul className="list-disc pl-6 space-y-2 text-black mb-6">
              <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and location</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on pages</li>
              <li><strong>Cookies:</strong> Session data and user preferences for improved user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">3. Use of Data</h2>
            <p className="text-black mb-4">Nexvora Technology uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-black mb-6">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">4. Security of Data</h2>
            <p className="text-black mb-6">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">5. Contact Us</h2>
            <p className="text-black">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black mt-4">
              <li>Email: nexvoratechnology@gmail.com</li>
              <li>Phone: +92 300 0000000</li>
              <li>Address: Pakistan</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4 mt-8">6. Changes to This Privacy Policy</h2>
            <p className="text-black">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
