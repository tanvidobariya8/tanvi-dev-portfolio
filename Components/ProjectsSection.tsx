import { useRouter } from "next/router";
import { Card, CardContent, CardHeader } from "./Common/Card";

export function Projects() {
  const router = useRouter();
  const projects = [
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce web app",
      link: "https://your-project.com",
      technologies: "React, Node.js, MongoDB",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Card>
        <CardHeader>Projects</CardHeader>
        <CardContent
          style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.6" }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <h3
                style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}
              >
                {project.title}
              </h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies used:</strong> {project.technologies}
              </p>
            </div>
          ))}
          <div
            style={{
              marginTop: "16px",
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => router.push("/projects")}
          >
            View All Projects
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
