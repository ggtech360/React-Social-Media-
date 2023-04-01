import React from "react";
import Profile from "./Profile";
import Card from "./Card";
import Friendlist from "./Friendlist";

const Friends = () => {
  return (
    <Profile>
      <Card marginTop={true}>
        <h1 className="text-2xl font-bold font-poppins lg:text-start text-center">
          Friends List
        </h1>
        <div className="my-5 lg:my-8">
          <div className=" border-b border-gray-300 py-3 -mx-3">
            <Friendlist />
          </div>
          <div className=" border-b border-gray-300 py-3 -mx-3">
            <Friendlist />
          </div>
          <div className=" border-b border-gray-300 py-3 -mx-3">
            <Friendlist />
          </div>
          <div className=" border-b border-gray-300 py-3 -mx-3">
            <Friendlist />
          </div>
          <div className=" border-b border-gray-300 py-3 -mx-3">
            <Friendlist />
          </div>
          <div className=" border-b border-gray-300 py-3 -mx-3">
            <Friendlist />
          </div>
        </div>
      </Card>
    </Profile>
  );
};

export default Friends;
