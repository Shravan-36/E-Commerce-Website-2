import React from "react"
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light " aria-label="Third navbar example" style={{backgroundColor:"rgb(53, 46, 106)"}}>
                <div class="container-fluid"> <a class="navbar-brand" href="#">NextGenGaming</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span> </button>
                          <div class="collapse navbar-collapse" id="navbarsExample03">
                             <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                                 <li class="nav-item"> 
                                <a class="nav-link active" aria-current="page" href="#">Home</a> </li> 
                                <li class="nav-item"> 
                                    <a class="nav-link" href="#">Link</a> </li> 
                                <li class="nav-item dropdown"> 
                                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a> 
                                    <ul class="dropdown-menu"> <li><a class="dropdown-item" href="#">Monitors</a></li> 
                                    <li><a class="dropdown-item" href="#">Laptops</a></li>
                                     <li><a class="dropdown-item" href="#">Mouse</a></li> </ul> </li> </ul> 
                                     <form role="search"> <input class="form-control" type="search" placeholder="Search" aria-label="Search"/> 
                                     </form> 
                                     </div>
                                      </div> 
                                      </nav>
        </div>
    )
}