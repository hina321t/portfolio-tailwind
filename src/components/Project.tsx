

// import React from 'react'
// import Heading from './Heading'
// import Cards from'./Cards'


// export const data =  [
//     {
//         id:0,
//         title:"To DO List",
//         desc:"A React & Typescript based appfor meaning and organizing ",
//         img:"/todo.png",
//         tags:["React","Node","CSS","typescript"],
//     },
//     {



//         id:1,
//         title:"Count Down Timer",
//         desc:"A Next.js and typescript powerdwebsite to track time",
//         img:"/countdown timer.jpeg",
//         tags:["Nextjs","Node","CSS","typescript"],
//     },
  

// {

//         id:2,
//         title:"weather widget",
//         desc:"A Next.js and typescript based tools for fatching and dis",
//         img:"/img1.jpeg",
//         tags:["Nextjs","Node","CSS","typescript"],
// },
// {


//         id:3,
//         title:"Currency converter project",
//         desc:"A simple HTML  typescript powerd tool for converting",
//         img:"/currency converter.png",
//         tags:["HTML","Node","CSS","typescript"],
// },
// {



//         id:4,
//         title:"Static interactive resume",
//         desc:"A Next.js and typescript powerdwebsite to track time",
//         img:"/countdown timer.jpeg",
//         tags:["HTML","Node","CSS","typescript"],
// },
// {

//         id:5,
//         title:"simple calculater project",
//         desc:"A basic HTML,CSS and typescript,calculator for perfoming",
//         img:"/countdown timer.jpeg",
//         tags:["HTML","Node","CSS","typescript"],
// },

//     ]

// const Project = () => {
//   return (
//     <div id='Projects' className='container pt-32  gap-10'>
//       <Heading title="My project"/>
//       <div className='  flex grid-gap-10 xl:gap-x-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
//         {data.map((el) => (<Cards
//         key={el.id}
//         title={el.title}
//         desc={el.desc}
//         img={el.img}
      
//          tags={el.tags}
         
//          />))}



//       </div>
//     </div>
//   )
// }

// export default Project

import React from 'react';
import Heading from './Heading';
import Cards from './Cards';

export const data = [
  {
    id: 0,
    title: "To DO List",
    desc: "A React & Typescript based app for managing and organizing",
    img: "/todo.png",
    tags: ["React", "Node", "CSS", "typescript"],
  },
  {
    id: 1,
    title: "Count Down Timer",
    desc: "A Next.js and typescript powered website to track time",
    img: "/counttimer.jpeg",
    tags: ["Nextjs", "Node", "CSS", "typescript"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A Next.js and typescript-based tool for fetching and displaying weather",
    img: "/weather.jpeg",
    tags: ["Nextjs", "Node", "CSS", "typescript"],
  },
  {
    id: 3,
    title: "Currency Converter Project",
    desc: "A simple HTML and typescript-powered tool for converting currency",
    img: "/cu.jpeg",
    tags: ["HTML", "Node", "CSS", "typescript"],
  },
  {
    id: 4,
    title: "Static Interactive Resume",
    desc: "A Next.js and typescript-powered static resume website",
    img: "/resume1.jpeg",
    tags: ["HTML", "Node", "CSS", "typescript"],
  },
  {
    id: 5,
    title: "Simple Calculator Project",
    desc: "A basic HTML, CSS, and typescript-based calculator",
    img: "/calculater.png",
    tags: ["HTML", "Node", "CSS", "typescript"],
  },
];

const Project = () => {
  return (
    <div id="Projects" className="container pt-32 gap-10">
      <Heading title="My Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gapnpm run dev
      -6">
        {data.map((el) => (
          <Cards
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

