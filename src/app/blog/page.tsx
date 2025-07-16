import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`, // it is Brief details about design and project setup
    path: blog.path,  // it is /blog
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="xl" variant="display-strong-s">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1}>
				<Posts range={[1,1]} thumbnail direction="column"/>
				<Posts range={[2,3]} thumbnail columns="2"/>
				<Posts range={[4]} columns="3"/>
			</Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
