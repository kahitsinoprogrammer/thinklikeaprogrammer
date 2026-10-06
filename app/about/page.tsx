import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2, GraduationCap, Heart, Laptop } from "lucide-react";

export const metadata: Metadata = {
  title: "About Allen Young | Think Like A Programmer",
  description:
    "Meet Allen Young, a software developer and technology educator focused on practical, beginner-friendly learning.",
};

const highlights = [
  ["5+", "years creating beginner-friendly programming courses"],
  ["5", "years of hardware and technical support experience"],
  ["10", "years of combined experience in the tech industry"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#101a35]">
      <header className="border-b border-[#dce8ff] bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            href="/"
            className="font-display flex items-center gap-2 font-extrabold tracking-tight"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#155dfc] text-lg text-white">
              T
            </span>
            <span>Think Like A Programmer</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-[#155dfc]">
            Back to home
          </Link>
        </nav>
      </header>

      <section className="relative bg-[#155dfc] text-white">
        <div className="hero-orbit absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#ffe063]">
              About me
            </p>
            <h1 className="font-display mt-4 text-5xl font-extrabold leading-[1.02] tracking-[-.06em] sm:text-6xl lg:text-7xl">
              Practical learning for people who want to build useful things.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-50">
              I&apos;m Allen Young—a software developer and tech educator who
              helps beginners make sense of programming, technology, and
              AI-assisted development.
            </p>
          </div>
          <div className="grid place-items-center rounded-[2rem] border border-white/25 bg-[#0845ce] p-8">
            <div className="grid h-44 w-44 place-items-center rounded-full border-[10px] border-[#ffe063] bg-white font-display text-6xl font-extrabold text-[#155dfc] shadow-2xl">
              AY
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
              My approach
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
              Learn the foundations. Build with confidence.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              I have taught learners from different backgrounds and believe
              coding should be practical, accessible, and connected to
              real-world problems. My approach focuses on helping students
              understand the foundations—not just copy code or rely blindly on
              AI.
            </p>
            <p>
              I&apos;ve also had opportunities to teach in academic institutions,
              including Manila Central University. Whether you&apos;re starting a
              project, changing careers, or strengthening your technical
              skills, I want learning to feel useful from day one.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {highlights.map(([number, label]) => (
            <article
              key={number}
              className="rounded-2xl border border-[#b7d1ff] bg-[#f0f5ff] p-6"
            >
              <p className="font-display text-5xl font-extrabold tracking-[-.06em] text-[#155dfc]">
                {number}
              </p>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f0f5ff] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#155dfc]">
            What I bring to the classroom
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-7">
              <Code2 className="h-9 w-9 text-[#155dfc]" />
              <h2 className="font-display mt-10 text-2xl font-extrabold">
                Software development
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                A developer&apos;s perspective on turning ideas into working,
                maintainable applications.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-7">
              <Laptop className="h-9 w-9 text-[#155dfc]" />
              <h2 className="font-display mt-10 text-2xl font-extrabold">
                Technical support
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                The patience and problem-solving mindset needed to explain
                technology clearly and solve real issues.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-7">
              <GraduationCap className="h-9 w-9 text-[#155dfc]" />
              <h2 className="font-display mt-10 text-2xl font-extrabold">
                Technology education
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Beginner-friendly lessons that put understanding and practical
                progress ahead of jargon.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 rounded-[2rem] bg-[#101a35] p-8 text-white lg:grid-cols-[1fr_.8fr] lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#78a5ff]">
              Beyond technology
            </p>
            <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-.05em]">
              A regular neighbor who had to learn, make mistakes, and figure
              things out along the way.
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <p className="text-lg leading-8 text-slate-300">
              Outside tech, I write poetry, enjoy anime and films, and travel
              whenever I can. Those interests keep me curious—and remind me
              that learning is part of a full life.
            </p>
            <Heart className="h-9 w-9 text-[#ffe063]" fill="currentColor" />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-[#b7d1ff] p-7">
          <div>
            <h2 className="font-display text-2xl font-extrabold">
              See my full credentials
            </h2>
            <p className="mt-2 text-slate-600">
              View Allen Young&apos;s CV and professional background.
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1MtqDDXtzSQyq6ZMNXDiRxQ-KTT-m1kN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#155dfc] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0c46d4]"
          >
            View CV <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
