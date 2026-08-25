import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { projects } from "@/components/projects/projects.data";

export default function AdaniGreenHydrogenPage() {
  const project = projects.find(
    (item) => item.id === "adani-green-hydrogen"
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-[#05070B] px-6 py-32 text-center">
        <h1 className="text-4xl font-bold text-white">
          Project Not Found
        </h1>

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#05070B] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="relative h-[520px]">

          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-black/30" />

          <div className="absolute inset-x-0 bottom-0">

            <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

              <Link
                href="/projects"
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white"
              >
                <ArrowLeft size={17} />
                Back to Projects
              </Link>

              <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                {project.application}
              </span>

              <h1 className="mt-5 text-5xl font-bold md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                {project.description}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECT INFORMATION */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
              Client
            </p>

            <p className="mt-3 text-lg font-semibold">
              {project.client}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
              Location
            </p>

            <p className="mt-3 text-lg font-semibold">
              {project.location}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
              Project Period
            </p>

            <p className="mt-3 text-lg font-semibold">
              {project.duration}
            </p>
          </div>

        </div>

      </section>


      {/* ABOUT THE PROJECT */}

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

        <div className="max-w-4xl">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            About The Project
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Adani Green Hydrogen Project
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-400">
            NGE DRILLSOL was involved in groundwater investigation and
            deep drilling activities for the Adani Green Hydrogen Project.
            The work required reliable drilling performance under
            challenging geological and site conditions.
          </p>

        </div>

      </section>


      {/* OUR WORK */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Our Work
        </span>

        <h2 className="mt-5 text-4xl font-bold">
          How We Worked
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">
            <h3 className="text-xl font-bold">
              Site Mobilisation
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              NGE DRILLSOL mobilised the drilling equipment and supporting
              systems required for the groundwater investigation work.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">
            <h3 className="text-xl font-bold">
              Deep Drilling
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Deep rotary drilling was carried out through challenging
              geological formations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">
            <h3 className="text-xl font-bold">
              Groundwater Investigation
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              The drilling work supported investigation and evaluation of
              groundwater resources required for the project.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#090909] p-7">
            <h3 className="text-xl font-bold">
              Project Execution
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Drilling operations were executed with a focus on reliable
              performance and maintaining progress under difficult field
              conditions.
            </p>
          </div>

        </div>

      </section>


      {/* CHALLENGES */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="rounded-[32px] border border-yellow-500/20 bg-yellow-500/5 p-8 md:p-12">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Project Challenges
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Challenges We Handled
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "Deep drilling requirements",
              "Hard and challenging geological formations",
              "Groundwater investigation",
              "Demanding field conditions",
            ].map((challenge) => (

              <div
                key={challenge}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5"
              >

                <span className="h-2 w-2 rounded-full bg-yellow-400" />

                <span className="text-slate-300">
                  {challenge}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EQUIPMENT */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Equipment
        </span>

        <h2 className="mt-5 text-4xl font-bold">
          Equipment Used
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">

          {project.rigs.map((rig) => (

            <span
              key={rig}
              className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 text-yellow-300"
            >
              {rig}
            </span>

          ))}

        </div>

      </section>


      {/* RESULTS */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Project Results
        </span>

        <h2 className="mt-5 text-4xl font-bold">
          What We Achieved
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {project.achievements.map((achievement) => (

            <div
              key={achievement}
              className="rounded-2xl border border-white/10 bg-[#090909] p-6"
            >

              <div className="flex gap-4">

                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />

                <p className="leading-7 text-slate-300">
                  {achievement}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* GALLERY */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Project Gallery
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Project Photos
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A look at the project site and drilling operations.
          </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {project.gallery.map((image, index) => (

            <div
              key={image}
              className="relative h-80 overflow-hidden rounded-3xl border border-white/10"
            >

              <Image
                src={image}
                alt={`${project.title} photo ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="rounded-[32px] border border-white/10 bg-[#090909] p-10 text-center md:p-14">

          <h2 className="text-4xl font-bold">
            Have a Similar Project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Talk to the NGE DRILLSOL engineering team about your drilling
            requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}