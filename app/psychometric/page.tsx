import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PsychometricTestClient from "./PsychometricTestClient";

const testFamilies = [
  {
    title: "Aptitude Testing",
    points: [
      "Measures natural ability to acquire new skills.",
      "Evaluates numerical, verbal, logical, and perceptual reasoning.",
      "Helps in stream, subject, and career-path decisions.",
    ],
  },
  {
    title: "IQ Assessment",
    points: [
      "Assesses logical reasoning, processing speed, and working memory.",
      "Provides age-group benchmarking of cognitive potential.",
      "Useful for advanced learning and high-complexity role planning.",
    ],
  },
  {
    title: "Personality Profiling",
    points: [
      "Maps stable behavior patterns and communication style.",
      "Supports confidence-building, leadership growth, and relationships.",
      "Improves role-fit in both academic and professional settings.",
    ],
  },
];

const ageBuckets = [
  {
    label: "Junior Primary (7-8 yrs)",
    text: "Baseline cognitive profiling and early learning-style discovery for low-stress support.",
  },
  {
    label: "Senior Primary (9-10 yrs)",
    text: "Refines understanding of grasping speed, foundational strengths, and confidence planning.",
  },
  {
    label: "Middle School (11-12 yrs)",
    text: "Supports subject complexity handling and extracurricular alignment without burnout.",
  },
  {
    label: "Lower Secondary (13-14 yrs)",
    text: "SWOT-style insight for stream choices, limitations, and early career clusters.",
  },
  {
    label: "Higher Secondary (15+ yrs)",
    text: "Aligns aptitude and personality with majors, courses, and long-term opportunities.",
  },
  {
    label: "Adults and Corporates",
    text: "Supports recruitment, role fit, leadership pipeline, and targeted upskilling plans.",
  },
];

const measuredAreas = [
  "Numerical understanding",
  "Linguistic ability",
  "Creativity and abstract processing",
  "Perceptual speed and accuracy",
  "Mechanical and practical comprehension",
  "Working memory and short-term retention",
];

const psychometricChapters = [
  {
    title: "1. What Is Psychometric Assessment",
    paragraphs: [
      "The term psychometric is derived from two Greek words: psyche (mind) and metron (measurement). A psychometric test is a standardized scientific method used to objectively measure mental capabilities and behavioral style.",
      "These assessments provide a data-driven profile of how a person thinks, reacts, and processes information, moving beyond subjective observation.",
    ],
    bullets: [
      "Measures behavioral tendencies and personality traits.",
      "Assesses cognitive skills and potential to learn.",
      "Supports academic, career, and organizational decisions.",
    ],
  },
  {
    title: "2. Core Categories of Psychometric Testing",
    paragraphs: [
      "Because human potential is multidimensional, psychometric tools are grouped by what they are designed to evaluate. Choosing the right tool depends on the objective.",
    ],
    bullets: [
      "Aptitude and Cognitive Function: Numerical, verbal, logical, and reasoning ability.",
      "Personality and Behavioral Profiling: Work style, emotional tendencies, and communication approach.",
      "Interest and Developmental Constructs: Values, motivations, and career preference direction.",
      "Mental Health Contexts: Specialized use in clinical and developmental environments.",
    ],
  },
  {
    title: "3. Aptitude Testing: Purpose and Value",
    paragraphs: [
      "An aptitude test is designed to measure an individual’s natural capacity to acquire skills and succeed in specific tasks. It predicts potential rather than testing previously memorized content.",
      "This makes aptitude testing especially useful during stream selection, higher education planning, and career transition stages.",
    ],
    bullets: [
      "Identifies strengths, weaknesses, and preferred problem-solving style.",
      "Supports informed subject and vocation decisions.",
      "Improves recruitment and role-fit quality.",
    ],
  },
  {
    title: "4. Aptitude Across School-to-Work Stages",
    paragraphs: [
      "Aptitude interpretation is most effective when aligned with age-specific cognitive stages, from primary years to professional development.",
    ],
    bullets: [
      "Junior Primary (7-8): Early potential and learning-style identification.",
      "Senior Primary (9-10): Better grasp mapping and confidence support.",
      "Middle School (11-12): Subject-specific alignment and balanced growth planning.",
      "Lower Secondary (13-14): SWOT-based stream and early career direction.",
      "Higher Secondary (15+): College major and strategic career alignment.",
      "Adults and Corporates: Role-fit, leadership potential, and targeted upskilling.",
    ],
  },
  {
    title: "5. What Aptitude Tests Evaluate",
    paragraphs: [
      "Aptitude testing evaluates a cognitive blueprint rather than subject marks. It measures how efficiently a person processes information across multiple dimensions.",
    ],
    bullets: [
      "Numerical Understanding: Quantitative processing and calculation comfort.",
      "Creativity: Out-of-the-box and abstract problem-solving potential.",
      "Linguistic Ability: Language processing, comprehension, and expression quality.",
      "Perceptual Speed and Accuracy: Fast error detection and detail management.",
      "Mechanical Comprehension: Practical understanding of physical systems and tools.",
    ],
  },
  {
    title: "6. IQ Testing: Scope and Benefits",
    paragraphs: [
      "An IQ test is a standardized psychometric instrument used to estimate general intelligence by evaluating reasoning, abstraction, memory, and processing speed.",
      "It is useful for students, adults, and corporates to understand intellectual strengths and fit for cognitively demanding pathways.",
    ],
    bullets: [
      "Benchmarks mental performance relative to age-group norms.",
      "Assesses logical reasoning, abstract thought, and spatial processing.",
      "Supports advanced education planning and strategic career decisions.",
    ],
  },
  {
    title: "7. Personality Testing: Practical Impact",
    paragraphs: [
      "Personality testing maps stable behavioral patterns, communication style, and natural tendencies. It is widely used for self-awareness, mentoring, and organizational talent development.",
      "Frameworks such as SWOT and MBTI-style interpretation are often used to understand strengths, blind spots, and role-fit patterns.",
    ],
    bullets: [
      "Teenagers: Better career management, peer-pressure resistance, and confidence building.",
      "Adults: Improved relationship quality and personal-professional alignment.",
      "Corporates: Stronger hiring fit, conflict management, and leadership pipeline planning.",
    ],
  },
  {
    title: "8. Why Combined Assessment Works Best",
    paragraphs: [
      "Aptitude, IQ, and personality together provide a multidimensional profile of potential, behavior, and learning strategy. This is more reliable than making decisions based only on marks, trends, or external pressure.",
      "Maximum value is achieved when reports are translated into actionable plans for study strategy, stream selection, skill development, and long-term career architecture.",
    ],
  },
];

export default function PsychometricPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <PsychometricTestClient />

        <section className="px-4 sm:px-6 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="relative min-h-[260px] rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src="/assets/service-app-guidance.jpg"
                alt="Psychometric and aptitude guidance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h2 className="text-2xl font-black text-slate-900">Data-Backed Career and Learning Decisions</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Psychometric analysis helps families, students, and professionals replace guesswork with measurable direction across subject choice, career strategy, and work-role fit.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-14">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Core Assessment Families</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testFamilies.map((group) => (
                <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{group.title}</h3>
                  <ul className="space-y-2 text-slate-700">
                    {group.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-14">
          <div className="max-w-6xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">What These Tests Measure</h2>
            <p className="text-slate-600 leading-relaxed max-w-3xl mb-6">
              Good psychometric systems are not only about scores. They evaluate how a person thinks, learns, reacts, solves problems, and performs under constraints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {measuredAreas.map((item) => (
                <div key={item} className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-700 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-14">
          <div className="max-w-6xl mx-auto rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-5">Age and Stage Utility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ageBuckets.map((bucket) => (
                <article key={bucket.label} className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <h3 className="font-bold text-white">{bucket.label}</h3>
                  <p className="text-sm text-slate-300 mt-1">{bucket.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-6xl mx-auto rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Why This Matters</h2>
            <p className="mt-3 text-slate-700 leading-relaxed max-w-3xl">
              The practical value of psychometric analysis is clarity: clearer study strategies, stronger stream choices, better job-role fit, improved team effectiveness, and more confident long-term planning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-orange-700 text-white px-5 py-2.5 font-semibold hover:bg-orange-800 transition-colors">
                Start Your Assessment Plan
              </Link>
              <Link href="/dmit" className="rounded-full border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-white transition-colors">
                Explore DMIT
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-6xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Complete Psychometric Guide (Expandable)</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Expand each chapter to read the full long-form material for aptitude, IQ, and personality testing.
                </p>
              </div>
              <div className="relative min-h-[220px] rounded-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/assets/service-doc-prep.jpg"
                  alt="Structured assessment preparation and planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-3">
              {psychometricChapters.map((chapter) => (
                <details key={chapter.title} className="group rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between gap-4">
                    <span>{chapter.title}</span>
                    <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="mt-4 space-y-3 text-slate-700 leading-relaxed">
                    {chapter.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {chapter.bullets && chapter.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {chapter.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
