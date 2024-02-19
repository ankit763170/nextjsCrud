import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <span key="date" className={styles.detailTitle}>
          01.01.2024
        </span>
        <h1 key="title" className={styles.title}>
          Title
        </h1>
        <div className={styles.detail}>
          <Image
            key="avatar"
            className={styles.avatar}
            src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg"
            alt=""
            width={50} // Add appropriate width
            height={50} // Add appropriate height
          />
        </div>
        <div className={styles.detailText}>
          <span key="authorTitle" className={styles.detailTitle}>
            Author
          </span>
          <span key="authorName" className={styles.detailValue}>
            Terry Jefferason
          </span>
        </div>
        <div key="content" className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          cumque facilis itaque nam deserunt dicta repellendus, esse aliquid
          veniam obcaecati ipsa tempora explicabo deleniti officia officiis
          dignissimos! Animi, ut laborum.
        </div>
      </div>
    </div>
  );
}

export default PostCard;
