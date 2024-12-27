import React from 'react'




const Skills = () => {
  return (
    <div id= "skills" className="container pt-32">
      <div className='grid md:grid-cols-2 item center'>
        <div>
          <h2 className="text-4lg md:text-5xl" data-aos="zoom-in-up">Technologies I work width</h2>
          <p className='text-gray-500 pt-2'>i have sold funcation in web development ,spacializing in HTML,CSS andJavascript.My experiencce extends to using framework like React and Next.js  to create dynmic and user-friendly application .I'm also proficient in tailwind CSS for efficient styling and design, i stay updated on the latest technologies to enhance my skills set and comtribute effectively to project. </p>
        </div>

        <div>
          <div className=" grid grid-col-2 text-accent text-3xl sm:text-4xl ">
            <div className=" space-y-2">
              <h2>Typescript</h2>
              <h2>React.js</h2>
              <h2>Next.js</h2>

            </div>
            <div className=" space-y-2">
              <h2>Tailwind</h2>
              <h2>Css</h2>
              <h2>Node.js</h2>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills


