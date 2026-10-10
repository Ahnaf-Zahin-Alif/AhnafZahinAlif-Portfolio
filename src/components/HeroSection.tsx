import { HeroIntro } from "./HeroIntro";
import { ProfileCard } from "./ProfileCard";
import { ContactPanel } from "./ContactPanel";

export function HeroSection() {
  return (
    <section id="home" className="w-full pt-10 sm:pt-14 pb-12 sm:pb-16 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
        {/* Left Column: Intro & Status (contains mobile photo on small screens) */}
        <div className="md:col-span-1 lg:col-span-5">
          <HeroIntro />
        </div>

        {/* Center Column: Profile Card with Offset Shadow (Desktop & Tablet only) */}
        <div className="hidden md:flex md:col-span-1 lg:col-span-4 justify-center">
          <ProfileCard />
        </div>

        {/* Right Column: Contact Details Panel */}
        <div className="md:col-span-2 lg:col-span-3">
          <ContactPanel />
        </div>
      </div>
    </section>
  );
}
