import styled from "styled-components";
import { Header } from "../../Header/Header";
import { Podval } from "../../Podval/Podval";
import {data} from './DrainageSystems'
import WindowSection from "../PvcWindows/WindowSection";







const DrainageSystemComponent = ({className}) => {
   return (
        <>
        <Header/>
    <div className={className}>
               <div className="fw-container">
                    <h3 className='PVC_h3'>Воодоотливы</h3>
               </div>
               <div className="sections">
                    <WindowSection data={data} reverse={false} showReadMore={false} />
                </div>
        </div>
        <Podval/>
        </>

   ) 
}




export const DrainageSystem = styled(DrainageSystemComponent)`
    
.section {
		display: flex;
		align-items: flex-start;
		flex-direction: row-reverse;
		justify-content: space-between;
		gap: 50px;


		max-width: 1380px;
		margin: 0 auto 100px auto;
	}

	.reverse {
		flex-direction: row-reverse;
	}

	.section img {
		width: 500px;
		height: auto;
		object-fit: cover;
		border-radius: 10px;
	}

	.fw-text-box {
		flex: 1;
	}

	.fw-text {
		width: 100%;
		max-width: 800px;
	}

	.fw-container {
		display: flex;
		justify-content: center;
		padding: 24px 15px;
		margin: 0 142.5px 0 142.5px;
	}
	.PVC_h3 {
		width: 940px;
		height: 44px;
		text-align: center;
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 700;
		font-size: 48px;
		line-height: 44px;
		letter-spacing: 1px;
		color: #222938;
		margin-top: 40px;
	}
	.fw-row {
		width: 1170px;
		display: flex;
		margin: 0 auto;
	}
	.fw-rov-left {
		width: 50%;
	}
	.fw-rov-rite {
		width: 50%;
	}
	.fw-special-title {
		text-align: left;
		font-family: 'Roboto Slab';
		font-size: 44px;
		line-height: 40px;
		font-style: normal;
		letter-spacing: 0;
		color: #29293a;
		padding-bottom: 20px;
	}
	.fw-text {
		font-family: 'Roboto Slab';
		width: 100%;
		color: #29293a;
		font-size: 20px;
		line-height: 32px;
		font-weight: 400;
		margin-bottom: 10px;
	}
	ul {
		padding-left: 5%;
	}
	button {
		display: block;
		margin: 10px auto;
		border: none;
		background: none;
		outline: none;
		color: #29293a;
		font-weight: 700;
		font-family: 'Roboto Slab';
		font-size: 19px;
		line-height: 32px;
		text-align: center;
	}



    
`