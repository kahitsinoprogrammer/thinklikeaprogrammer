import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Think Like A Programmer",
  description:
    "Learn how Think Like A Programmer collects, uses, and protects personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We may collect the following information when you enroll, contact us, submit forms, make a payment, or participate in a course:",
    ],
    items: [
      "Full name",
      "Email address",
      "Contact information",
      "School or organization information, when applicable",
      "Proof of current enrollment for student-rate verification",
      "Payment information or proof of payment",
      "Course enrollment details",
      "Messages, questions, and support requests",
      "Capstone or project information submitted as part of a course",
      "Information you voluntarily provide through forms, surveys, Discord, Google Classroom, or other course-related platforms",
    ],
    after:
      "For student-rate enrollment, we may request proof that you are currently enrolled, such as a valid school ID or Certificate of Enrollment.",
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: ["We may use your information to:"],
    items: [
      "Process course enrollment",
      "Verify payments",
      "Verify eligibility for student pricing",
      "Add learners to Google Classroom, Discord, or other learning platforms",
      "Provide course access and learning materials",
      "Respond to questions and support requests",
      "Schedule one-on-one consultations when necessary",
      "Track course participation and requirements",
      "Issue certificates",
      "Administer capstone projects",
      "Improve our courses, website, and services",
      "Send important enrollment or course-related announcements",
      "Maintain records for administrative, accounting, or legal purposes",
    ],
    after:
      "The course currently uses an asynchronous learning setup, with course materials delivered through Google Classroom and support made available through group communication channels and one-on-one calls for more complex concerns.",
  },
  {
    title: "3. Payment Information",
    paragraphs: [
      "Think Like A Programmer may collect proof of payment and related transaction details for the purpose of verifying enrollment.",
      "We do not intentionally collect your banking passwords, PINs, one-time passwords, or other confidential login credentials.",
      "Payment transactions may be processed through third-party financial service providers. Their own privacy policies and terms may also apply.",
    ],
  },
  {
    title: "4. Third-Party Platforms",
    paragraphs: ["Our courses and services may use third-party platforms such as:"],
    items: [
      "Google Classroom",
      "Google services",
      "Discord",
      "Payment providers",
      "Website hosting providers",
      "Email or messaging services",
    ],
    after:
      "When you use these services, their own privacy policies and terms may apply. We are not responsible for the independent data practices of third-party platforms.",
  },
  {
    title: "5. Student IDs and Enrollment Documents",
    paragraphs: [
      "If you submit a school ID or Certificate of Enrollment to qualify for a student rate, we will use it only for the purpose of verifying your eligibility, unless retention is required for legitimate administrative, accounting, or legal purposes.",
      "You should avoid submitting unnecessary sensitive information that is not required for verification.",
    ],
  },
  {
    title: "6. Capstone and Project Information",
    paragraphs: [
      "Learners may be encouraged to work on their own practical project ideas, including projects related to school, work, business, organizations, or communities.",
      "You are responsible for ensuring that any information, files, datasets, or materials you use in your project are lawfully obtained and appropriate to share.",
      "Do not upload confidential, proprietary, personal, or sensitive information belonging to another person or organization unless you have proper authority to do so.",
    ],
  },
  {
    title: "7. Certificates",
    paragraphs: [
      "We may use your name and course completion information for the purpose of issuing:",
    ],
    items: ["Certificate of Training Completion", "Certificate of Capstone Project"],
    after:
      "The course guide provides for these two certificates upon completion of the applicable requirements.",
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for:",
    ],
    items: [
      "Course administration",
      "Student support",
      "Certificate issuance",
      "Financial or accounting records",
      "Legal or regulatory compliance",
      "Legitimate business purposes",
    ],
    after:
      "When information is no longer necessary, we may securely delete, anonymize, or archive it as appropriate.",
  },
  {
    title: "9. Data Security",
    paragraphs: [
      "We take reasonable administrative and technical measures to protect personal information from unauthorized access, loss, misuse, alteration, or disclosure.",
      "However, no online system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "10. Your Rights",
    paragraphs: ["Subject to applicable law, you may request to:"],
    items: [
      "Access the personal information we hold about you",
      "Correct inaccurate information",
      "Request deletion of certain information",
      "Withdraw consent where consent is the basis for processing",
      "Ask questions about how your information is handled",
    ],
    after:
      "Some information may need to be retained where required by law or for legitimate administrative or financial purposes.",
  },
  {
    title: "11. Cookies and Website Analytics",
    paragraphs: ["Our website may use cookies or similar technologies to:"],
    items: [
      "Maintain website functionality",
      "Understand website traffic",
      "Improve user experience",
      "Measure advertising performance",
    ],
    after:
      "If analytics or advertising tools are added in the future, this Privacy Policy may be updated to reflect those services.",
  },
  {
    title: "12. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time.",
      "The latest version will be posted on this website with its updated effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f0f5ff] text-[#101a35]">
      <header className="border-b border-[#dce8ff] bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="/" className="font-display font-extrabold tracking-tight">
            Think Like A Programmer
          </a>
          <a href="/" className="text-sm font-bold text-[#155dfc]">
            Back to home
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14 lg:px-8 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
          Think Like A Programmer
        </p>
        <h1 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          This policy explains how we collect, use, retain, and protect your
          personal information when you engage with our courses and services.
        </p>

        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-extrabold tracking-[-.03em]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 leading-7 text-slate-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="list-disc space-y-2 pl-5 marker:text-[#155dfc]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.after && <p>{section.after}</p>}
              </div>
            </section>
          ))}

          <section className="rounded-2xl bg-[#101a35] p-6 text-white sm:p-8">
            <h2 className="font-display text-2xl font-extrabold">13. Contact</h2>
            <p className="mt-4 leading-7 text-slate-300">
              For privacy-related concerns, contact Think Like A Programmer at{" "}
              <a
                className="font-semibold text-[#ffe063] underline underline-offset-4"
                href="mailto:adbata26@gmail.com"
              >
                adbata26@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
      <footer className="border-t border-[#dce8ff] bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-center px-5 py-8 lg:px-8">
          <img src="/d.jpg" alt="BIR registered training provider badge" className="h-20 w-auto object-contain" />
        </div>
      </footer>
    </main>
  );
}
