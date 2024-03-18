import React from 'react';
import "./ExploreMenu.css";
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory}) => {



  return (
    <div className='explore-menu' id='explore-menu'>

        <h1>
            Explore Our Menu 
        </h1>
        <p className='explore-menu-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt quis fugit quod at temporibus ut accusantium hic totam facere! Repudiandae in deleniti laborum beatae neque. Temporibus corrupti architecto distinctio?
        </p>
        <div className="explore-menu-list">
            {
                menu_list.map((menu,i) => (
                    <div className="explore-menu-list-item" key={i}
                    onClick={()=>{
                        setCategory((prev)=>(
                            prev===menu.menu_name ? "All":menu.menu_name
                        ))
                    }} >
                        <img src={menu.menu_image} alt=""
                        className={category===menu.menu_name?"active":""} />
                        <p>
                            {
                                menu.menu_name
                            }
                        </p>
                    </div>
                ))
            }
        </div>

        <hr />


    </div>
  )
}

export default ExploreMenu