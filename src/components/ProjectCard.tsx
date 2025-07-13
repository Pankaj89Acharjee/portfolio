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
  techavatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  techavatars,
  link,
}) => {
  return (
    <div style={{ width: '1024px' }}>
      <Column fillWidth gap="s">
        <div style={{ width: '100%', height: '590px' }}>
          <Carousel
            sizes="(max-width: 960px) 100vw, 970px"
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
              <Row fillWidth gap="l" marginBottom="4" paddingX="s" marginTop="4" mobileDirection="column">
                {techavatars?.length > 0 && <AvatarGroup avatars={techavatars} size="l" reverse />}
                {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
              </Row>


              {description?.trim() && (
                <Text wrap="wrap" variant="body-default-l" onBackground="neutral-weak">
                  {description}
                </Text>
              )}
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
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant="body-default-s">View project</Text>
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
