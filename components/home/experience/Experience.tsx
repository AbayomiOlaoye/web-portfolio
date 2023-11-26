import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "MindByte Technologies",
    position: "Full-Stack Developer",
    time: "Jun 2023 - Present",
    location: "On-site/Remote",
    description:
      "Working as a full-stack developer to provide optimized and scalable web solutions to remote and on-site clients, boosting their online presence and users' experience to increase engagements by 70%.",
    tech: [
      "React",
      "Next.js",
      "Styled Components",
      "JWT Auth",
      "PostgreSQL",
      "Ruby on Rails",
      "Ruby",
      "Git",
      "GitHub",
      "Ruby",
    ],
  },
  {
    title: "Forage (BlackBird Australia)",
    position: "Software Engineering Virtual Experience Program",
    time: "Apr 2023",
    location: "Virtual Experience",
    description:
      "During this program, I gained valuable insight into what it’s like to be a software engineer in a startup environment, with practical opportunities to practice practicals skills: how to build and verify code, assess cloud infrastructure, collaborate using GitHub CLI. I also had the opportunity to contribute to a Sprint Retro with Baraja an utilize an open source project with Morse Code to create a temperature warning system using Arduino microcontroller.",
    tech: [
      "React",
      "Unit Testing",
      "JavaScript",
      "A/B Testing",
      "Product Analytics",
      "Project Management",
      "Agile Methodology",
      "Arduino",
      "GitHub CLI",
      "Cloud Infrastructure",
      "Architecture",
    ],
  },
  {
    title: "Microverse Inc.",
    position: "Technical Support Engineer - Code Reviewer",
    time: "Jan 2023 - Present",
    location: "San Francisco, CA",
    description:
      "I provide technical support through code reviews to improve code quality and overall performance to over 500 students. I also rovide one-on-one virtual office hours to help students feel comfortable with project objectives, boost their confidence in their skills, and help them grow their professional communication skills.",
    tech: [
      "CI/CD",
      "Unit Tests",
      "Mentoring",
      "GIT/GIT CLI",
      "GitLab",
      "JavaScript",
      "Technical Support",
      "Communication",
    ],
  },
  {
    title: "Microverse Inc.",
    position: "Volunteer Mentor",
    time: "July 2022 - Present",
    location: "San Francisco, CA",
    description:
      "I offered mental support, stress management tactics, and tips on how to maintain motivation for juniors in the program. More so, proposing improvements on code organization in order to improve code quality and overall performance.",
    tech: [
      "JavaScript",
      "Semantic HTML",
      "Mentoring",
      "Leadership",
      "Team building",
      "Collaboration",
    ],
  },
  {
    title: "Microverse Inc.",
    position: "Full-Stack Developer",
    time: "April 2022 - June 2023",
    location: "Remote",
    description:
      "After deciding that this was where wings of interest and curiosity were swinging me to, I joined Microverse - an online school. Just before you think this is more of an education than it is an experience, I would like to let you know that Microverse is a remote school for software developers. I have worked on over 20 projects, both solo and collaborative, using the Agile methodology. I have also worked with over 100 developers from different parts of the world. With over 6000 hours+ of collaboration with cross-cultural demographics, I have been able to improve my communication skills, team building, and collaboration.",
    tech: [
      "TDD",
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "JavaScript",
      "React",
      "Redux",
      "Ruby",
      "Ruby on Rails",
      "RSpec",
      "Jest",
      "Algos & DS",
      "Professional Communication",
      "Project Management",
      "Agile Methodology",
      "Remote Collaboration",
      "Team Building",
      "Leadership",
      "Heroku",
      "Netlify",
      "Git",
      "Render",
      "SQL",
      "PostgreSQL"
    ],
  },
  {
    title: "El-kanis & Partners",
    position: "Accountant",
    time: "Dec. 2019 - Oct. 2021",
    location: "Uyo, Nigeria",
    description:
      "El-Kanis & Partners is an active and leading company in agro-tech in Uyo, Nigeria with demonstrated capability in the several projects handled. As an accountant in the land of software developers (Web applications and mobile apps), I took on several intuitions to learn basic concepts of the stack while performing my accounting rites. This was were I got my first taste of programming and I fell in love with it. I was able to build a simple Wordpress website for MindPrep Nigeria within a week. 🤗",
    tech: [
      "Interpersonal Relationship Management",
      "Attention to Details",
      "Thoroughness",
      "Problem Solving",
      "Proactive thinking",
      "Automation",
      "Audit",
      "Accounting",
      "Process Improvement",
      "Internal Controls",
    ],
  },
];
