import React  from "react";

const Card=()=>{
return(

    <>
    <div className="container">
        <div className="row">


            <div className="col-md-5 m-3">
            <div class="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/id/247/200/300" class="card-img-top" alt="first card"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>

            
            <div className="col-md-5 m-3">
            <div class="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/id/247/200/300" class="card-img-top" alt="first card"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>



           

        </div>
    </div>
    </>
);

}

export default Card;