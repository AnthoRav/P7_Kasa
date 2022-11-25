import React from "react";
import Card from "../../components/Card/Card"
import Banner from '../../components/Banner/Banner'
import BannerImg from '../../assets/Banner_img.jpg'


function Home() {
     return (
        <div>
            <Banner src={BannerImg} alt={`Photo d'une côte`} title={"Chez vous, partout et ailleurs"} />
            <Card />
        </div>
     )
}
export default Home