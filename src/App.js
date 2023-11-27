
import { Button, Carousel, Col, Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { GiOrange } from "react-icons/gi";
import './App.css';
import { Images } from 'react-bootstrap-icons';
import React, { useState } from 'react';



function App() {
  return (
    
    <div className="App">
    {/* ************* NAVBAR ****************/}

    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" id='hh' ><GiOrange className='rotate' style={{color:"orange", marginBottom:"1px",marginRight:"1.5px" }} />range</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   {/* ***************center div***************** */}

   <h1 style={{display:"flex",justifyContent:"center", marginTop:"70px"}}>This is landing page</h1>
   <h4 style={{display:"flex",justifyContent:"center", marginTop:"30px"}}>We hope you find what you're looking for and that you enjoy your stay</h4>

   <div  style={{display:"flex",justifyContent:"center", marginTop:"30px"}}>
     <Button variant="dark" style={{marginRight:"15px"}}>Start now</Button>
     <Button variant="outline-dark">Learn more</Button>
   </div>
   

   

     <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
     <Image style={{width:"250px", marginRight:"26px"}} src="https://cdnb.artstation.com/p/assets/images/images/029/010/107/large/khaled-allahou-matt-black-orange-01.jpg?1596180189" rounded />
     <Image style={{width:"250px"}} src="https://defydrinks.com/cdn/shop/products/boost-orange_Front_store1_600x.png?v=1673397269" rounded />
     <Image style={{width:"250px", marginLeft:"26px"}} src="https://www.ateriet.com/wp-content/uploads/2015/11/29-e1447593473397.jpg" rounded />
     </div>


     <section id="counter" class="sec-padding">
		<div class="container">
			<div class="row">
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">126</p>
						<h4>Happy Clients</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">535</p>
						<h4>Awards</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">896</p>
						<h4>Total Hours</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">777</p>
						<h4>Projects Complete</h4> </div>
				</div>
			</div>
		</div>
	</section>
    
	

{/******************************Newsection*****************************/}

<div style={{display:"flex", marginTop:"0px"}}>  
<img src='https://cdn.dribbble.com/users/1784878/screenshots/7796443/orange_animation.gif' style={{width:"500px", paddingTop:"60px", }}></img>
<div  style={{marginLeft:"50px",marginRight:"30px",marginTop:"60px" ,alignItems:"center"}} >
  <h1>Health Benefits of Oranges</h1>
 
  <h6 style={{fontSize:"25px",fontWeight:"300"}}>Protects your cells from damage
      Helps your body make collagen, a protein that heals wounds and gives you smoother skin
     Makes it easier to absorb iron to fight anemia
     Boosts your immune system, your body's defense against germs
     Oranges are a staple in many kitchens. This round, citrus fruit is found in fruit bowls, refrigerators, and lunch boxes across the United States. Yes, you've seen and most likely eaten an orange or two, but do you know just how beneficial they are for your body?</h6>
     
</div>
</div>

<section>
  <div class="content">
    <h2>Juicy</h2>
    <h2>Juicy</h2>
  </div>
</section>


<div className='te'>
<div class="accordian">
    <ul>
		<li>
			<div class="image_title">
				<a href="#">KungFu Panda</a>
			</div> 
			<a href="#">
				<img src="https://www.datocms-assets.com/9759/1618122329-defy-rose-wine-grapefruit.png?auto=format&fit=crop&h=750&w=1200"/>
			</a>
		</li>
		<li>
			<div class="image_title">
				<a href="#">Toy Story 2</a>
			</div>
			<a href="#">
				<img src="https://www.12taste.com/in/wp-content/uploads/2019/11/fresh-orange-juice-glass-dark-background-scaled.jpg"/>
			</a>
		</li>
		<li>
			<div class="image_title">
				<a href="#">Wall-E</a>
			</div>
			<a href="#">
				<img style={{width:"600px"}} src="https://i1.wp.com/citrusindustry.net/wp-content/uploads/2019/09/oranges-production.shutterstock_1079463020.jpg?fit=4256%2C2832&ssl=1"/>
			</a>
		</li>
		<li>
			<div class="image_title">
				<a href="#">Up</a>
			</div>
			<a href="#">
				<img src="https://store-images.s-microsoft.com/image/apps.50139.13891005255039198.c2bfef33-846d-445a-b3dd-2dd0ea1367bf.5ca54d12-8c7e-451c-9cdd-d71166b319ba?h=1080"/>
			</a>
		</li>
		<li>
			<div class="image_title">
				<a href="#">Cars 2</a>
			</div>
			<a href="#">
				<img src="https://store-images.s-microsoft.com/image/apps.50139.13891005255039198.c2bfef33-846d-445a-b3dd-2dd0ea1367bf.5ca54d12-8c7e-451c-9cdd-d71166b319ba?h=1080"/>
			</a>
		</li>
	</ul>
</div>


<div style={{width:"600px" , position:"absolute", marginTop:"199px", }}>
<h6 style={{fontSize:"25px", fontWeight:"300",marginLeft:"15px"}}>

  How many vitamin C 1000mg can I take in a day?
 The upper limit for vitamin C in adults is 2,000 mg. Individuals with chronic liver disease, gout, or kidney disease are recommended to take no more than 1,000 mg of vitamin C per day. High vitamin C intakes have the potential to increase urinary oxalate and uric acid excretion.
</h6>
</div>

</div>





<div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="  " height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="   " height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="  https://www.pnglogos.com/images/business/abstract-orange-cream-logo-template.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="  https://www.pnglogos.com/images/other/allegro-fine-coffees.svg " height="100" width="250" alt="allegro" />
		</div>
		<div class="slide">
			<img src=" https://www.freepnglogos.com/uploads/sprite-png-logo/sprite-lemon-lime-soda-png-logo-4.png " height="100" width="250" alt="sprite" />
		</div>
		<div class="slide">
			<img src=" https://www.nicepng.com/png/detail/24-242581_mw-logo-png-dr-pepper-soda-logo.png" height="100" width="250" alt="dr pepper" />
		</div>
		<div class="slide">
			<img src=" https://img.freepik.com/premium-vector/drink-cup-soft-drink-logo-design_636083-165.jpg " height="100" width="130" alt="" />
		</div>
		<div class="slide">
			<img src=" https://seeklogo.com/images/S/starry-lemon-lime-soda-logo-BD2B10EC2A-seeklogo.com.png" height="100" width="150" alt="starry" />
		</div>
		<div class="slide">
			<img src=" https://www.freepnglogos.com/uploads/publix-png-logo/orange-juice-and-eggs-program-publix-png-logo-25.png" height="50" width="120" alt="" />
		</div>
		<div class="slide">
			<img src=" https://w7.pngwing.com/pngs/262/330/png-transparent-seven-up-7up-thumbnail.png" height="100" width="150" alt="7up" />
		</div>
		<div class="slide">
			<img src="https://w7.pngwing.com/pngs/13/383/png-transparent-ahmad-tea-hd-logo.png" height="100" width="150" alt="" />
		</div>
		<div class="slide">
			<img src="https://w7.pngwing.com/pngs/603/555/png-transparent-round-fanta-logo-fizzy-drinks-coca-cola-fanta-sprite-fanta-food-text-orange-thumbnail.png" height="100" width="150" alt="" />
		</div>
		<div class="slide">
			<img src="https://w7.pngwing.com/pngs/478/706/png-transparent-orangina-juice-fizzy-drinks-logo-juice-food-text-orange-thumbnail.png" height="100" width="100" alt="" />
		</div>
		<div class="slide">
			<img src="https://w7.pngwing.com/pngs/991/322/png-transparent-sprite-logo-sprite-coca-cola-lemon-lime-drink-logo-sprite-text-line-lemonlime-drink-thumbnail.png" height="100" width="150" alt="" />
		</div>
	</div>
</div>






  </div>
  




  );
}

export default App;
