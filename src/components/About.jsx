import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          mollitia velit? Impedit earum suscipit commodi tempora quibusdam
          repellat expedita laboriosam libero delectus, praesentium voluptatem,
          amet officia explicabo? Perferendis, doloribus maxime.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          voluptatum similique blanditiis tempore pariatur iste odio. Animi
          error architecto eos quis amet explicabo et iusto, neque esse ullam
          quos? Eaque, accusantium voluptatibus? Corporis fugiat debitis,
          nostrum natus dolorem facilis vitae excepturi ad consequuntur neque
          ullam molestiae minima, fugit nulla sapiente.
        </p>
      </div>
    </div>
  );
};

export default About;
