import React from "react"
import { Tilt } from "react-tilt"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full ">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} className="object-contain w-16 h-16"></img>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        A passionate software developer with experience in technologies such as NODEJS, C#, Python, C++, Javascript, SQL, MongoDB, REACT,
        Redux, Typescript, GIT, Bash, and a basic understanding of Docker, AWS and Kubernetes, etc. I have knowledge of both monolithic and
        microservice architecture. I am looking for an opportunity where I can work to develop and grow my career. I love new challenges and
        I am good at planning for the task to be solved. I am a good team player and can work independently.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
