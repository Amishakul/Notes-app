import React from "react";
import img1 from "../assets/img/physics.jpg";
import img2 from "../assets/img/chemistry.jpg";
import img3 from "../assets/img/maths.jpg";
import img4 from "../assets/img/computer.jpg";
import img5 from "../assets/img/IT.jpg";
import img6 from "../assets/img/electronics.jpg";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Notes
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Physics"  notesLink="https://drive.google.com/drive/folders/1ZC5rlLCndna9K_wKwJuFNwSoTcnXouqE?usp=sharing"/> 
        <MenuCard img={img2} title="Chemistry"  notesLink="https://drive.google.com/drive/folders/1LEwOZjjUwsndSL_Np8SPUhXgUI1js3ys?usp=sharing"/>
        <MenuCard img={img3} title="Maths" notesLink="https://drive.google.com/drive/folders/11z84cYz07r4a1ROdkH3AhM9fcvolDzDm?usp=sharing"/>
        <MenuCard img={img4} title="Computer" notesLink="https://drive.google.com/drive/folders/1jc1VGcI2VUmhXmNSAw9h4THeVunqeh0V?usp=sharing"/>
        <MenuCard img={img5} title="Information Technology" notesLink="https://drive.google.com/drive/folders/1Q0tzuLnmvVZFDdPSMEYuzO9fBuzzR_QH?usp=sharing" />
        <MenuCard img={img6} title="Electronics"  notesLink="https://drive.google.com/drive/folders/17tByreyCsEG7Er2U6ZhAhqxJQoOgukm-?usp=sharing"/>
      </div>
    </div>
  );
};

export default Menu;