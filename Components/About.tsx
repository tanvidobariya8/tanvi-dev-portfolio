import { Card, CardContent, CardHeader } from "./Common/Card";

export function About() {
  return (
    <div className="space-y-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>About Me</CardHeader>
        <CardContent>
          <p>
            I’m a passionate Front-End Developer with 2 years of professional
            experience, specializing in cutting-edge technologies like React.js,
            Next.js, and Redux. My expertise lies in building dynamic, visually
            appealing, and responsive web applications that enhance user
            experiences. With a strong foundation in HTML, CSS, and modern UI
            frameworks like Ant Design and MUI, I bring design ideas to life
            with precision and creativity.
          </p>
          <p>
            {" "}
            I thrive on solving complex front-end challenges and take pride in
            writing clean, maintainable code that adheres to best practices.
            Collaborating with teams to transform concepts into functional,
            user-friendly interfaces is what drives my passion for development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
