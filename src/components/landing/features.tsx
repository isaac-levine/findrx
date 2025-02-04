// React and Next.js
import React, { JSX } from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Fill out the FindRx form",
    description:
      "Provide your medication and payment details, along with your contact information. One med search for $50 USD, with guaranteed pickup or your money back.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "We find your medication",
    description:
      "Our team searches pharmacies in your area, starting with your immediate zip code and expanding outward until we locate your prescription.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Pick up your medication",
    description:
      "Once we find your medication, we'll notify you immediately. Let your doctor know about the pharmacy, and you're all set to pick up your prescription.",
  },
];

const Feature = () => {
  return (
    // removed border-b from this section
    <Section className="">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Find Your Medications Quickly and Easily</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              99% success rate in locating hard-to-find prescriptions
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
