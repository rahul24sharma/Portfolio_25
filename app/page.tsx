"use client";

import { navItems } from "@/data";
import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Fix lazy imports - make sure they return default exports correctly
const FloatingNav = lazy(() => import("@/components/ui/FloatingNavbar").then(mod => ({ default: mod.FloatingNav })));
const Grid = lazy(() => import("@/components/Grid"));
const RecentProjects = lazy(() => import("@/components/RecentProjects"));
const Clients = lazy(() => import("@/components/Clients"));
const Experience = lazy(() => import("@/components/Experience"));
const Approach = lazy(() => import("@/components/Approach"));

// Simple loading components
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`w-full ${height} bg-gray-800/20 animate-pulse rounded-lg`} />
);

const NavSkeleton = () => (
  <div className="h-16 bg-gray-800/20 animate-pulse rounded-full w-full mb-8" />
);

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Above-the-fold content - load immediately */}
        <Suspense fallback={<NavSkeleton />}>
          <FloatingNav navItems={navItems} />
        </Suspense>
        
        <Hero />
        
        {/* Grid needs special handling since it uses Lottie */}
        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Grid />
        </Suspense>
        
        {/* Other sections */}
        <Suspense fallback={<SectionSkeleton />}>
          <RecentProjects />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton height="h-48" />}>
          <Clients />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Approach />
        </Suspense>
        
        <Footer />
      </div>
    </main>
  );
};

export default Home;