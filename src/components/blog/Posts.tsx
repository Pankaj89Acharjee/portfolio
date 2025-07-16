import { getPosts } from '@/app/utils/utils';
import { Grid } from '@once-ui-system/core';
import Post from './Post';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

export function Posts({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: PostsProps) {
    let allBlogs = getPosts(['src', 'app', 'blog', 'posts']);

    //Sorting the latest blog post at the top (newest at the first)
    const sortedBlogs = allBlogs.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    // slice(start, end) returns elements from start (inclusive) to end (exclusive).
    // range[0] - 1: Converts the 1-based index you pass in the prop to a 0-based index for JavaScript arrays.
    // range.length === 2 ? range[1] : sortedBlogs.length:
    // If range has two numbers, use the second as the end index (still 1-based, so it's exclusive).
    // If range has only one number, slice to the end of the array.


    // Examples:
    // range = { [1, 1]} → slice(0, 1) → returns the first post only.
    // range = { [2, 3]} → slice(1, 3) → returns the second and third posts.
    // range = { [4]} → slice(3, sortedBlogs.length) → returns all posts from the fourth onward.

    const displayedBlogs = range
        ? sortedBlogs.slice(
            range[0] - 1,
            range.length === 2 ? range[1] : sortedBlogs.length
        )
        : sortedBlogs;

    return (
        <>
            {displayedBlogs.length > 0 && (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="12">
                    {displayedBlogs.map((post) => (
                        <Post
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}