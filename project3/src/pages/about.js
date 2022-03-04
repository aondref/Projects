import Bio from "../components/bio";
import Education from "../components/education";
import Experience from "../components/experience";
import Skills from "../components/skills";

function About() {
  return (
      <div className="container">
        <Bio subtitle="About Me"/>
        <Skills subtitle="Skills" />
        <Experience subtitle="Experience" />
        <Education subtitle="Education" />
      </div>
  )
}

export default About;
