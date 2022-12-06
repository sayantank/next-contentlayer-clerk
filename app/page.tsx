import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function HomePage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div>
      {posts.map((post, idx) => (
        <div key={idx} {...post}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
}
