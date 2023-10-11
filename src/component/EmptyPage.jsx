import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const EmptyPage = () => {
  return (
    <div>
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌아가기</Link>
    </div>
  );
};

export default EmptyPage;
