
import styled from "styled-components";
import { Header } from "../Header/Header";
import { Podval } from "../Podval/Podval";
import { Product } from "../Product/Product";


const ProductUslugComponent = ({className}) =>{
	const mass = [
		{
			id: 1,
			img: '../../public/./Product/пластиковые-окна.jpg',
			text: 'Пластиковые окна',
			href: '/PvcWindows',
		},
		{ id: 2, img: '../../public/./Product/люминевое.jpg', text: 'Алюминиевые окна',href:'/AluminumWindows' },
		{ id: 3, img: '../../public/./Product/лоджия.jpg', text: 'Балконы и лоджии', href:'/BalconiesLoggias' },
		{ id: 4, img: '../../public/./Product/нестандартное.jpg', text: 'Нестандартные окна', href:'/NonStandartWindows' },
		{
			id: 5,
			img: '../../public/./Product/перегородки-пвх.jpg',
			text: 'Перегородки из ПВХ',
			href:'/PvcPartitions'
		},
		{
			id: 6,
			img: '../../public/./Product/пластиковые-двери.jpg',
			text: 'Пластиковые двери',
			href:'/PlasticDoors'
		},
        {
            id:7,
            img:"../../public/Product/профили-300x300.jpg",
            text:"Профили",
            href:""
        },{
            id:8,
            img:"../../public/Product/стеклопакет-300x300.jpg",
            text:"Стеклопакеты",
            href:""
        },{
            id:9,
            img:"../../public/Product/фурнитура-300x300.jpg",
            text:"Фурнитура",
            href:""
        },{
            id:10,
            img:"../../public/Product/подоконники-300x300.jpg",
            text:"Подоконники",
            href:""
        },{
            id:11,
            img:"../../public/Product/водотливы-300x300.jpg",
            text:"Водоотливы",
            href:""
        },{
            id:12,
            img:"../../public/Product/раздвежные-двери-300x300.jpg",
            text:"Раздвижные двери",
            href:""
        }
	];

    return (
        <div>
            <Header/>
    <div className={className}>
            <div className="product_text">
                <h3>Наша продукция</h3>
            </div>
            <Product mass={mass} />
        </div>

            <Podval/>
        </div>
    )
}







export const ProductUslug = styled(ProductUslugComponent)`
.product_text {
		text-align: center;
		margin-bottom: 30px;
	}

	.product_text h3 {
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 700;
		font-size: 48px;
		line-height: 44px;
		text-transform: uppercase;
		color: #222938;
		margin: 0;
	}
    
    `