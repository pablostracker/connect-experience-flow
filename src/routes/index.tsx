import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { ExecutiveProfile } from "@/components/site/ExecutiveProfile";
import { WhatIConnect } from "@/components/site/WhatIConnect";
import { SelectedImpact } from "@/components/site/SelectedImpact";
import { Journey } from "@/components/site/Journey";
import { AILab } from "@/components/site/AILab";
import { SideQuests } from "@/components/site/SideQuests";
import { Education } from "@/components/site/Education";
import { Languages } from "@/components/site/Languages";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ExecutiveProfile />
        <WhatIConnect />
        <SelectedImpact />
        <Journey />
        <AILab />
        <SideQuests />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

