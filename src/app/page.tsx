import React from "react";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { GoogleBatch } from "@/components";

import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { ProjectsForLanding } from "@/components/work/ProjectsForLanding";

export default function Home() {



  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          {/* Shows the Sub-header line like I'm, Pankaj, a Full Stack... */}
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="wrap" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>


          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* For Projects Section */}
      <div>
        <Heading as="h2" variant="display-strong-l" wrap="balance" align="center" marginBottom="8">
          IoT Project from EBIW
        </Heading>
        <RevealFx translateY="16" delay={0.6}>
          <Projects range={[1, 1]} />
        </RevealFx>
      </div>



      {routes["/blog"] && (
        <div>
          <Heading as="h2" variant="display-strong-l" wrap="balance" align="center" marginBottom="8">
            Latest from the blog
          </Heading>
          <Flex fillWidth gap="24" mobileDirection="column">
            <Flex flex={3} paddingX="20" margin="2">
              <Posts range={[1, 2]} columns="2" />
            </Flex>
          </Flex>
        </div>

      )}

      {/* Another section for projects */}
      <div >
        <Heading as="h2" variant="display-strong-l" wrap="balance" align="center">
          Top Key Projects
        </Heading>
        <RevealFx translateY='16' delay={0.5} fillWidth>
          <div style={{ marginTop: '5px' }}>
            <ProjectsForLanding range={[2]} />
          </div>
        </RevealFx>
      </div>

      <div className="border">
        <Heading as="h2" variant="display-strong-l" wrap="balance" align="center">
          Certifications
        </Heading>
        <GoogleBatch />
      </div>

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
