import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import clinic from '@/public/project-images/vision_cover.png';
import budgetWise from '@/public/project-images/budget_wise.png';
import booktracker from '@/public/project-images/booktracker_cover.png';
import covid from '@/public/project-images/covid_cover.png';
import space from '@/public/project-images/space_cover.png';
import tv from '@/public/project-images/tvshow_cover.png';
import youth from '@/public/project-images/youth_cover.png';
import elkanis from '@/public/project-images/elkanis_Pcover.png';
import cms from '@/public/project-images/cms_cover.png';

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "El-kanis & Partners Official Website",
    imgSrc: elkanis,
    code: "https://github.com/AbayomiOlaoye/elkanis_official_website",
    projectLink: "https://elkanis-official-website.vercel.app/",
    tech: ["React", "Styled Components", "React Router"],
    description:
      "An official website of El-kanis & Partners, an agric tech company scaling the food-chain waves in Nigeria and Africa at large. It's my first official engagement after my training at Microverse.",
    modalContent: (
      <>
        <p>
          In my role as a web developer, I had the opportunity to work on the official website of El-kanis
          & Partners, a leading agric tech company making waves in Nigeria and Africa as a whole. My primary
          responsibility was to convert the medium-fidelity wireframe into a visually appealing and user-friendly webpage.
        </p>
        <p>
          From ideation to deployment, I collaborated closely with the UI/UX team to enhance the user experience and interface by
          leveraging their expertise to create an intuitive website that effectively communicated El-kanis &
          Partners&apos; mission and offerings.
        </p>
        <p>
          By combining my technical skills at creating reusable components and leveraging React Hooks with a keen eye for aesthetics, I successfully transformed the wireframe into a cohesive
          and engaging web presence for El-kanis & Partners. It was a fulfilling experience that allowed me to contribute to the
          company&apos;s growth in the digital space and showcase my dedication to crafting exceptional and fully optimized online experiences.
        </p>
        <p>
          I learnt a lot working on this project, especially in the area of working with a team of industry-expert designers. I was able to implement efficient
          and scalable solutions to complex problems like routing, complex positioning, logic generally, and I look forward to working on more projects like this.
        </p>
      </>
    ),
  },
  {
    title: "BudgetWise App",
    imgSrc: budgetWise,
    code: "https://www.github.com/AbayomiOlaoye/budget_wise_app",
    projectLink: "https://budget-wise-app.onrender.com/",
    tech: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    description:
      "Budget-wise App is a mobile web application with authentication that allows users to register and log in securely to manage their expenses on groceries and recipes.",
    modalContent: (
      <>
        <p>
          Worked as a senior full-stack developer for this web application. With a focus on user-friendly finance management, the app provides authentication for secure
          access to personal financial information.
        </p>
        <p>
          With the power of Rails a full MVC stack, I designed the database models, setup Postgres, and created nice views for interaction.
        </p>
        <p>
          The app features a user-friendly interface, intuitive category management, and a comprehensive transaction history. It prioritizes data security
          through industry-standard encryption techniques, ensuring the protection of user information and financial data.
        </p>
      </>
    ),
  },
  {
    title: "BookStore CMS",
    imgSrc: cms,
    code: "https://www.github.com/AbayomiOlaoye/bookstore-app",
    projectLink: "https://bookrackcms.netlify.app/",
    tech: ["React", "Redux", "Framer Motion", "REST API"],
    description:
      "BookStore CSS is an amazing productivity tool that provides MVP feel with its basic functionalities.",
    modalContent: (
      <>
        <p>This is a self-project that teaches me how to use React and Redux in the context of a real application. </p>
        <p>
          BookStore CMS is a content management system (dashboard) that empowers users - mostly readers, to track their reading goals and
          and milestones.
        </p>
        <p>
          This is a very fun project that I built using Redux to manage the seaming complex nature of the states to ensure an all-time
          and real-time updating of users&apos; inputs.
        </p>
        <p>
          I also used Framer Motion to animate the components and give the app a nice feel. I had a nice experience with creating
          reducers and actions for the React components but for scalability and maintainability issues, I hope to build a similar
          project using newly evolving state management technologies like like Jotai and RxJS for state management.
        </p>
      </>
    ),
  },
  {
    title: "World Vision Clinic",
    imgSrc: clinic,
    code: "https://github.com/AbayomiOlaoye/Book-Appointment-Front-End",
    projectLink: "https://world-vision-clinic.netlify.app/",
    tech: ["React", "Ruby", "Ruby on Rails", "Bootstrap", "PostgreSQL"],
    description:
      "This is a full-stack project, connecting Rails API to React front-end, in which users can register, create a doctor, book an appointment with the doctor, see all scheduled meetings, and delete a doctor(s).",
    modalContent: (
      <>
        <p>I worked with other 3 developers on this amazing qualifying project where we connected Rails API to React App</p>
        <p>
          I was responsible for some components in the front-end of the project, where I created the UI and connected it to the back-end. I also
          helped in the creation of the back-end, where I created the models, controllers, and serializers.
        </p>
        <p>
          It was particularly fun and fulfilling when my previous learning on User Experience was beneficial in avoiding a potential conflict
          that could have blocked us from meeting up with the deadline while designing our database system (Entity Relational Diagram). I contributed
          a great deal in the creation user-friendly interfaces, and fixed a bug that was preventing the app from working as expected.
          - specifically, the <code>deleteDoctor()</code> method in the <kbd>doctor&apo;s</kbd> controller logic was not working as expected.<br />
          After a brief series of debugging to ensure that the routes were configured correctly, I was able to fix it by changing the <code>doctor</code> to <code>doctor_id</code> in the <code>params</code> of the <code>deleteDoctor()</code> method.
        </p>
        <p>I really enjoy working in a team with diverse unique skills and experiences. 😎</p>
      </>
    ),
  },
  {
    title: "CovidInfo Tracker",
    imgSrc: covid,
    code: "https://github.com/AbayomiOlaoye/covid_info",
    projectLink: "https://covid-info-update.netlify.app/",
    tech: ["React", "Jest", "React Router"],
    description:
      "Year 2020 was both an historic and an internationally disastrous time when the globe got struck with a uniform pandemic - 'Covid-19'. Covid Info App was built as an initiative aimed at providing accurate statistics and reports about the coverage and cases of the pandemic in all regions of the world.",
    modalContent: (
      <>
        <p>
          In my early days of working with APIs in React Apps, I built this Single Page App to provide accurate statistics and reports as documented by authentic sources.
        </p>
        <p>
          By fetching data from the <a href="https://disease.sh/v3/covid-19/continents">Disease.sh API</a>, I was able to display the data in a user-friendly interface that
          allows users to filter the data by country and sort the data by the number of cases, deaths, and recoveries.
        </p>
      </>
    ),
  },
  {
    title: "Space Travelers Hub",
    imgSrc: space,
    code: "https://www.github.com/AbayomiOlaoye/space-travelers-hub",
    projectLink: "https://space-travelers-hub-gamma.vercel.app/",
    tech: ["React", "Redux", "REST API"],
    description:
      "An application that allows users to book rockets and join selected space missions. It fetches data (API) from Space-X data, using awesome Redux and React Hooks to manage dynamic states.",
    modalContent: (
      <>
        <p>
          I think I used Redux a lot in most of my applications. I love the way it manages states and makes it easy to share data across components especially in a complex app.
        </p>
        <p>
          Redux offers centralized state management, predictable state changes, time travel debugging, easy collaboration, component decoupling,
          middleware support, and a vast ecosystem with a strong community.
        </p>
        <p>
          With one other developer, we built this app using Redux to manage the states and React Hooks to manage the components. It might be the first time
          we were using conditional rendering in React, and it was a nice experience. <br /><br />With it, you can book a rocket, cancel a booking, and join a mission.
        </p>
        <p>Just some basic CRUD functionality thriving on optimized rendering 🚀</p>
      </>
    ),
  },
  {
    title: "Youths-In-Tech Global Summit",
    imgSrc: youth,
    code: "https://www.github.com/AbayomiOlaoye/Youth-In-Tech-Project",
    projectLink: "https://abayomiolaoye.github.io/Youth-In-Tech-Project/",
    tech: ["HTML", "SASS", "JavaScript"],
    description:
      "Here's my first capstone project, featuring a young and dynamic group of youngsters in tech.",
    modalContent: (
      <>
        <p>
          The project was inspired by my crave to see young minds being inspired by their colleagues who have seized the
          opportunity to learn the language of the future - not only for the financial security it affords but the feeling
          of accomplishment it bestows.
        </p>
        <p>
          After a successful switch of career from the accounting profession to the tech industry, I have been inspired to
          help others achieve the same feat. This project is a step in that direction.
        </p>
        <p>
          It is a simple conference website that showcases the speakers, the schedule, and the venue of the event. It was so
          special that with much enthusiasm, I spent time designing the icons, logos, and other graphics used in the project.
          I built it using HTML, SASS, and JavaScript in 1 day after 3 days of sourcing for web assets. 🤓
        </p>
      </>
    ),
  },
  {
    title: "BookTracker App",
    imgSrc: booktracker,
    code: "https://github.com/AbayomiOlaoye/book_tracker",
    projectLink: "https://abayomiolaoye.github.io/book_tracker/",
    tech: ["JavaScript", "Webpack", "REST API", "Jest"],
    description:
      "A replica of Awesome Book with refactored codes, using mainly ES6 syntaxes, modules, arrow functions, JavaScript libraries (Axios, Luxon), and more. The app adds, removes and updates book in real-time with local storage functions.",
    modalContent: (
      <>
        <p>
          In this pseudo project, I was working with modularizing codes into maintainable units and components using ES6 syntaxes and modules.
          I also used Jest to test the functions and ensure they work as expected.
        </p>
        <p>
          In programming, modularization is a technique that separates the functionality of a program into independent, interchangeable modules.
          It is a way of organizing programs into separate, discrete, and independent parts. It makes code cleaner to write, easier to understand, maintain, and test.
        </p>
        <p>It makes me more concerned about my PROCESSES than I was about was RESULTS.</p>
        <p>It endeared me to the use of JavaScript ES6 Syntax (modules, arrow functions, let, const, destructuring, etc.) because of the improvements it avails,
          aside from my experience with bundling web assets with Webpack, and using npm packages/libraries.
        </p>
      </>
    ),
  },
];