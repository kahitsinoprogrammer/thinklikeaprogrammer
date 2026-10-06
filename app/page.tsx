"use client";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Menu,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
const audiences = [
  [BriefcaseBusiness, "Business Owner", "Build tools for your business."],
  [
    GraduationCap,
    "Student",
    "Turn your school or capstone idea into a working project.",
  ],
  [
    BrainCircuit,
    "Teacher",
    "Create practical tools for teaching and learning.",
  ],
  [Code2, "Professional", "Automate or improve processes in your workplace."],
  [
    Sparkles,
    "Organization",
    "Build technology for your community or advocacy.",
  ],
];
const skills = [
  [
    "01",
    "Programming Foundations",
    "Learn logic, conditions, loops, functions, and problem solving.",
  ],
  [
    "02",
    "Web Development",
    "Understand how websites and web applications work.",
  ],
  [
    "03",
    "Frontend Development",
    "Build modern and interactive user interfaces.",
  ],
  [
    "04",
    "Backend Development",
    "Learn how applications process requests and business logic.",
  ],
  [
    "05",
    "Databases",
    "Store, organize, retrieve, and manage application data.",
  ],
  [
    "06",
    "AI-Assisted Development",
    "Use AI to brainstorm, debug, understand errors, and improve code thoughtfully.",
  ],
];
const reasons = [
  [
    "Build With Purpose",
    "Learn programming through real problems instead of memorizing random code.",
  ],
  [
    "Understand What You Build",
    "AI can help you code, but understanding still matters.",
  ],
  [
    "Learn at Your Own Pace",
    "Courses accommodate students and working professionals.",
  ],
  [
    "Get Help When You’re Stuck",
    "Learn with a community and get extra guidance for tougher questions.",
  ],
];
function Logo() {
  return (
    <a
      href="#home"
      className="font-display flex items-center gap-2 font-extrabold tracking-tight text-[#101a35]"
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
  href = "#courses",
  children,
  inverse = false,
}: {
  href?: string;
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${inverse ? "bg-white text-[#155dfc] hover:bg-[#eaf1ff]" : "bg-[#155dfc] text-white hover:bg-[#0c46d4]"}`}
    >
      {children}
      <ArrowRight
        size={17}
        className="transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}
export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main id="home" className="overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-[#dce8ff] bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
            <a href="#faqs">FAQs</a>
          </div>
          <div className="hidden md:block">
            <CTA>Explore Courses</CTA>
          </div>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            <Menu />
          </button>
        </nav>
        {open && (
          <div className="border-t border-[#dce8ff] bg-white px-5 py-4 md:hidden">
            <div className="grid gap-4 font-semibold">
              <a onClick={() => setOpen(false)} href="#courses">
                Courses
              </a>
              <a onClick={() => setOpen(false)} href="#about">
                About
              </a>
              <a onClick={() => setOpen(false)} href="#faqs">
                FAQs
              </a>
            </div>
          </div>
        )}
      </header>
      <section className="relative bg-[#155dfc] text-white">
        <div className="hero-orbit absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-18 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">
              Beginner-Friendly · Practical · AI-Assisted
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-[-.06em] sm:text-6xl lg:text-7xl">
              Learn to Build.
              <br />
              Learn to Solve.
              <br />
              <span className="text-[#ffe063]">Think Like A Programmer.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-blue-50">
              Programming isn&apos;t only for software developers. Learn how to
              use code and AI to build practical tools, websites, and
              applications for your work, business, school projects, or ideas.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA>Explore Courses</CTA>
              <a
                href="#how-it-works"
                className="rounded-full border border-white/50 px-5 py-3 text-sm font-bold hover:bg-white/10"
              >
                How It Works
              </a>
            </div>
          </div>
          <div className="grid-lines relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/35 bg-[#0845ce] p-5 shadow-2xl">
            <div className="rounded-2xl border border-blue-200/50 bg-white p-4 text-[#101a35]">
              <div className="mb-4 flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <i className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <i className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="grid grid-cols-[.8fr_1.2fr] gap-4">
                <div className="rounded-xl bg-[#f0f5ff] p-3 text-[10px] font-semibold leading-6 text-blue-500">
                  PROJECT
                  <br />
                  <span className="text-[#101a35]">idea.ts</span>
                  <br />
                  plan.md
                  <br />
                  build.jsx
                </div>
                <div className="rounded-xl bg-[#101a35] p-4 font-mono text-xs leading-6 text-[#dce8ff]">
                  <span className="text-pink-300">const</span> idea ={" "}
                  <span className="text-yellow-200">
                    &quot;help students&quot;
                  </span>
                  ;<br />
                  <span className="text-pink-300">function</span>{" "}
                  <span className="text-sky-300">build</span>() {"{"}
                  <br />
                  &nbsp; solve(idea)
                  <br />
                  {"}"}
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-[#f0f5ff] p-4">
                <p className="text-xs font-bold text-blue-600">
                  FROM IDEA TO IMPACT
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-bold">
                  <span>Idea</span>
                  <ArrowRight size={14} />
                  <span>Plan</span>
                  <ArrowRight size={14} />
                  <span>Build</span>
                  <ArrowRight size={14} />
                  <span>Solve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-22 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
            The core idea
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
            You Don&apos;t Need to Become a Software Developer.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            You just need to learn how technology can help you solve the
            problems you already understand.
          </p>
        </div>
      </section>
      <section id="how-it-works" className="bg-[#f0f5ff] py-22">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display max-w-2xl text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
            Start With a Problem.
            <br />
            Build a Solution.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Identify", "Understand the problem you want to solve."],
              [
                "02",
                "Plan",
                "Break the problem into smaller, realistic features.",
              ],
              ["03", "Build", "Use programming and AI to create the solution."],
              [
                "04",
                "Improve",
                "Test, debug, refine, and understand what you built.",
              ],
            ].map(([n, t, d], i) => (
              <div
                key={n}
                className="relative border-t-2 border-[#155dfc] pt-5"
              >
                <span className="font-display text-5xl font-extrabold text-[#155dfc]">
                  {n}
                </span>
                <h3 className="mt-6 font-display text-xl font-extrabold">
                  {t}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
                {i < 3 && (
                  <ArrowRight className="absolute -right-4 top-5 hidden text-[#155dfc] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="courses" className="mx-auto max-w-7xl px-5 py-22 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
          What you can learn
        </p>
        <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
          Learn the Skills Behind
          <br />
          Modern Applications
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(([n, t, d]) => (
            <article
              key={n}
              className="lift rounded-2xl border border-[#b7d1ff] p-6"
            >
              <span className="font-display text-sm font-extrabold text-[#155dfc]">
                {n}
              </span>
              <h3 className="font-display mt-9 text-xl font-extrabold">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-22 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#101a35] p-7 text-white sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#78a5ff]">
            Featured Course
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
                AI-Powered Full Stack Development
              </h2>
              <p className="mt-4 font-semibold">
                November Batch - November 09, 2026
              </p>
              <p className="mt-4 font-semibold text-[#ffe063]">
                For Non-IT Professionals and Students
              </p>
              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                A 16-week asynchronous program designed to help beginners
                understand programming, web development, databases, and
                responsible AI-assisted development while working toward their
                own practical application.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "16 Weeks",
                  "Asynchronous",
                  "Beginner-Friendly",
                  "Project-Based",
                  "AI-Assisted",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-slate-600 px-3 py-1.5 text-xs font-semibold"
                  >
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <CTA href="/courses/ai-powered-full-stack-development" inverse>
                  View Course
                </CTA>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
              <img src="/ab.png" alt="Example" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f0f5ff] py-22">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
            Learn More Than Just Syntax
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([t, d]) => (
              <article key={t} className="rounded-2xl bg-white p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#155dfc] text-sm font-bold text-white">
                  ↗
                </span>
                <h3 className="font-display mt-10 text-xl font-extrabold">
                  {t}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#155dfc] py-22 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#ffe063]">
              Our AI philosophy
            </p>
            <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
              AI Is a Tool.
              <br />
              Understanding Is Still the Skill.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-blue-100">
              We use AI to brainstorm, explain concepts, debug errors, review
              code, and improve development workflows. But the goal isn&apos;t
              to copy and paste whatever AI generates. The goal is to understand
              the problem and remain responsible for what you build.
            </p>
          </div>
          <div className="grid place-content-center rounded-[2rem] border border-white/25 bg-[#0845ce] p-8 text-center">
            <div className="font-display grid gap-4 text-xl font-extrabold">
              <span>YOU</span>
              <b className="text-[#ffe063]">+</b>
              <span>
                PROGRAMMING
                <br />
                FOUNDATIONS
              </span>
              <b className="text-[#ffe063]">+</b>
              <span>AI</span>
              <b className="text-[#ffe063]">=</b>
              <span className="text-[#ffe063]">
                BETTER PROBLEM
                <br />
                SOLVING
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="mx-auto max-w-7xl px-5 py-22 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[.72fr_1.28fr] md:items-center">
          <div className="grid aspect-square place-items-center rounded-[2rem] bg-[#dce8ff] text-center">
            <img src="/abb.png" alt="Example" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
              Meet Your Instructor
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em]">
              Allen Young
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              Software developer and tech educator focused on making programming
              practical, accessible, and beginner-friendly. His teaching
              emphasizes strong foundations, real-world applications, and
              responsible use of AI rather than blindly copying code.
            </p>
            <div className="mt-7">
              <CTA href="#about">About Me</CTA>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-5 mb-12 rounded-[2rem] bg-[#155dfc] px-6 py-16 text-center text-white sm:mx-8">
        <h2 className="font-display mx-auto max-w-3xl text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
          You Already Know the Problem.
          <br />
          Now Learn How to Build the Solution.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-blue-100">
          Explore beginner-friendly courses designed to help you turn ideas into
          practical technology.
        </p>
        <div className="mt-8">
          <CTA inverse>Explore Courses</CTA>
        </div>
        <a
          href="mailto:adbata26@gmail.com"
          className="mt-5 inline-block text-sm font-semibold underline underline-offset-4"
        >
          Have questions? Contact us.
        </a>
      </section>
      <footer id="faqs" className="border-t border-[#dce8ff]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-slate-500">
              Programming is a tool for solving problems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm font-semibold text-slate-600">
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
            <a href="#faqs">FAQs</a>
            <a href="mailto:adbata26@gmail.com">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>
          <div className="flex gap-4 text-sm font-semibold">
            <a href="#facebook">Facebook</a>
            <a href="#youtube">YouTube</a>
            <a href="#discord">Discord</a>
          </div>
        </div>
        <p className="border-t border-[#dce8ff] py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Think Like A Programmer. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
