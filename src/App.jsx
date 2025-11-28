import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ProjectModal } from "./components";
import Resume from "./components/Resume";
import BackToTop from "./components/BackToTop";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    console.log('App received project click:', project.name);
    setSelectedProject(project);
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works onProjectClick={handleProjectClick} />
        <Feedbacks />
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
    </BrowserRouter>
  );
}

export default App;
