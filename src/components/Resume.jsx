import React from "react";
import { styles } from "../styles";

const Resume = () => {
  return (
    <section id="resume" className={`${styles.padding} max-w-7xl mx-auto mt-16`}>
      <div className="bg-white dark:bg-[#0f1724] dark:text-[#E0E0E0] rounded-2xl p-8 shadow-lg">
        <header className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#333333] dark:text-[#E0E0E0]">ALDRIN DE GUZMAN</h1>
            <p className="text-sm text-[#666666] dark:text-[#bdbdbd] mt-1">Quezon City, Metro Manila • aldrindeguzman127@gmail.com • +63 931 029 6372</p>
            <p className="mt-3 text-sm text-[#666666] dark:text-[#bdbdbd]">Languages: English, Filipino • Availability: Open to internships and entry-level positions</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-[#333333] dark:text-[#E0E0E0]">Junior Software Engineer</p>
            <p className="text-xs text-[#666666] dark:text-[#bdbdbd]">Magna Cum Laude — Far Eastern University (2025)</p>
          </div>
        </header>

        <hr className="my-6 border-t border-gray-200 dark:border-gray-700" />

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-[#333333] dark:text-[#E0E0E0]">Professional Summary</h2>
          <p className="mt-2 text-[#555555] dark:text-[#cfcfcf]">Magna Cum Laude graduate in Information Technology with hands-on experience in full-stack development using Laravel, Vue.js, and Ruby on Rails. Internship experience building scalable APIs and responsive UIs. Strong problem-solving, teamwork, and Agile development skills.</p>
        </section>

        <section className="mb-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-[#333333] dark:text-[#E0E0E0]">Experience</h3>
            <div className="mt-3">
              <p className="font-medium">May 2025 - Aug 2025 — Junior Software Engineer (Intern)</p>
              <p className="text-sm text-[#555555] dark:text-[#cfcfcf]">Cybersoft Content Services, Inc. — Developed web systems using Ruby on Rails, built scalable APIs, and supported web/mobile apps in a hybrid work environment.</p>

              <p className="mt-3 font-medium">Dec 2024 - Mar 2025 — Frontend Developer (Intern)</p>
              <p className="text-sm text-[#555555] dark:text-[#cfcfcf]">Simplevia Technologies Inc. — Built responsive interfaces with Laravel & Vue.js and contributed to full-stack features.</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#333333] dark:text-[#E0E0E0]">Education & Achievements</h3>
            <div className="mt-3 text-sm text-[#555555] dark:text-[#cfcfcf]">
              <p><strong>Aug 2021 - Aug 2025</strong> — Far Eastern University - Diliman, B.S. Information Technology (Magna Cum Laude)</p>
              <p className="mt-2"><strong>Sept 2018 - Feb 2020</strong> — St. Clare College of Caloocan, ICT Strand</p>
              <p className="mt-2">Award-Winning Capstone Project — TICaP 17 (Dec 2024): Best Capstone Project, Best Website, Best Booth Exhibit</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="font-semibold text-[#333333] dark:text-[#E0E0E0]">Technical Skills</h3>
          <div className="mt-3 text-sm text-[#555555] dark:text-[#cfcfcf]">
            <p><strong>Languages:</strong> HTML5, CSS3, JavaScript, PHP, Ruby</p>
            <p><strong>Development:</strong> Full-stack Web Development, Database Management, Mobile App Development</p>
            <p><strong>Tools:</strong> Git, MySQL Workbench, Docker</p>
            <p><strong>Certifications:</strong> IT Specialist (HTML/CSS), DevNet Associate, CCNA Enterprise Networking</p>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-[#333333] dark:text-[#E0E0E0]">Projects & Highlights</h3>
          <ul className="mt-3 list-disc list-inside text-sm text-[#555555] dark:text-[#cfcfcf]">
            <li>Pin Puntod — Web & Mobile Grave Locator with GPS and Google Maps (Thesis)</li>
            <li>Paraverse — University portfolio / profile (link placeholder)</li>
            <li>Capstone — Full-stack implementation with responsive UI</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Resume;
