import React from "react";
import MoviData from "./MoviData";

function MoviesData() {
  return (
    <>
    <div class="main">
      
    
      <h1 class="text-center py-3" > Best Marathi  Movies Here</h1>

      <div class=" container">
        <div class="row">
          {
          MoviData.map((cval) => {
            return (
              <div class="col-md-4 mt-3">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={cval.cover} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{cval.name}</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href={cval.link} class="btn btn-primary">
                      Show Movie
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
}

export default MoviesData;
