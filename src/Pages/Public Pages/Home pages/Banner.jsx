import { motion } from "framer-motion";
import team1 from "../../../assets/office1.jpg"
import team2 from "../../../assets/office2.jpg"
function Banner() {
  return (
    <div className="hero  min-h-96 pb-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="flex-1">
        <motion.img
          src={team1}
          animate={{y:[0,50,0]}}
          transition = {{duration:10, repeat:Infinity}}
          className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-l-blue-700 border-b-blue-700 shadow-2xl"
        />
        <motion.img
          src={team2}
          animate={{x:[100,150,100]}}
          transition = {{duration:10, delay:5, repeat:Infinity}}
          className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-l-blue-700 border-b-blue-700 shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold font-poppins">Latest Jobs For You!</h1>
          <p className="py-6 font-lato">
          "Discover your dream job with our comprehensive job portal! Explore thousands of opportunities from top employers, tailor your search to match your skills, and apply with ease!"
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
