import React from "react";
import Book from "./Book";

export default function Library() {
  return (
    <div>
      {/* Book 컴포넌트한테 name과 numOfPage의 값을 각각 넘김 */}
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}
