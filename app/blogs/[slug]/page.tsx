import { blogs } from "@/data/blogs"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const blog = blogs.find(
    (item) => item.slug === params.slug
  )

  if (!blog) {
    return notFound()
  }

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-8">
      <div className="max-w-5xl mx-auto">

        <p className="text-yellow-500 mb-4">
          {blog.date}
        </p>

        <h1 className="text-5xl font-bold mb-8">
          {blog.title}
        </h1>

        <div className="relative aspect-video bg-[#111111] rounded-xl overflow-hidden mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-contain"
          />
        </div>

        <p className="text-gray-300 text-lg leading-8">
          {blog.excerpt}
        </p>
        <div className="mt-10 text-gray-300 leading-8 whitespace-pre-line text-lg">
  {blog.content}
</div>
        <div className="mt-10 text-gray-300 leading-8 space-y-6">
  <h2 className="text-3xl font-bold text-white">
    Why Choosing the Right Borewell Rig Matters in Africa
  </h2>

  <p>
    Africa has highly varied geological formations ranging from soft clay
    to extremely hard rock formations. Selecting the correct borewell
    drilling rig is critical to ensure better drilling performance,
    lower operational cost, and long machine life.
  </p>

  <p>
    For hard rock conditions commonly found in countries such as Ghana,
    Ethiopia, Kenya, Sudan, Tanzania, and Mozambique, a powerful drilling
    rig with strong pullback, high torque, and reliable mud or DTH
    capability is necessary.
  </p>

  <h3 className="text-2xl font-semibold text-yellow-500">
    Key Factors Before Choosing a Rig
  </h3>

  <ul className="list-disc pl-6 space-y-3">
    <li>Required drilling depth</li>
    <li>Ground formation (soft, mixed, hard rock)</li>
    <li>Availability of compressor or mud drilling system</li>
    <li>Transportation and maintenance support</li>
    <li>Budget and expected borewell output</li>
  </ul>

  <p>
    At NGE Drillsol, we manufacture heavy-duty drilling rigs suitable for
    African terrains with export-ready support, robust construction, and
    customized machine configurations based on customer requirements.
  </p>

  <h3 className="text-2xl font-semibold text-yellow-500">
    Recommended Applications
  </h3>

  <ul className="list-disc pl-6 space-y-3">
    <li>Waterwell drilling</li>
    <li>Hard rock borewells</li>
    <li>Geothermal exploration</li>
    <li>Mining and exploration drilling</li>
    <li>Deep borewell projects</li>
  </ul>
</div>

      </div>
    </section>
  )
}