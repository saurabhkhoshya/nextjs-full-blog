import ReactMarkdown from 'react-markdown';
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
const DUMMY_POST = {
  slug: "getting-started-with-nextjs1",
  title: "Getting Started with NextJs",
  image: "getting-started-nextjs.png",
  excerpt:
    "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
  date: "2022-02-01",
  content: "# This is a first Post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {/* <ReactMarkdown>{DUMMY_POST.content} </ReactMarkdown> */}
    </article>
  );
}

export default PostContent;
