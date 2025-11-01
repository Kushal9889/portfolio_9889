import React from "react";
import BlogCard from "./BlogCard/BlogCard";

function Blogs() {
  return (
    <React.Fragment>
      <div className="ProjectWrapper" id="blogs">
        <div className="Container">
          <div className="SectionTitle blogs">Research Papers</div>
          <BlogCard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blogs;
