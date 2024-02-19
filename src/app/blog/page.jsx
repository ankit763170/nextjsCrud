import React from "react";
import styles from "./blog.module.css";

function BlogPage() {
  const posts = [{}];
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}></div>
      ))}
    </div>
  );
}

export default BlogPage;
