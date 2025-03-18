import { Card, CardContent, CardHeader } from "./Common/Card";

export function About() {
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
        <CardHeader>About Me</CardHeader>
        <CardContent
          style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.6" }}
        >
          <p>
            I’m a passionate Front-End Developer with 2 years of professional
            experience, specializing in cutting-edge technologies like React.js,
            Next.js, and Redux. My expertise lies in building dynamic, visually
            appealing, and responsive web applications that enhance user
            experiences. With a strong foundation in HTML, CSS, and modern UI
            frameworks like Ant Design and MUI, I bring design ideas to life
            with precision and creativity.
          </p>
          <p style={{ marginTop: "16px" }}>
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
