// import Link from "next/link";

// import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
// import { Button } from "../ui/button";
// import { Link } from "lucide-react";
import GetStartedButton from "./GetStartedButton";
// import { Badge } from "../ui/badge";

const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <h1 className="!mb-0">
          No more constantly calling and visiting your local pharmacies
        </h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          After submitting your information, we call pharmacies near your area.
          A real person will help you every step of the way until you pick up
          your medication. If we can&apos;t find your prescription, we&apos;ll
          refund your payment or help you search for alternatives.
        </h3>
        <div className="flex gap-4">
          <GetStartedButton text={"Find my Meds"} href={"/get-started"} />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
