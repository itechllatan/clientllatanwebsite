// import { Image } from "./image";
import React from "react";
import Card from './Card/Card';

import caja from './../imgs/cajaArequipa.jpg';
import enzyme from './../imgs/enzyme.jpg';
import inviertis from './../imgs/inviertis.jpg';
import lavoro from './../imgs/lavoro.jpg';
import redi from './../imgs/redi.png';
import target from './../imgs/target.png';
import aquituref from './../imgs/aquituref.png';



export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Clientes</h2>
          <p>
            Algunos de las empresas con las que ha trabajado LLATAN.
          </p>
        </div>

          <div className="row">
            <Card
              frontImg={caja}
              title="Caja Arequipa"
            />

            <Card
              frontImg={enzyme}
              title="Enzyme Solutions"
            />

            <Card
              frontImg={inviertis}
              title="Inviertis"
            />

            <Card
              frontImg={lavoro}
              title="Obvietivo Lavoro"
            />

            <div className="group2">

              <Card
                frontImg={redi}
                title="REDI"
              />

              <Card
                frontImg={target}
                title="Consulting Target"
              />

              <Card
                frontImg={aquituref}
                title="Aqui Tu Reforma"
              />
            </div>
          </div>
      </div>
    </div>
  );
};
