import { Card, CardContent, CardHeader } from "./Common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import {
  faLinkedin,
  faFigma,
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons"; // Import the necessary icons

export function Skills() {
  const skills = [
    { name: "HTML5", icon: faHtml5, colorClass: "text-orange-500" },
    { name: "JavaScript", icon: faJs, colorClass: "text-yellow-500" },
    { name: "React.js", icon: faReact, colorClass: "text-cyan-500" },
    { name: "Next.js", icon: faReact, colorClass: "text-blue-600" },
    { name: "Ant Design", icon: faReact, colorClass: "text-blue-500" },
    { name: "Figma", icon: faFigma, colorClass: "text-pink-500" },
    { name: "CSS", icon: faCss3Alt, colorClass: "text-blue-400" },
    { name: "Tailwind CSS", icon: faCss3Alt, colorClass: "text-teal-500" },
    { name: "LinkedIn", icon: faLinkedin, colorClass: "text-blue-700" },
  ];

  return (
    <div className="space-y-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>About My Skill</CardHeader>
        <CardContent>
          <p>Primary skills on:</p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {skills.map((ele, i) => (
              <div key={i} className="flex items-center space-x-2">
                {/* Use FontAwesomeIcon component with color classes */}
                <FontAwesomeIcon
                  icon={ele.icon}
                  className={`text-3xl ${ele.colorClass}`}
                />
                <span className="text-sm">{ele.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
