import { Card, CardContent, CardHeader } from "./Common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFigma,
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

export function Skills() {
  const skills = [
    { name: "HTML5", icon: faHtml5, color: "#E44D26" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "React.js", icon: faReact, color: "#61DAFB" },
    { name: "Next.js", icon: faReact, color: "#0070F3" },
    { name: "Ant Design", icon: faReact, color: "#1890FF" },
    { name: "Figma", icon: faFigma, color: "#F24E1E" },
    { name: "CSS", icon: faCss3Alt, color: "#2965F1" },
    { name: "Tailwind CSS", icon: faCss3Alt, color: "#06B6D4" },
    { name: "LinkedIn", icon: faLinkedin, color: "#0A66C2" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      <Card>
        <CardHeader>About My Skill</CardHeader>
        <CardContent
          style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.6" }}
        >
          <p>Primary skills on:</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            {skills.map((ele, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <FontAwesomeIcon
                  icon={ele.icon}
                  style={{ fontSize: "24px", color: ele.color }}
                />
                <span style={{ fontSize: "14px", color: "#fff" }}>
                  {ele.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
