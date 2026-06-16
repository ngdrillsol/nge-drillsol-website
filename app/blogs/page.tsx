import Image from "next/image"
import { blogs } from "@/data/blogs"

export default function BlogsPage() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white px-8 py-24">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-yellow-500 uppercase tracking-[0.2em] text-sm mb-4">
            Knowledge Center
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight break-words">
            NGE Drillsol <span className="text-yellow-500">Blogs</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Technical knowledge, drilling industry updates,
            export guidance and drilling solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
  key={blog.id}
  className="bg-[#141414] border border-[#1E1E1E] rounded-xl overflow-hidden hover:border-yellow-500 transition w-full"
>

              <div className="relative h-[220px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-yellow-500 text-sm mb-2">
                  {blog.date}
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 leading-snug text-balance">
  {blog.title}
</h3>

                <p className="text-gray-400 text-sm">
                  {blog.excerpt}
                </p>
                <a
  href={`/blogs/${blog.slug}`}
  className="inline-flex items-center gap-2 mt-5 border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 hover:text-black transition"
>
  Know More →
</a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}