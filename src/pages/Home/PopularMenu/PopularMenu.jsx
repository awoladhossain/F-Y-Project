import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularMenu = () =>
{

    const [menu, setMenu] = useState([]);

    useEffect(() =>
    {
        fetch('popularmenu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])



    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            >
            </SectionTitle>
        </section>
    );
};

export default PopularMenu;