import React from "react";

const curso = {
  "title": "React desde cero",
  "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
  "price": "50usd"
}

const persona = {
  "nombre": "Alberto",
  "apellido": "Quiroga",
  "edad": "29"
}

const Curso = () => (
    <>
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png" alt="" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        { curso.title }
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src={ curso.image } alt={ curso.title } />
            </div>
          </div>
          <span className="small">{`${persona.nombre} ${persona.apellido}`}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://www.google.com">{ curso.price }</a>
      </div>
    </div>
  </article>
  </>
)

export default Curso;