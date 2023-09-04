import { getAllPosts } from "@/actions/postActions";
import Feature from "@/components/Feature";
import Pagination from "@/components/Pagination";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

const Home = async ({ searchParams, params }) => {
  const { posts, count, totalPage } = await getAllPosts(searchParams);
  return (
    <div className="container pt-3">
      <h1>NextJS 13.4 Server Actions + MongoDB</h1>
      <h2>C.R.U.D + Sort + Search + Pagination</h2>

      <PostForm />
      <Feature />

      {posts && <PostList posts={posts} />}

      {totalPage && <Pagination totalPage={totalPage} />}
    </div>
  );
};

export default Home;
