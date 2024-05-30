import NavigationBar from "../components/NavigationBar";
import About from "../components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer"
import Projects from "@/components/Projects";

export default function Home() {
  return (

    <div className="website-container">
    <div className="content">
    <NavigationBar/>
    <About/>
    <Experience/>
    <Projects/>
    <Footer/>
    </div>
    </div>
    
  );
}
