import { Column, Grid, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { ProjectsForWorkPage } from "@/components/work/ProjectsForWorkPage";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (


    <Grid columns="2" mobileColumns="1" fillWidth gap="xl" marginBottom="40" paddingX="xl" marginTop="40">      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title='{work.title}'
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
        <ProjectsForWorkPage />
    </Grid>
  );
}
