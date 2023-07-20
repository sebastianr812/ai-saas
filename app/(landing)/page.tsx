import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import LandingNavBar from "@/components/landing-nav-bar";

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingNavBar />
            <LandingHero />
            <LandingContent />
        </div>
    );
}

export default LandingPage;