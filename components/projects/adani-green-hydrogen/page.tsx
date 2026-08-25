import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Drill,
  MapPin,
} from "lucide-react";

import { projects } from "@/components/projects/projects.data";

export default function AdaniGreenHydrogenProjectPage() {
  const project = projects.find(
    (item) => item.id === "adani-green-hydrogen"
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05070B] px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Project Not Found
          </h1>

          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#05070B]">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#05070B]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-yellow-500/40"
          >
            <ArrowLeft size={17} />

            Back to Projects
          </Link>

          <div className="mt-24 max-w-4xl">

            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              {project.application}
            </span>

            <h1 className="mt-7 text-5xl font-bold leading-tight text-white md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              {project.description}
            </p>

          </div>

        </div>

      </section>


      {/* Project Information */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">

            <div className="flex items-center gap-3 text-yellow-400">
              <Calendar size={20} />

              <span className="text-sm font-semibold uppercase tracking-wider">
                Duration
              </span>
            </div>

            <p className="mt-4 text-lg text-white">
              {project.duration}
            </p>

          </div>


          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">

            <div className="flex items-center gap-3 text-yellow-400">
              <MapPin size={20} />

              <span className="text-sm font-semibold uppercase tracking-wider">
                Location
              </span>
            </div>

            <p className="mt-4 text-lg text-white">
              {project.location}
            </p>

          </div>


          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">

            <div className="flex items-center gap-3 text-yellow-400">
              <Drill size={20} />

              <span className="text-sm font-semibold uppercase tracking-wider">
                Drilling Method
              </span>
            </div>

            <p className="mt-4 text-lg text-white">
              {project.drillingMethod}
            </p>

          </div>

        </div>

      </section>


      {/* Project Overview */}

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">

          <div>

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Project Overview
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white">
              The Project
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-400">
              {project.overview}
            </p>

          </div>


          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Client
            </p>

            <p className="mt-4 text-xl font-semibold text-white">
              {project.client}
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Application
            </p>

            <p className="mt-4 text-xl font-semibold text-white">
              {project.application}
            </p>

          </div>

        </div>

      </section>


      {/* Our Work */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="mb-10">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Our Work
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            How NGE Drillsol Worked
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {project.work?.map((item, index) => (

            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-[#090909] p-7"
            >

              <div className="flex gap-5">

                <span className="text-3xl font-bold text-yellow-500/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-8 text-slate-300">
                  {item}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Challenges */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="rounded-[32px] border border-white/10 bg-[#090909] p-8 md:p-12">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Project Challenges
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            What We Had to Handle
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {project.challenges?.map((item) => (

              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >

                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />

                <p className="text-slate-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Equipment */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="mb-8">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Equipment Used
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Equipment Used on the Project
          </h2>

        </div>

        <div className="flex flex-wrap gap-4">

          {project.rigs.map((rig) => (

            <div
              key={rig}
              className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 text-yellow-300"
            >
              {rig}
            </div>

          ))}

        </div>

      </section>


      {/* Results */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-[#090909] to-[#090909] p-8 md:p-12">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Project Results
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            What We Achieved
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {project.results?.map((item) => (

              <div
                key={item}
                className="flex items-start gap-4"
              >

                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />

                <p className="text-lg text-slate-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Gallery */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="mb-10 text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Project Gallery
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            The Project in the Field
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Photographs from the project showing the site and drilling
            operations.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {project.gallery.map((image, index) => (

            <div
              key={image}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#090909]"
            >

              <div className="relative h-80">

                <Image
                  src={image}
                  alt={`${project.title} project photograph ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Bottom CTA */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="rounded-[32px] border border-yellow-500/20 bg-[#090909] p-10 text-center md:p-14">

          <h2 className="text-4xl font-bold text-white">
            Have a Similar Drilling Project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Share your project requirements with NGE Drillsol and let our
            engineering team recommend the right drilling solution.
          </p>

          <div className="mt-8">

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Discuss Your Project

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}