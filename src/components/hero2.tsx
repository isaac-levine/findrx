// React and Next.js imports
// import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
// import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "../../public/logo.png";
import GetStartedButton from "./landing/GetStartedButton";
// import { Spotlight } from "./ui/Spotlight";
// import { SpotlightPreview } from "./landing/SpotlightPreview";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8 border-none"
        />
        <h1 className="!mb-0">
          <Balancer>
            Having a hard time finding your prescription medications?
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground mt-6">
          <Balancer>
            We&apos;ll find your medicine for you - quick and easy. 99% find
            rate guaranteed.
          </Balancer>
        </h3>
        <div className="mt-6">
          <GetStartedButton text="Find my Meds" href="/get-started" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
