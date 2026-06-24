"use client";

import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/motion-primitives";

export default function TermsConditions() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Our service terms and legal agreements"
        description="Please read these terms carefully before using Nexvora Technology services and products."
      />

      <section className="section-shell py-16 md:py-24 bg-white">
        <FadeIn className="mx-auto max-w-3xl space-y-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-black mb-4">1. Terms</h2>
            <p className="text-black mb-6">
              By accessing and using the nexvoratechnology.com website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
            <p className="text-black mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Nexvora Technology's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2 text-black mb-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">3. Disclaimer</h2>
            <p className="text-black mb-6">
              The materials on Nexvora Technology's website are provided on an 'as is' basis. Nexvora Technology makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">4. Limitations</h2>
            <p className="text-black mb-6">
              In no event shall Nexvora Technology or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Nexvora Technology or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">5. Accuracy of Materials</h2>
            <p className="text-black mb-6">
              The materials appearing on Nexvora Technology's website could include technical, typographical, or photographic errors. Nexvora Technology does not warrant that any of the materials on the website are accurate, complete, or current. Nexvora Technology may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">6. Links</h2>
            <p className="text-black mb-6">
              Nexvora Technology has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Nexvora Technology of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">7. Modifications</h2>
            <p className="text-black mb-6">
              Nexvora Technology may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">8. Governing Law</h2>
            <p className="text-black mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">9. Contact Information</h2>
            <p className="text-black">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black mt-4">
              <li>Email: nexvoratechnology@gmail.com</li>
              <li>Phone: +92 300 0000000</li>
              <li>Address: Pakistan</li>
            </ul>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
