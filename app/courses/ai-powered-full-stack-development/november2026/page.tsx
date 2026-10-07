"use client";

import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleHelp,
  Code2,
  Database,
  GraduationCap,
  Laptop,
  Layers3,
  Menu,
  MessageCircle,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import Script from "next/script";
import { useState } from "react";

const modules = [
  [
    "01",
    "Programming foundations",
    "Logic, computational thinking, variables, conditions, loops, functions, and how to break a big problem into smaller steps.",
    Code2,
  ],
  [
    "02",
    "Web development",
    "HTML, CSS, JavaScript, forms, responsive layouts, and the building blocks behind websites and web applications.",
    Layers3,
  ],
  [
    "03",
    "Frontend development",
    "Build modern, interactive interfaces with React.js, components, state, forms, data handling, and routing.",
    Rocket,
  ],
  [
    "04",
    "Backend development",
    "Python fundamentals, backend logic, APIs, MVC architecture, and connecting frontend apps to backend services.",
    BrainCircuit,
  ],
  [
    "05",
    "Databases",
    "Relational and non-relational databases, basic database design, and CRUD operations for application data.",
    Database,
  ],
  [
    "06",
    "Your practical project",
    "Choose a real problem, define users and goals, plan features and data, then build your application’s core functions.",
    Users,
  ],
];
const curriculum = [
  { number: "1", title: "Weeks 1–2: Programming and Computer Science Foundations", intro: "Magsisimula tayo sa foundations na madalas nalalaktawan ng beginners. Matututunan mo ang:", items: ["Programming logic at computational thinking", "Variables, conditions, loops, at functions", "Basic problem-solving at algorithmic thinking", "Paano gumagana ang computers at web applications", "Paano mag-break down ng malaking problema sa mas maliliit na steps"] },
  { number: "2", title: "Weeks 3–4: Web Development Fundamentals", intro: "Dito mo matututunan ang building blocks ng websites at web applications. Kasama rito ang:", items: ["HTML, CSS, at JavaScript fundamentals", "Paano gumagana ang websites at web apps", "Forms, user input, at basic interactivity", "Basic page layouts at responsive design", "Pag-aayos at pag-organize ng code"] },
  { number: "3", title: "Weeks 5–7: Frontend Development with React.js", intro: "Matututunan mong gumawa ng modern at interactive user interfaces gamit ang React.js. Kasama rito ang:", items: ["Components at reusable interface design", "Props, state, at user interaction", "Forms at data handling", "Basic routing at page navigation", "Pagbuo ng responsive at practical user interfaces"] },
  { number: "4", title: "Weeks 8–10: Backend Development with Python", intro: "Dito naman natin aaralin kung paano gumagana ang server side ng isang web application. Kasama rito ang:", items: ["Python fundamentals para sa web development", "Backend logic at APIs", "MVC Architecture", "Handling requests, responses, at application data", "Pag-connect ng frontend app sa backend services"] },
  { number: "5", title: "Weeks 11–12: Databases and Polyglot Persistence", intro: "Matututunan mong mag-store, mag-retrieve, at mag-manage ng data sa web applications. Kasama rito ang:", items: ["Relational at non-relational databases", "Basic database design", "CRUD operations: Create, Read, Update, at Delete", "Pagpili ng tamang database para sa isang feature", "Introduction to Polyglot Persistence, o paggamit ng iba’t ibang database depende sa pangangailangan ng app"] },
  { number: "6", title: "Weeks 13–14: Project Planning and Development", intro: "Dito mo sisimulan ang sariling practical project. Magwo-work ka sa:", items: ["Pag-identify ng real problem", "Pag-define ng target users at project goals", "Pag-set ng realistic project scope", "Pagplano ng features, user flow, at database structure", "Pagbuo ng core functions ng web application mo"] },
  { number: "7", title: "Week 15: AI-Assisted Development and Responsible Use of AI", intro: "Matapos mong maintindihan ang core concepts ng programming at web development, aaralin natin kung paano gamitin ang AI nang mas maayos, responsible, at may tunay na understanding. Kasama rito ang:", items: ["Paano gamitin ang AI para mag-brainstorm ng features at solutions", "Paano gumawa ng effective prompts para sa coding tasks", "Paano gamitin ang AI sa debugging at pag-intindi ng errors", "Paano mag-review, mag-test, at mag-improve ng AI-generated code", "Kailan hindi dapat umasa sa AI", "Code quality, privacy, security, at responsible use of AI tools", "Paano manatiling may ownership at understanding sa sarili mong project"], closing: "Hindi goal na basta makapag-generate ng code gamit ang AI. Ang goal ay maging developer na marunong mag-isip, mag-validate, at gumawa ng mas maayos na solutions gamit ang AI bilang support tool." },
  { number: "8", title: "Week 16: Portfolio Preparation", intro: "Sa final week, ihahanda mo ang project mo para magamit at maipakita online. Kasama rito ang:", items: ["Client Proposal", "Statement of the Problem", "Solution to the problem", "Business Architecture", "Technology Architecture"] },
];

const faqs = [
  [
    "Kailangan ba may coding experience na ako?",
    "Hindi. Designed ang course para sa beginners. Magsisimula tayo sa programming foundations bago pumunta sa paggawa ng full-stack web applications.",
  ],
  [
    "Kailangan bang Computer Science o IT graduate?",
    "Hindi. Para ito sa students at non-IT professionals na gustong matutong gumamit ng coding para gumawa ng practical tools at solutions.",
  ],
  [
    "Live ba ang course?",
    "Hindi required ang live sessions. Asynchronous ang course sa Google Classroom, with weekly lessons, activities, and deadlines. May group chat for questions; complex concerns can be addressed in a one-on-one call.",
  ],
  [
    "Puwede ba akong magdala ng sariling project idea?",
    "Oo, encouraged ito. It can be a work process, school idea, organization tool, or system you have wanted to build. We’ll make its scope clear, realistic, and achievable within 16 weeks.",
  ],
  [
    "Paano gagamitin ang AI sa course?",
    "AI is a learning and development tool for brainstorming, explaining concepts, debugging, and improving code. You’ll learn to review and understand its output, not simply copy and paste it.",
  ],
  [
    "Guaranteed ba na magkakatrabaho ako pagkatapos?",
    "Hindi iyon ang pangunahing goal ng course. Ang goal ay matutunan mong gamitin ang programming bilang tool para masolusyunan ang mga problemang kilala mo na sa trabaho, school, business, organization, community, o personal projects.",
  ],
  [
    "Ano ang kailangan para makasali?",
    "Kailangan mo ng laptop o desktop computer, stable internet connection, at sapat na oras bawat linggo para matapos ang lessons, activities, at project requirements. Mas mahalaga kaysa prior experience ang willingness mong matuto, mag-experiment, at gumawa ng sarili mong solutions.",
  ],
];
function Logo() {
  return (
    <a
      href="/"
      className="font-display flex items-center gap-2 font-extrabold tracking-tight"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#155dfc] text-lg text-white">
        T
      </span>
      <span>
        Think Like
        <br className="sm:hidden" /> A Programmer
      </span>
    </a>
  );
}
function CTA({
  children,
  outline = false,
}: {
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <a
      href="mailto:adbata26@gmail.com?subject=AI-Powered%20Full%20Stack%20Development%20%E2%80%94%20November%202026"
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${outline ? "border border-white/45 text-white hover:bg-white/10" : "bg-[#ffe063] text-[#101a35] hover:bg-[#ffef9e]"}`}
    >
      {children}
      <ArrowRight
        size={17}
        className="transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}

export default function November2026Course() {
  const [menu, setMenu] = useState(false);
  return (
    <main className="course-page overflow-hidden bg-white">
      <header className="sticky top-0 z-40 border-b border-[#dce8ff] bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#curriculum">Curriculum</a>
            <a href="#format">Course format</a>
            <a href="#faq">FAQs</a>
          </div>
          <div className="hidden md:block">
            <a
              href="#enroll"
              className="rounded-full bg-[#155dfc] px-5 py-3 text-sm font-bold text-white hover:bg-[#0c46d4]"
            >
              Enroll now
            </a>
          </div>
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            <Menu />
          </button>
        </nav>
        {menu && (
          <div className="border-t border-[#dce8ff] px-5 py-4 md:hidden">
            <div className="grid gap-4 text-sm font-semibold">
              <a href="#curriculum" onClick={() => setMenu(false)}>
                Curriculum
              </a>
              <a href="#format" onClick={() => setMenu(false)}>
                Course format
              </a>
              <a href="#enroll" onClick={() => setMenu(false)}>
                Enroll now
              </a>
            </div>
          </div>
        )}
      </header>
      <section className="relative bg-[#155dfc] text-white">
        <div className="hero-orbit absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-18 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Left Column */}
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">
              November 2026 · 16 weeks
            </p>

            <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.04] tracking-[-.065em] sm:text-6xl lg:text-7xl">
              Stop only having ideas.
              <br />
              <span className="text-[#ffe063]">Learn to build</span> them.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              A practical full-stack development program for beginners,
              students, and non-IT professionals who want to turn real problems
              into useful web applications, with AI as support, not a substitute
              for thinking.
            </p>

            <p className="mt-5 text-sm font-semibold text-blue-100">
              Asynchronous on Google Classroom · Beginner-friendly · Finish at
              your own time
            </p>
          </div>

          {/* Right Column: place your image, video, form, or custom component here. */}
          <div className="flex min-h-64 items-center justify-center lg:min-h-full">
            <img
              src="/ab.png"
              height={200}
              width={500}
              className="border-4 border-white rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#f0f5ff] py-20 sm:py-24">
        <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-[#ffe063]/45 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
              Baka ikaw ito
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] text-[#101a35] sm:text-5xl">
              Para sa&apos;yo itong course na &apos;to kung…
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Hindi mo kailangang maging IT graduate para magsimulang gumawa ng
              useful, real-world applications.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              [
                BriefcaseBusiness,
                "May app idea ka para sa business mo",
                "May problem kang gustong ayusin sa business pero hindi mo alam kung paano sisimulan ang paggawa ng app.",
              ],
              [
                GraduationCap,
                "May school o capstone project ka",
                "Gusto mong gumawa ng project na hindi lang matapos, kundi may totoong gamit at maipagmamalaki mo.",
              ],
              [
                Users,
                "Galing ka sa non-IT background",
                "Gusto mong magkaroon ng practical na introduction sa development—step by step, kahit beginner ka.",
              ],
              [
                Sparkles,
                "Gusto mong gamitin ang AI nang may understanding",
                "Gusto mong makapag-code gamit ang AI nang hindi basta kumokopya ng generated code na hindi mo naiintindihan.",
              ],
            ].map(([Icon, title, description], index) => {
              const I = Icon as typeof BriefcaseBusiness;
              return (
                <article
                  key={String(title)}
                  className="lift group relative overflow-hidden rounded-3xl border border-[#b7d1ff] bg-white p-7 shadow-sm sm:p-8"
                >
                  <span className="font-display absolute right-6 top-5 text-6xl font-extrabold leading-none text-[#dce8ff]">
                    0{index + 1}
                  </span>
                  <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#155dfc] text-white">
                      <I size={23} strokeWidth={2.4} />
                    </span>
                    <h3 className="font-display mt-6 max-w-sm text-xl font-extrabold tracking-[-.03em] text-[#101a35]">
                      {String(title)}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
                      {String(description)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section id="format" className="mx-auto max-w-7xl px-5 py-22 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [CalendarDays, "Starts", "November 09, 2026"],
            [BadgeCheck, "Duration", "16 weeks"],
            [Laptop, "Learning mode", "Asynchronous"],
            [MessageCircle, "Where", "Google Classroom + Discord"],
          ].map(([Icon, label, value]) => {
            const I = Icon as typeof CalendarDays;
            return (
              <div
                key={String(label)}
                className="rounded-2xl border border-[#b7d1ff] p-5"
              >
                <I className="text-[#155dfc]" size={23} />
                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {String(label)}
                </p>
                <p className="font-display mt-1 text-lg font-extrabold">
                  {String(value)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f0f5ff] py-22">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xl font-bold uppercase tracking-[.18em] text-[#155dfc]">
              Learn on your schedule
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
              Flexible learning, with real support.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6">
              <CalendarDays className="text-[#155dfc]" size={24} />
              <h3 className="font-display mt-5 text-lg font-extrabold">
                No live sessions
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pre-recorded lessons and resources are uploaded every week, so
                you can study and complete your work at your own time.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <MessageCircle className="text-[#155dfc]" size={24} />
              <h3 className="font-display mt-5 text-lg font-extrabold">
                Discord support
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use our Discord chat to ask questions. For complex concerns, we
                can schedule a one-on-one call.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="curriculum" className="mx-auto max-w-7xl px-5 py-22 lg:px-8">
        <p className="text-xl font-bold uppercase tracking-[.18em] text-[#155dfc]">
          What you’ll learn
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
          From programming foundations to your own web application.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {curriculum.map((module) => (
            <article
              key={module.number}
              className="rounded-2xl border border-[#155dfc] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#155dfc] text-2xl font-extrabold text-white">
                  {module.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold leading-6">
                    {module.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-slate-700">
                    {module.intro}
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                    {module.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {module.closing && (
                    <p className="mt-5 text-sm leading-6 text-slate-700">
                      {module.closing}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="hidden mt-6 rounded-2xl bg-[#101a35] p-7 text-white sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-[#ffe063]">
            Weeks 15–16
          </p>
          <h3 className="font-display mt-3 text-2xl font-extrabold">
            Use AI responsibly, then prepare your portfolio.
          </h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Learn to prompt, debug, review, test, and improve code with AI as a
            support tool. Finish by preparing your project’s proposal, problem
            statement, solution, business architecture, and technology
            architecture.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-[#155dfc] py-22 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#ffe063]">
            Before you enroll
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">
            Frequently Asked
            <br />
            Questions
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <article
                key={question}
                className="rounded-2xl border border-white/30 bg-[#0845ce] p-6"
              >
                <h3 className="font-display text-lg font-extrabold text-white">
                  {question}
                </h3>
                <p className="mt-5 text-sm leading-6 text-blue-50">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="enroll" className="mx-auto max-w-7xl px-5 py-22 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
            November 2026 intake
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
            Enroll in the course
          </h2>
          <p className="mt-4 text-slate-600">
            Course starts on{" "}
            <strong className="text-[#101a35]">November 9, 2026</strong>.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[#b7d1ff] p-7 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Regular price
            </p>
            <p className="font-display mt-3 text-4xl font-extrabold text-[#101a35]">
              ₱4,999
            </p>
          </article>
          <article className="rounded-2xl bg-[#155dfc] p-7 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-[#ffe063]">
              Early bird price
            </p>
            <p className="font-display mt-3 text-4xl font-extrabold">₱3,499</p>
            <p className="mt-3 text-sm leading-6 text-blue-100">
              Enroll from October 1–31, 2026 to get the early-bird rate.
            </p>
          </article>
        </div>
        <div className="mt-24 border-t border-[#dce8ff] pt-20">
          <div>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
                Payment options
              </p>
              <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em]">
                Choose your payment method.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-slate-600">
                Scan a QR code below to make your payment.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-[#b7d1ff] bg-white p-5 text-center shadow-sm">
                <div className="flex h-[26rem] items-center justify-center rounded-xl bg-[#f0f5ff] p-3">
                  <img
                    src="/c.jpg"
                    alt="Security Bank payment QR code"
                    className="max-h-[24rem] w-auto max-w-full"
                  />
                </div>
                <p className="font-display mt-5 text-lg font-extrabold">
                  Security Bank
                </p>
              </article>
              <article className="rounded-2xl border border-[#b7d1ff] bg-white p-5 text-center shadow-sm">
                <div className="flex h-[26rem] items-center justify-center rounded-xl bg-[#f0f5ff] p-3">
                  <img
                    src="/cc.jpg"
                    alt="GCash payment QR code"
                    className="max-h-[24rem] w-auto max-w-full"
                  />
                </div>
                <p className="font-display mt-5 text-lg font-extrabold">
                  GCash
                </p>
              </article>
              <article className="rounded-2xl border border-[#b7d1ff] bg-white p-5 text-center shadow-sm">
                <div className="flex h-[26rem] items-center justify-center rounded-xl bg-[#f0f5ff] p-3">
                  <img
                    src="/ccc.jpg"
                    alt="MariBank payment QR code"
                    className="max-h-[24rem] w-auto max-w-full"
                  />
                </div>
                <p className="font-display mt-5 text-lg font-extrabold">
                  MariBank
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-[#dce8ff] pt-20">
          <div className="grid gap-10 rounded-[2rem] border border-[#b7d1ff] p-7 lg:grid-cols-[.9fr_1.1fr] lg:p-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
                After payment
              </p>
              <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
                Complete your enrollment.
              </h2>
              <ol className="mt-8 grid gap-5 text-base leading-7 text-slate-600">
                {[
                  "Fill out the enrollment form below.",
                  "Enter your details and upload your proof of payment.",
                  "Allow a few minutes up to 24 hours for enrollment processing.",
                  "You’ll receive an email invitation to Google Classroom and the Discord community.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ffe063] text-xs font-extrabold text-[#101a35]">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="min-h-[44rem] overflow-hidden rounded-2xl border border-[#b7d1ff] bg-white">
              <iframe
                className="clickup-embed clickup-dynamic-height h-full min-h-[44rem] w-full"
                src="https://forms.clickup.com/1300400000009558/p/f/14ypkw121ap-516/SCUVU9RQIWL0HX0K95/form"
                title="Course enrollment form"
                style={{ background: "transparent", border: "1px solid #ccc" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-[#dce8ff] pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
                Proof of legitimacy
              </p>
              <h2 className="font-display mt-3 text-5xl font-extrabold tracking-[-.06em] text-[#155dfc] sm:text-6xl">
                Is this legitimate?
              </h2>
              <h3 className="font-display mt-10 text-xl font-extrabold">
                Proof of Legitimacy
              </h3>
              <p className="mt-2 max-w-2xl text-lg leading-8 text-slate-700">
                This training is offered by a BIR-registered training provider.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                For transparency and verification, you may scan the QR code
                below to view the registration details and confirm the
                legitimacy of the business.
              </p>
            </div>
            <div className="grid min-h-72 place-items-center rounded-2xl border-2 border-dashed border-[#8eb5ff] p-8 text-center">
              <div>
                <img src="/d.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-[#dce8ff] pt-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
              Course certificates
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] text-[#155dfc] sm:text-5xl">
              Do you give certificate?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Yes. I will give two certificates from the course:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">
              <li>
                <strong>Certificate of Training Completion</strong> — given
                after you complete the full 16-week course and its requirements.
              </li>
              <li>
                <strong>Certificate of Capstone Project</strong> — given after
                you complete your capstone project. Your chosen client or
                beneficiary will also sign this certificate to acknowledge the
                project you completed for them.
              </li>
            </ul>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:px-0 pr-5">
            <div className="grid aspect-[1.45] place-items-center rounded-xl border-2 border-dashed border-[#8eb5ff] bg-[#f0f5ff] p-2 lg:p-4 text-center">
              <div>
                <img src="/f.png" />
              </div>
            </div>

            <div className="grid aspect-[1.45] place-items-center rounded-xl border-2 border-dashed border-[#8eb5ff] bg-[#f0f5ff] p-2 lg:p-4  text-center">
              <div>
                <img src="/ff.png" />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        async
        src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"
        strategy="afterInteractive"
      />
      <footer className="border-t border-[#dce8ff]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-slate-500">
              Programming is a tool for solving problems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm font-semibold text-slate-600">
            <a href="/#courses">Courses</a>
            <a href="/about">About</a>
            <a href="mailto:adbata26@gmail.com">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="flex gap-4 text-sm font-semibold">
            <a href="https://www.facebook.com/thinklikeaprogrammer1">
              Facebook
            </a>
            <a href="mailto:adbata26@gmail.com">adbata26@gmail.com</a>
          </div>
          <img
            src="/d.jpg"
            alt="BIR registered training provider badge"
            className="h-20 w-auto object-contain"
          />
        </div>
        <p className="border-t border-[#dce8ff] py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Think Like A Programmer. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
