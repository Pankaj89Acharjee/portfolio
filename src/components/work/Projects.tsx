import { getPosts } from "@/app/utils/utils";
import { Column, Row } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]); // Path is src/app/work/projects where all the .mdx files are residing


  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Row fillWidth gap="xl" marginBottom="40" paddingX="l" marginTop="40" mobileDirection="column">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          techavatars={post.metadata.techStackImages?.map((member) => ({ src: member.logos})) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Row>
  );
}
