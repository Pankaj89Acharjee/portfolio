"use client";

import { mailchimp } from "@/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import React, { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const [state, setState] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<null | "success" | "error">(null)

  const handleSendEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        Contact Me
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
        action="https://formspree.io/f/xblklrln"  //FormSpree API endpoint
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        onSubmit={() => setStatus("success")}
      >
        <Column id="mc_embed_signup_scroll" fillWidth maxWidth={24} mobileDirection="column" gap="8">
          <Input
            formNoValidate
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            value={state.name}
            onChange={(e) => {
              handleSendEmail(e)
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={error}
          />

          <Input
            formNoValidate
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={state.email}
            onChange={(e) => {
              handleSendEmail(e)
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={error}
          />


          <Input
            formNoValidate
            id="message"
            name="message"
            type="text"
            placeholder="Your Message"
            required
            value={state.message}
            onChange={(e) => {
              handleSendEmail(e)
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={error}
          />

          <Button type="submit" size="m" fillWidth>
            Send Message
          </Button>
          {status === "success" && <Text color="success">Thank you! Your message has been sent.</Text>}
          {status === "error" && <Text color="danger">Oops! Something went wrong.</Text>}
        </Column>
      </form>
    </Column>
  );
};
