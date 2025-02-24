import Image from "next/image";

interface ProjectCardProps {
  title: string;
  technologies: string;
  description: string[];
  imageUrl: any;
  liveUrl: string;
  index: number; // Index to determine layout dynamically
}

export function ProjectCard({
  title,
  technologies,
  description,
  imageUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  const isEven = index % 2 !== 0; // Check if the index is even

  return (
    <div className="overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm">
      <div
        className={`grid gap-8 p-6 lg:grid-cols-2 lg:p-8 ${
          isEven ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:grid-flow-row-dense"
        }`}
      >
        {/* Content Section */}
        <div className={`space-y-6 ${isEven ? "order-last" : "order-first"}`}>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-sm text-gray-400">{technologies}</p>
          </div>
          <ul className="space-y-2 text-gray-300">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gap-2 bg-gradient-to-r from-pink-500 to-rose-500 py-2 px-4 rounded-md text-white font-medium"
          >
            LIVE
          </a>
        </div>

        {/* Image Section */}
        <div
          className={`relative aspect-[16/9] overflow-hidden rounded-lg ${
            isEven ? "" : "order-first"
          }`}
        >
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
