import React from "react";
import Profile from "./Profile";
import Card from "./Card";

const about = () => {
  return (
    <Profile>
      <Card marginTop={true}>
        <h1 className="text-2xl text-center lg:text-start mb-2 font-bold font-poppins">
          About Me
        </h1>
        <p className="mb-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          recusandae repudiandae quas id praesentium culpa, provident
          voluptatum! Nisi ipsum necessitatibus quas neque numquam delectus
          libero molestias. Ullam itaque neque maxime animi hic id perferendis
          quae consequuntur, excepturi aliquam non ratione!
        </p>
        <p className="mb-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          recusandae repudiandae quas id praesentium culpa, provident
          voluptatum! Nisi ipsum necessitatibus quas neque numquam delectus
          libero molestias. Ullam itaque neque maxime animi hic id perferendis
          quae consequuntur, excepturi aliquam non ratione!
        </p>
      </Card>
    </Profile>
  );
};

export default about;
