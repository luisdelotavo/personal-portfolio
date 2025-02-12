import Image from 'next/image';
import { FaFile, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

export const metadata = {
  title: 'Luis Delotavo',
};

export default function Home() {
  return (
    <main className="bg-white text-black tracking-[-0.1em] min-h-[calc(100vh-20vh)] flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left-hand side text content with negative margin on large screens */}
          <div className="lg:w-1/2 lg:-mt-7">
            <h2 className="text-[3rem] font-bold tracking-[-0.1em]">Hello! I&apos;m Luis,</h2>
            <h3 className="text-[3rem] font-bold mb-2 tracking-[-0.1em]">
              a software engineer from Canada.
            </h3>
            <p className="mb-2 text-[1rem] tracking-[-0.1em] text-lg">
              I am passionate about developing new technologies and am eager to learn new skills.
            </p>
            <p className="mb-2 text-[1rem] tracking-[-0.1em] text-lg">
              I&apos;m currently a student at Western University based in London, Ontario finishing my<br />
              bachelor&apos;s degree in Software Engineering where I spent 5 years learning the fundamentals<br />
              of engineering, design, and programming. Over the course of my studies, I&apos;ve had the<br />
              opportunity to work with both small and large, specialized and cross-functional teams and<br />
              have developed the ability to lead, collaborate, and create.
            </p>
            <p className="mb-2 text-[1rem] tracking-[-0.1em] text-lg">
              My interests include artificial intelligence/machine learning, blockchain, and data cloud<br />
              management. If you&apos;re here recruiting, you should hire me...?
            </p>
            <div className="flex space-x-2 text-2xl">
              {/* Resume download */}
              <a className="hover:text-gray-700" href="/luisdelotavo_resume.pdf" download>
                <FaFile />
              </a>
              {/* LinkedIn */}
              <a
                className="hover:text-gray-700"
                href="https://www.linkedin.com/in/luisdelotavo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              {/* GitHub */}
              <a
                className="hover:text-gray-700"
                href="https://github.com/luisdelotavo/luisdelotavo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              {/* YouTube */}
              <a
                className="hover:text-gray-700"
                href="https://www.youtube.com/@luisdelotavo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Right-hand side image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <Image
              src="/Luis-Delotavo-banner.jpg"
              alt="Portrait of Luis Delotavo standing in front of a green, leafy background"
              width={600}
              height={400}
              className="w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
