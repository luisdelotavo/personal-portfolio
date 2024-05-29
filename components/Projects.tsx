import React from 'react';
import githubIcon from '../public/github.png';
import Image from 'next/image';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="font-poppins section-container pb-10">
      <div className="project-text mb-2">
        <h1>Projects</h1>
        <p>
          Some projects that I'd like to showcase. However, all my other repositories are on my GitHub.
          <a href="https://github.com/luisdelotavo" target="_blank" rel="noopener noreferrer" className="github-link">
            <Image src={githubIcon} alt="GitHub" className="github-icon" width={24} height={24} />
          </a>
        </p>
      </div>

      <div className="list-projects">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red" />
            <div className="header-button yellow" />
            <div className="header-button green" />
          </div>
          <div className="terminal-window">
            <div className="statement">
              <div className="input-statement">projects.search('machine learning')</div>
              <div className="return-statement"> &#123;
                title: <a href="https://github.com/luisdelotavo/premier-league-predictor" target="_blank" rel="noopener noreferrer" className="project-title">"English Premier League Predictor"</a>, <br />
                date: "November 2022", <br />
                description: <br />
                [ 'Designed and implemented an 84% accurate predictive model to forecast <br />
                the outcomes of English Premier League (EPL) football matches, utilizing Python, <br />
                Jupyter Notebooks, and advanced analytics with the pandas and sklearn libraries.', <br />
                'Using a RandomForestClassifier model which is trained with predictors like rolling <br />
                averages, shots, goals attempted, free-kicks, penalty kicks, and etc.'
                ], <br />
                technologies: [
                  "Python", "Jupyter Notebooks"
                ]
                &#125;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-projects">
        <div className="project-container">
          <div className="terminal">
            <div className="terminal-header">
              <div className="header-button red" />
              <div className="header-button yellow" />
              <div className="header-button green" />
            </div>
            <div className="terminal-window">
              <div className="statement">
                <div className="input-statement">projects.pop()</div>
                <div className="return-statement"> &#123;
                title: <a href="https://github.com/luisdelotavo/se3316-ldelotav-ddeleon5-echevari-lab4" target="_blank" rel="noopener noreferrer" className="project-title">"Western Waves"</a>, <br />
                  date: "October 2022", <br />
                  description: <br /> [
                    'Built a web application deployed on AWS that allows users to find and discover music from different artists, genres, and <br />
                    tracks. Additionally, users can create new playlists and add tracks to it.', <br />
                    'Developed and integrated a RESTful framework using Node.js to interface with a MongoDB database, enabling efficient fetching, manipulation, and deletion of data across thousands of entries.'
                  ], <br />
                  technologies: [ "JavaScript", "React", "MongoDb", "Node.js", "Amazon Web Services" ]
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="terminal">
            <div className="terminal-header">
              <div className="header-button red" />
              <div className="header-button yellow" />
              <div className="header-button green" />
            </div>
            <div className="terminal-window">
              <div className="statement">
                <div className="input-statement">projects[10]</div>
                <div className="return-statement"> &#123;
                  title: <a href="https://github.com/luisdelotavo/xenos" target="_blank" rel="noopener noreferrer" className="project-title">"Xenos"</a>, <br />
                  date: "April 2021", <br />
                  description: <br /> [
                    'Created a 3D adventure game following an iterative software development life cycle model', <br />
                    'Contained 3 different environments, 5 playable characters, ranged and melee combat, inventory selection, a currency system, and much more', <br />
                    'Utilized Blender to enhance the effects and animations of pve combat'
                  ], <br />
                  technologies: [ "Unity", "Blender", "C#" ]
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
