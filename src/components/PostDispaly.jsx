import React from "react";
import Post from "./Post";
import "./postDisplay.css";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../fetc-query/http";

function PostDispaly() {
  const { data, isError, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  return (
    <>
    {!isPending && isError && <p>Failed to fetch</p>}
      {isPending && <p>Loading post....</p>}
      {(!isPending && !isError && data.length > 0) && (
        <ul className="posts">
          {data.map((item) => {
            return <Post key={item.id} name={item.author} text={item.body} />;
          })}
        </ul>
      )}
    </>
  );
}

export default PostDispaly;
