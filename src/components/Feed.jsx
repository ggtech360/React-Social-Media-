import React from "react";
import Profilepic from "./Profilepic";
import { Link } from "react-router-dom";
import Card from "./Card"

const Feed = ({marginTop}) => {
  return (

    // Post
    <Card marginTop={marginTop}>

      {/* post header */}
      <div className="flex">
        <div>
          <Link to={'/profile/posts'}>
          <Profilepic />
          </Link>
        </div>
        <div className="name mx-2">
          <p>
            <Link to={'/profile/posts'} className="hover:border-b border-black font-bold">Leonardo Daniel</Link> shared a photo
          </p>
          <p className="text-sm text-gray-400 font-medium">2 hours ago</p>
        </div>
      </div>

      {/* post content (caption, image) */}
      <div className="my-2 mb-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          quasi!
        </p>
      </div>
      <div className="img overflow-hidden rounded-md">
        <img
          className="bg-cover bg-center"
          src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post"
        />
      </div>

      {/* post actions (like, comment, share) */}
      <div className="actions flex gap-6 mx-2 items-center mt-3">
        <button className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          48
        </button>
        <button className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          22
        </button>
        <button className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          11
        </button>
      </div>

      {/* horizontal line */}
      <hr className="border-1 border-gray-200 my-3" />

      {/* comment section */}
      <div className="comment relative flex items-center gap-1 mt-3">
        <div>
          <Profilepic />
        </div>
        <div className="grow">
          <input
            name="comment"
            placeholder="Post a comment"
            className="outline-none rounded-full border border-gray-400 py-3 w-full px-3"
          />
        </div>
        <button className="absolute right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      </div>
    </Card>
  );
};

export default Feed;
