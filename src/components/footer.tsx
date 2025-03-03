import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "./craft";
import Logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer>
      <Section className="border-t mt-12">
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">FindRx</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              />
            </Link>
            <p>
              <Balancer>
                FindRx helps patients quickly locate and access their
                prescription medications by searching across local pharmacies in
                real-time.
              </Balancer>
            </p>
            <p className="text-muted-foreground">
              © <a href="https://findrx.com">FindRx</a>. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
