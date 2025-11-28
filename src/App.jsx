import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";

import { About, Contact, Experience, Wins, Hero, Navbar, Tech, Works, StarsCanvas, ProjectModal } from "./components";
import Resume from "./components/Resume";
import BackToTop from "./components/BackToTop";
import { projects as allProjects } from "./constants";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectList, setSelectedProjectList] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const handleProjectClick = (project) => {
    console.log('App received project click:', project.name);
    setSelectedProject(project);
    setSelectedProjectList(null);
  };

  const handleServiceClick = (serviceTitle) => {
    const category = /mobile/i.test(serviceTitle) ? "mobile" : "web";
    const filtered = allProjects.filter(p => Array.isArray(p.categories) && p.categories.includes(category));
    setSelectedProject(null);
    setSelectedProjectList(filtered);
    const formatted = /mobile/i.test(serviceTitle) ? "Mobile App Projects" : "Web Developer Projects";
    setModalTitle(formatted);
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About onServiceClick={handleServiceClick} />
        <Experience />
        <Tech />
        <Works onProjectClick={handleProjectClick} />
        <Wins />
        <Resume />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <BackToTop />
      </div>

      {/* Portal for modal to render outside of z-0 contexts */}
      {selectedProject && (
        <>
          {console.log('Rendering modal for:', selectedProject.name)}
          {createPortal(
            <ProjectModal
              project={selectedProject}
              isOpen={selectedProject !== null}
              onClose={() => {
                console.log('Closing modal');
                setSelectedProject(null);
              }}
            />,
            document.body
          )}
        </>
      )}
      {selectedProjectList && (
        createPortal(
          <ProjectModal
            projects={selectedProjectList}
            title={modalTitle}
            isOpen={selectedProjectList !== null}
            onClose={() => {
              setSelectedProjectList(null);
              setModalTitle("");
            }}
          />,
          document.body
        )
      )}
    </BrowserRouter>
  );
}

export default App;
