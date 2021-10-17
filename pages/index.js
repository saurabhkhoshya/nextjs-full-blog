import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    date: "2022-02-01",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    date: "2022-02-01",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    date: "2022-02-01",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    date: "2022-02-01",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero -> Present ourselves
// 2) Featured Posts
