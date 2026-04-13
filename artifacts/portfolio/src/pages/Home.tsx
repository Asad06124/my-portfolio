import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-white">
      <HeroSection />
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}

function AboutSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
      data-testid="section-about"
    >
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
            About<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary mt-6"></div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Mobile Developer with over 4 years of experience building and launching apps across healthcare, e-commerce, and enterprise sectors. Primary expertise in Flutter, now focusing on iOS Native (Swift/SwiftUI) and React Native development. Expert in state management, API integration, and App Store deployment. Advocates for clean, modular code and takes full ownership of features — from design to final deployment.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
