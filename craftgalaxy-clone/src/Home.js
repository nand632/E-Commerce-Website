import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={require("./gate.jpg")} />
        <div className="home_row">
          <Product
            id="12321341"
            title="Pipili Handicrafts Velvet Chandua (Multicolor_ 1 cm x 72 cm x 72 cm)"
            price={499}
            image="https://m.media-amazon.com/images/I/81AXPPb9eUL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Southloom Handmade Temple Elephant Head Handicraft (Carved from Mahogany Wood) 8 Inches"
            price={560}
            image="https://m.media-amazon.com/images/I/61NxmCSaEwL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="89800094"
            title="Indianara 3 Pc Set of Floral Paintings Without Glass 5.2 X 12.5, 9.5 X 12.5, 5.2 X 12.5 Inch"
            price={300}
            image="https://m.media-amazon.com/images/I/91eO8aBDoML._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="55800094"
            title="Wood City Handicrafts Sheesham Wooden Table End Coffee Table for Living Room"
            price={500}
            image="https://m.media-amazon.com/images/I/61-BxAh4dhL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="15800555"
            title="ACS Art & Crafts Wooden Circular Animal Carving Pen Holder Handmade Handicraft for Home Decor Gift Item"
            price={270}
            image="https://m.media-amazon.com/images/I/817lBpAdfiL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="55808888"
            title="Mandir handicraft and marbles Wood Wall Hanging (Wooden_52 Cm X 41 Cm X 23 Cm)"
            price={500}
            image="https://m.media-amazon.com/images/I/71kwylTPquL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="12400094"
            title="Unique Wooden Handicrafts Wooden Cutting/Serving/Chopping Board, Brown"
            price={199}
            image="https://m.media-amazon.com/images/I/61DjH7Ba8CL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12400554"
            title="Jk Handicrafts Handmade Wooden (Rose wood) Serving and Cooking Spoon & Kitchen Tools Utensil, Non Stick Set of 7"
            price={279}
            image="https://m.media-amazon.com/images/I/61PsHNKpynL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="22400094"
            title="Kundi Wooden Napkin Holder for Dining Table, Tissue Paper Stand | Restaurant"
            price={99}
            image="https://m.media-amazon.com/images/I/91bia0qGYvL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="33300094"
            title="Furniture Cafe Pre-Assemble Wooden Handcrafted Round Shape Stool/Table Natural Wood Logs Smooth Finish (12x12x12-inch, Brown)"
            price={998}
            image="https://m.media-amazon.com/images/I/41JpTgbLzYL._AC_UL400_.jpg"
            rating={5}
          />
          <Product
            id="44450094"
            title="Wooden Handicrafts Wood Incense Sticks Holder (Brown_3.5 inch)"
            price={209}
            image="https://m.media-amazon.com/images/I/71n7bP4iKgL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
