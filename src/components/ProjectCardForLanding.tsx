"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCardForLanding: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <div style={{ width: '500px' }}>
      <Column fillWidth gap="s">
        <div style={{ width: '500px', height: '300px' }}>
          <Carousel
            sizes="(max-width: 960px) 100vw, 960px"
            items={images.map((image) => ({
              slide: image,
              alt: title,
            }))}
          />
        </div>

        <Flex
          direction="column"          
          fillWidth
          paddingX="s"
          paddingTop="1"
          paddingBottom="1"
          gap="s"
        >
          {title && (
            <Flex flex={12}>
              <Heading as="h2" wrap="wrap" variant="heading-strong-l">
                {title}
              </Heading>
            </Flex>
          )}

    

          {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
            <Column flex={8} gap="16">
           
              <Flex gap="24" wrap>
                {content?.trim() && (
                  <SmartLink
                    suffixIcon="arrowRight"
                    style={{ margin: "0", width: "fit-content" }}
                    href={href}
                  >
                    <Text variant="body-default-s">Project Case Study</Text>
                  </SmartLink>
                )}
            
              </Flex>
            </Column>
          )}
        </Flex>
      </Column>
    </div>

  );
};
