import aboutImage from "../assets/about.webp"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-12 mx-4 ">About</h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
            <div className="mb-8 lg:mb-0">
                <img src={aboutImage} alt="about" className="w-full h-auto "/>
            </div>
            
                <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                    At VastuSpaze, we believe that every space has the potential to inspire and uplift. Our mission is to transform ordinary environments into extraordinary experiences through innovative design and thoughtful planning. With a focus on sustainability and functionality, we create spaces that not only look beautiful but also enhance the quality of life for those who inhabit them.
                    Our team of dedicated professionals is passionate about bringing your vision to life, ensuring that each project reflects your unique style and needs. Whether it's a residential home, a commercial space, or a public area, we approach every project with creativity and precision, striving for excellence in every detail.
                    Join us on this journey of transformation, where we turn your dreams into reality, one space at a time. 
                </p>
        </div>
    </section>
  )
}

export default About
