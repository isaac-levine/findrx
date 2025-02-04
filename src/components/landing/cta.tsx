"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function CTA() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Section>
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="!my-0">Find your medications quickly and easily</h2>
        <p className="text-lg opacity-70 md:text-2xl">
          <Balancer>
            Stop spending hours searching for your prescriptions. Let us do the
            work for you with our guaranteed medication finding service.
          </Balancer>
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 flex h-fit items-center justify-center gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="!mt-0 md:w-64"
                      placeholder="Your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
}

export default CTA;
