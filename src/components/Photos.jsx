import React from "react";
import Profile from "./Profile";
import Img from "./Img";
import Card from "./Card";

const Photos = () => {
  return (
    <Profile>
      <Card marginTop={true}>
        <div className="border-b border-gray-300 mb-5">
          <h2 className="text-center lg:text-start font-bold text-2xl pb-4 ">
            My Photos
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center mb-5 gap-5">
          <Img
            imgUrl={
              "https://plus.unsplash.com/premium_photo-1673329272515-e5373f10082b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbmQlMjBzY2FwZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
            }
          />
          <Img
            imgUrl={
              "https://images.unsplash.com/photo-1575554665850-67da05060ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmQlMjBzY2FwZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
            }
          />
          <Img
            imgUrl={
              "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmQlMjBzY2FwZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
            }
          />
          <Img
            imgUrl={
              "https://images.unsplash.com/photo-1621617249658-f7541ef42a93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmQlMjBzY2FwZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
            }
          />
          <Img
            imgUrl={
              "https://images.unsplash.com/photo-1610574010565-f4c089a0e138?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbmQlMjBzY2FwZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
            }
          />
          <Img
            imgUrl={
              "https://images.unsplash.com/photo-1579294800821-694d95e86143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmQlMjBzY2FwZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
            }
          />
          <Img
            imgUrl={
              "https://images.unsplash.com/photo-1431032843361-ec2cd229c751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZCUyMHNjYXBlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            }
          />
          <Img
            imgUrl={
              "https://images.unsplash.com/photo-1612712191426-54db4d88cbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZCUyMHNjYXBlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            }
          />
        </div>
      </Card>
    </Profile>
  );
};

export default Photos;
