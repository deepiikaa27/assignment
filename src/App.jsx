import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { FiArrowUp } from "react-icons/fi";
import Oracle from "./assets/oracle.png";
import Morephus from "./assets/morephus.png";
import Samsung from "./assets/Vector.png";
import Monday from "./assets/monday.png";
import Segment from "./assets/vector1.png";
import About from "./assets/about.png";
import { blogs, footer, service, stats } from "./assets/data/data";
import profile from "./assets/profile.png";
import video1 from "./assets/video.png";
import Screen from "./assets/Screen.png";

import { SiSlack, SiFigma, SiAirtable, SiSketch } from "react-icons/si";
import {
  FaApple,
  FaBook,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaDropbox,
  FaFacebookF,
  FaFileAlt,
  FaGoogle,
  FaGooglePlay,
  FaInstagram,
  FaLock,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaPinterest,
  FaQuoteLeft,
  FaShieldAlt,
  FaShopify,
  FaSmile,
  FaTrello,
  FaUsers,
} from "react-icons/fa";
import {
  AiFillFileText,
  AiFillPlayCircle,
  AiOutlineMail,
} from "react-icons/ai";
import {
  MdPayment,
  MdOutlineManageAccounts,
  MdLightbulbCircle,
} from "react-icons/md";
import { HiPresentationChartLine } from "react-icons/hi";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <section className="bg-white py-12">
        <div className="text-center">
          <h2 className="text-lg font-bold mb-9 text-[#272D37]">
            Trusted by Over 100+ Startups and Freelance Businesses
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src={Oracle} alt="Oracle" />
            <img src={Morephus} alt="Samsung" />
            <img src={Morephus} alt="Monday" />
            <img src={Samsung} alt="Segment" />
            <img src={Monday} alt="Segment" />
            <img src={Segment} alt="Segment" />
          </div>
        </div>
      </section>
      {/* explore section */}
      <section className="bg-[#FAFAFA] py-6">
        <div className="text-center mb-8 px-4">
          <div className="text-sm text-[#EB8D15]">
            WELCOME TO REGISTERKARO.IN
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3">
            Explore Our Services
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-14">
          {service.map((service, index) => (
            <div
              key={index}
              className="p-6 text-center border-r-2 hover:shadow-md transition"
            >
              {service.icon}
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-[#282728] text-sm sm:text-base">
                {service.description}
              </p>
              <button className="mt-4 text-[#001038] hover:underline font-semibold">
                Learn more &rarr;
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#1C4670] text-white px-6 py-3 rounded font-medium hover:bg-[#163b5d] transition">
            See All Services
          </button>
        </div>
      </section>
      {/* About Section */}
      <section className=" py-12 px-4 sm:px-8 lg:px-14">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 ">
          <div className="md:w-1/2">
            <div className="text-sm text-[#EB8D15] font-semibold uppercase mb-2 ">
              Welcome to RegisterKaro.in
            </div>
            <h3 className="text-2xl sm:text-3xl  font-bold my-4">
              About <span className="text-[#FFA229]">Register Karo</span>
            </h3>
            <p className="text-[#0D1216] mb-4 pr-4 text-sm sm:text-base">
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I’m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction.
              He has built a solid team which has consistently delivered on
              projects thereby exceeding everyone’s expectations.
            </p>
            <p className="text-sm sm:text-base text-[#0D1216]">
              I would strongly recommend their services to any organization that
              is looking for solid, reliable, and predictable outcomes.
            </p>
            <button className="bg-[#1C4670] text-white px-6 py-2 rounded mt-8 hover:bg-[#163b5d] transition">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={About}
              alt="Team"
              className="rounded-lg shadow-lg  h-auto "
            />
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-10 lg:px-14 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-between gap-2">
            <div>
              <h2 className="text-sm text-[#EB8D15] uppercase mb-3 font-medium">
                Why RegisterKaro.in
              </h2>
              <h3 className="text-3xl font-bold mb-4">
                Why Choose Register Karo
              </h3>
              <p className="text-[#0D1216] ">
                It is with consistent services and results that build trust with
                the people and that in
                <br /> turn help us to serve the business better.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-[#EDF3FF] p-8 rounded  text-center  border border-[#FCDDEC] w-full lg:w-1/2">
                <FaSmile className="text-blue-500 text-4xl mx-auto mb-4" />
                <h4 className="text-xl font-medium mb-2">
                  Guaranteed Satisfaction
                </h4>
                <p className="text-gray-600">
                  We ensure that you stay 100% <br /> satisfied with our offered
                  services.
                </p>
              </div>
            </div>
          </div>

          <div className="gap-4 grid grid-cols-2">
            <div className="bg-[#FEF3EF] border border-[#FCDDEC] p-8  rounded  text-center ">
              <FaShieldAlt className="text-[#F45C20] text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-medium mb-2">Confidential & Safe</h4>
              <p className="text-[#666666] ">
                All your private information is <br />
                safe with us.
              </p>
            </div>
            <div className="bg-[#F1FBF3] p-8 rounded  text-center border border-[#FCDDEC] ">
              <FaMoneyBillAlt className="text-green-500 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-medium mb-2">No Hidden Fee</h4>
              <p className="text-[#666666]">
                Everything is put before you with
                <br />
                no hidden charges or conditions
              </p>
            </div>
            <div className=" p-8 rounded  text-center border border-[#FCDDEC] bg-[#FBF1FB]">
              <FaUsers className="text-pink-500 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-medium  mb-2">
                Expert CA/CS Assistance
              </h4>
              <p className="text-gray-600">
                Prompt support from our in-house <br />
                expert professionals.
              </p>
            </div>
            <div className=" p-8 bg-[#27AE600A] rounded  text-center border border-[#FCDDEC]">
              <FaLock className="text-orange-500 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-medium mb-2">Confidential & Safe</h4>
              <p className="text-gray-600">
                All your private information is safe
                <br /> with us.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between"></div>
        <div className="flex justify-end gap-8 mt-6"></div>
      </section>
      <section className="bg-[#1C4670] py-12 text-white px-6 sm:px-10 lg:px-14">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className=" mb-8 md:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-2">
                Our Video Introductions
              </h3>
              <p className="text-[#AAB5CD] mb-6">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                magna vulputate pellentesque a diam tincidunt apis dui.
              </p>
              <ul className="space-y-6 ">
                <li className="flex items-start gap-4  ">
                  <MdLightbulbCircle
                    className="text-yellow-400  flex-shrink-0"
                    size={50}
                  />
                  <div className="font-bold text-xl">
                    Explore ideas together
                    <div className="text-[#AAB5CD] font-normal text-[15px]">
                      Engage audience segments and finally create actionable
                      insights.
                      <br /> Amplify vertical integration.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 ">
                  <HiPresentationChartLine
                    className="text-yellow-400 flex-shrink-0
                  "
                    size={50}
                  />
                  <div className="font-bold text-xl">
                    Bring those ideas to life
                    <div className="text-[#AAB5CD] font-normal text-[15px]">
                      Engage audience segments and finally create actionable
                      insights.
                      <br /> Amplify vertical integration.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src={video1}
                  alt="Video Preview"
                  className="rounded-lg shadow-lg"
                />
                <AiFillPlayCircle className="absolute inset-0 text-6xl mx-auto my-auto cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA] py-14">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Our Happy Clients</h2>
          <p className="text-[#666666] my-4">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource- <br />
            leveling customer service for state-of-the-art customer service.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {/* Icons */}
          <div className="group relative">
            <FaShopify className="text-green-500 text-5xl" />
          </div>
          <FaDropbox className="text-blue-500 text-5xl" />
          <FaPinterest className="text-red-500 text-5xl" />
          <FaTrello className="text-blue-400 text-5xl" />
          <SiSlack className="text-purple-500 text-5xl" />
          <SiFigma className="text-orange-500 text-5xl" />
          <SiAirtable className="text-indigo-500 text-5xl" />
          <SiSketch className="text-yellow-500 text-5xl" />
        </div>
        <div className="text-center mt-8">
          <button className="text-[#1C4670] font-semibold text-[15px]">
            Show more &rarr;
          </button>
        </div>
      </section>
      <section className="bg-[#FFA229] py-12 px-6 sm:px-10 lg:px-14">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-around items-center gap-8 text-white">
            {/* Step 1 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#EB5757] p-3 sm:p-4 rounded-full flex justify-center items-center">
                <AiFillFileText size={28} className="text-white" />
              </div>
              <p className="text-[#3C2109] font-semibold text-sm sm:text-base">
                Fill up Application Form
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#27AE60] p-3 sm:p-4 rounded-full flex justify-center items-center">
                <MdPayment size={28} className="text-white" />
              </div>
              <p className="text-[#3C2109] font-semibold text-sm sm:text-base">
                Make Online Payment
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#F2994A] p-3 sm:p-4 rounded-full flex justify-center items-center">
                <MdOutlineManageAccounts size={28} className="text-white" />
              </div>
              <p className="text-[#3C2109] font-semibold text-sm sm:text-base">
                Executive will Process Application
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#828282] p-3 sm:p-4 rounded-full flex justify-center items-center">
                <AiOutlineMail size={28} className="text-white" />
              </div>
              <p className="text-[#3C2109] font-semibold text-sm sm:text-base">
                Get Confirm Mail
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-[#EB8D15] text-sm text-center font-medium">
          EXPLORE OUR BLOGS
        </div>
        <h1 className="text-3xl font-bold text-center my-5">
          Accelerate Digital Transformation
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className=" overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-[#667085] font-semibold my-1">
                  {blog.author} • {blog.date}
                </p>
                <h2 className="text-lg font-bold text-[#1A1A1A]">
                  {blog.title}
                </h2>
                <p className="text-sm text-[#667085] my-2">
                  {blog.description}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#F9F5FF] rounded-full px-2 py-1 text-[#6941C6] font-medium "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-[#1C4670] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition font-semibold">
            Show more blogs &rarr;
          </button>
        </div>
      </section>
      <section className="bg-[#1C4670] text-white py-12 px-14">
        <h2 className=" text-3xl font-bold mb-8">What people says about us</h2>
        <div className=" mx-auto  py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="bg-white text-[#667085] p-6 rounded-lg shadow-md relative"
              >
                <div className="flex justify-between mb-5">
                  <FaQuoteLeft size={20} />
                  <div className="">⭐⭐⭐⭐⭐</div>
                </div>
                <blockquote className="text mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident ea commodo consequat
                  aute irure sint amet occaecat cupidatat non proident
                </blockquote>
                <div className="text-sm flex items-center pt-3">
                  <img
                    src={profile}
                    alt="profile"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-sm text-[#3C2109]">Chris</p>
                    <p className="text-[#282728] text-xs">
                      President and CEO, PrintReach, USA
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA] p-14">
        <div className=" mx-auto text-center mb-8">
          <h3 className="text-sm text-[#EB8D15] font-semibold">FAQ</h3>
          <h2 className="text-3xl font-bold mt-3">Frequent Ask Questions</h2>
        </div>
        <div className=" mx-auto space-y-4">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 flex shadow-md justify-between items-center bg-white hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-[#0D1216]">
                Can I recover deleted files from desktop with this software?
              </p>
              <button className="text-[#0D1216]">→</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-[#1C4670] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
            Show more →
          </button>
        </div>
      </section>
      <section className="bg-[#1C4670] text-white pt-12 ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 ">
          <div className="pb-12 pl-12">
            <h2 className="text-3xl font-bold mb-4 ">
              Manage Your Services by your <br /> Mobile Phone
            </h2>
            <p className="text-[#AAB5CD] mb-6 leading-relaxed">
              Download our app to manage and track your services. Our app
              <br />
              enables you to stay in touch with our experts and aids you in
              tracking <br /> your progress.
            </p>
            <div className="font-medium py-4">Get the App</div>
            <div className="flex gap-4 ">
              <button className="flex items-center bg-white px-5 py-3 rounded-md gap-2 shadow hover:shadow-lg transition">
                <FaApple className="text-[#A5C937]" size={36} />
                <div className="text-left text-black text-sm">
                  <span className="block text-xs">Get it on</span>
                  <span className="block font-semibold text-sm">App Store</span>
                </div>
              </button>

              <button className="flex items-center bg-white px-5 py-3 rounded-md gap-2 shadow hover:shadow-lg transition">
                <FaGooglePlay className="text-[#A5C937]" size={36} />
                <div className="text-left text-black text-sm">
                  <span className="block text-xs">Get it on</span>
                  <span className="block font-semibold text-sm">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="relative  gap-4 justify-center hidden lg:flex">
            <div className="relative w-[300px] h-[400px] overflow-hidden ">
              <img
                src={Screen}
                alt="Phone 1"
                className="absolute top-[80px] left-[-20px] object-cover w-full h-full"
              />
            </div>

            <div className="relative w-[300px] h-[400px] overflow-hidden ">
              <img
                src={Screen}
                alt="Phone 2"
                className="absolute top-[20px] left-[-40px] object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-12">
        <div className="text-center mb-8">
          <h3 className="text-[#EB8D15] font-medium">WHY REGISTER KARO</h3>
          <h2 className="text-3xl font-bold my-3">
            Some Numbers are important
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 text-center my-5">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-[38px] font-extrabold bg-gradient-to-r from-orange-400 to-blue-900 text-transparent bg-clip-text ">
                {stat.value}
              </h3>
              <p className="font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-orange-400 to-blue-900 text-white p-12">
        <div className=" mx-auto text-center">
          <h3 className="text-sm font-semibold mb-3">1% OF THE INDUSTRY</h3>
          <h2 className="text-3xl font-bold mb-4">
            Welcome to your new digital reality. Now.
          </h2>
          <div className="flex justify-center py-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-1/4 p-3 rounded-l-lg text-[#858C95]"
            />
            <button className="bg-[#FFA229] px-6 py-2 rounded-r-lg hover:bg-blue-600 transition text-white font-semibold">
              Submit
            </button>
          </div>
          <div className="my-4 flex justify-center gap-7">
            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <div className="font-medium">Instant results</div>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <div className="font-medium">User-friendly interface</div>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <div className="font-medium">Personalized customization</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#011B5B] text-[#AAB5CD] p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <p className="font-medium leading-relaxed">
              Design outstanding interfaces <br />
              with advanced Figma features <br />
              in a matter of minutes.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF
                size={24}
                className="cursor-pointer hover:text-white transition"
              />
              <FaGoogle
                size={24}
                className="cursor-pointer hover:text-white transition"
              />
              <FaApple
                size={24}
                className="cursor-pointer hover:text-white transition"
              />
              <FaInstagram
                size={24}
                className="cursor-pointer hover:text-white transition"
              />
            </div>
          </div>

          {footer.map((section, index) => (
            <div key={index}>
              <div className="font-bold text-[#FFA229] mb-2">
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-10 text-gray-400">
          <div className="bg-[#FFA229] p-2 mb-4 rounded-full">
            <FiArrowUp
              className="cursor-pointer hover:text-white transition text-white"
              size={30}
            />
          </div>
          <p>&copy; 2024 RegisterKaro. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
