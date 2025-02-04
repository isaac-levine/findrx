import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Container } from "@/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "How does FindRx work?",
    answer:
      "We search pharmacies in your area to find your prescription medication. Starting with your immediate zip code, we expand our search until we locate your medicine, then notify you immediately.",
  },
  {
    question: "What does it cost?",
    answer:
      "One medication search costs $50 USD. We offer a money-back guarantee if we can't find your prescription. You can also purchase searches in bundles for a lower price, starting at $30 per search.",
  },
  {
    question: "What if I can't pick up the medication myself?",
    answer:
      "Don't worry - we'll help you until you successfully pick up your medication, even if someone else needs to pick it up for you.",
  },
  {
    question: "What makes FindRx different?",
    answer:
      "We have a 99% find rate and provide real human support throughout the process. Our team has extensive healthcare experience from leading hospitals and community pharmacies.",
  },
];
const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        {/* <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4> */}
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
