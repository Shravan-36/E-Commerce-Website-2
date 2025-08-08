import React from "react"
import img from "../images/c1.jpg"
import img2 from "../images/c2.jpg"
import img3 from "../images/c3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/c5.jpg"
import img7 from "../images/c6.jpg"
import img8 from "../images/c7.jpg"
export default function Cards(){
    return(
        <div>         
  <div class="container py-6">
    <div class="row gx-0">
      <div class="col-md-12 col-lg-3 mb-4 mb-lg-0">
        <div class="card" style={{height:"500px", width:"300px", padding:"15px", }}>
          <div class="d-flex justify-content-between p-3">
          </div>
          <img src={img} style={{height:"300px"}}
            class="card-img-top" alt="Laptop" />
          <div class="card-body">
          

            <div class=" justify-content-center mb-2 mt-2">
              <h5 class="mb-0">MousePad</h5> 
              <h5 class="text-dark mb-2">₹250</h5><button className="btn btn-primary btn-view">Add to cart</button>
             
            </div>

            <div class="d-flex justify-content-between mb-2">
              
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
        <div class="card" style={{height:"500px", width:"300px", padding:"15px", }}>
          <div class="d-flex justify-content-between p-3">

          </div>
          <img src={img2} style={{height:"300px"}}
            class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
             
            </div>

            <div class=" justify-content-center mb-2 mt-2">
              <h5 class="mb-0">HyperX Pulsefire</h5> 
              <h5 class="text-dark mb-2">₹1,290</h5> <button className="btn btn-primary btn-view">Add to cart</button>
            </div>

            <div class="d-flex justify-content-between mb-2">
              
              <div class="ms-auto text-warning">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
        <div class="card" style={{height:"500px", width:"300px", padding:"15px", }} >
          <div class="d-flex justify-content-between p-3 ">
          </div>
          <img src={img3} style={{height:"300px"}}
            class="card-img-top" alt="Gaming Laptop" />
          <div class="card-body" >
            

            <div class="justify-content-center mb-2 mt-2">
              <h5 class="mb-0">Lenovo Legion R27fc-30 </h5> 
              <h5 class="text-dark mb-2">₹16,990</h5><button className="btn btn-primary btn-view">Add to cart</button>
            </div>

          
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
        <div class="card" style={{height:"500px", width:"300px", padding:"15px", }} >
          <div class="d-flex justify-content-between p-3 ">
          </div>
          <img src={img4} style={{height:"300px"}}
            class="card-img-top" alt="Gaming Laptop" />
          <div class="card-body" >
            

            <div class="justify-content-center mb-2 mt-2">
              <h5 class="mb-0">Logitech  Keyboard</h5> 
              <h5 class="text-dark mb-2">₹8,990</h5> <button className="btn btn-primary btn-view">Add to cart</button>
            </div>

          
          </div>
        </div>
      </div>     
    </div>
  </div>
  <div class="container py-5">
    <div class="row gx-0">
      <div class="col-md-12 col-lg-3 mb-4 mb-lg-0">
        <div class="card" style={{height:"500px", width:"300px", padding:"15px", }}>
          <div class="d-flex justify-content-between p-3">
          </div>
          <img src={img5} style={{height:"300px"}}
            class="card-img-top" alt="Laptop" />
          <div class="card-body">
          

            <div class=" justify-content-center mb-2 mt-2">
              <h5 class="mb-0">White Mulberry L-Shape Desk</h5> 
              <h5 class="text-dark mb-2">₹8,499</h5><button className="btn btn-primary btn-view">Add to cart</button>
            </div>

            <div class="d-flex justify-content-between mb-2">
              
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
        <div class="card" style={{height:"500px", width:"300px", padding:"15px", }}>
          <div class="d-flex justify-content-between p-3">

          </div>
          <img src={img6} style={{height:"300px"}}
            class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
             
            </div>

            <div class=" justify-content-center mb-2 mt-2">
              <h5 class="mb-0">HyperX Cloud Stinger gaming Heaadphones</h5> 
              <h5 class="text-dark mb-2">₹16,698</h5><button className="btn btn-primary btn-view">Add to cart</button>
            </div>

            <div class="d-flex justify-content-between mb-2">
              
              <div class="ms-auto text-warning">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
        <div class="card" style={{height:"500px", width:"300px", padding:"15px", }} >
          <div class="d-flex justify-content-between p-3 ">
          </div>
          <img src={img7} style={{height:"300px"}}
            class="card-img-top" alt="Gaming Laptop" />
          <div class="card-body" >
            

            <div class="justify-content-center mb-2 mt-2">
              <h5 class="mb-0">Concept Kart KZ EDX Pro IEM Earphone</h5> 
              <h5 class="text-dark mb-2">₹1,137</h5><button className="btn btn-primary btn-view">Add to cart</button>
            </div>

          
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
        <div class="card" style={{height:"500px", width:"300px", padding:"15px", }} >
          <div class="d-flex justify-content-between p-3 ">
          </div>
          <img src={img8} style={{height:"300px"}}
            class="card-img-top" alt="Gaming Laptop" />
          <div class="card-body" >
            

            <div class="justify-content-center mb-2 mt-2">
              <h5 class="mb-0">Ant Esports Elite Computer Case</h5> 
              <h5 class="text-dark mb-2" >₹2,360</h5><button className="btn btn-primary btn-view">Add to cart</button>
            </div>

          
          </div>
        </div>
      </div>     
    </div>
  </div>
</div>

    
    )
}