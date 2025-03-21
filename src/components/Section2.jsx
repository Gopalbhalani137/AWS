import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <section id="section-2" className="relative w-full h-screen bg-[#040e15] z-2 flex items-center justify-center">
      <Parallax translateY={[-10, 10]}>
        <div className="flex flex-col gap-6 items-center text-center md:pt-48 md:p-28">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 2, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 bg-[#78D3E3] text-transparent bg-clip-text pt-12 md:pb-10"
          >
            Aim of Cloud Club
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl bg-gradient-to-r from-cyan-200 bg-[#78D3E3] text-transparent bg-clip-text px-8 md:px-0"
          >
            AWS Cloud Club at Adani University is a student-led community
            focused on cloud computing, AWS technologies, and career growth in
            cloud-related fields. The club connects students with industry
            experts and AWS professionals through guest lectures and networking
            events. Members get opportunities to work on real-world projects and
            enhance their cloud skills. It fosters collaboration, innovation,
            and learning in cloud computing among university students.
          </motion.p>
        </div>
      </Parallax>
    </section>
  );
}