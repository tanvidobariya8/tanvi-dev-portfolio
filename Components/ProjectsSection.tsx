import { useRouter } from "next/router";
import { Card, CardContent, CardHeader } from "./Common/Card";

export function Projects() {
  const router = useRouter();
  const projects = [
    // {
    //   title: "Portfolio Website",
    //   description: "A personal portfolio site built with Next.js",
    //   link: "https://your-portfolio.com",
    //   technologies: "React, Next.js, Tailwind CSS",
    // },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce web app",
      link: "https://your-project.com",
      technologies: "React, Node.js, MongoDB",
    },

    // {
    //   title: "Social Media App",
    //   description: "A social media application with real-time chat",
    //   link: "https://your-social-media.com",
    //   technologies: "React, Firebase, Node.js",
    // },
    // {
    //   title: "Blog Website",
    //   description: "A personal blog website built with React and GraphQL",
    //   link: "https://your-blog.com",
    //   technologies: "React, GraphQL, Apollo",
    // },
  ];

  return (
    <div className="space-y-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>My Projects</CardHeader>
        <CardContent>
          {projects.slice(0, 3).map(
            (
              project,
              index // Display first 3 projects
            ) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p>{project.description}</p>
                <p>Technologies used: {project.technologies}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  View Project
                </a>
              </div>
            )
          )}
          {/* <Link href="/projects">
            <a>
            </a>
          </Link> */}
          <div
            className="mt-4 block text-center text-white font-semibold cursor-pointer"
            onClick={() => router.push("/projects")}
          >
            View All Projects
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
