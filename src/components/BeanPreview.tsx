import styled from "styled-components";
// Added type because webstorm was giving me a flag for missing it
import type { Bean } from "../types/types";

const BeanPreviewDiv = styled.div`
    width: 500px;
    padding: 16px;
    margin: 12px;
    background: #ffc096;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    font-size: calc(0.2em + 2vw);
    color: black;
`;

const Img = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin-bottom: 10px;
`;

export default function BeanPreview({ bean }: { bean: Bean }) {
    return (

        <BeanPreviewDiv>
            <h3>{bean.flavorName}</h3>
            <Img src={bean.imageUrl} alt={bean.flavorName} />
            <p><strong>ID:</strong> {bean.beanId}</p>
            <p><strong>Description:</strong> {bean.description}</p>
            <p><strong>Color Group:</strong> {bean.colorGroup}</p>
            <p><strong>Gluten Free:</strong> {bean.glutenFree ? "Yes" : "No"}</p>
            <p><strong>Sugar Free:</strong> {bean.sugarFree ? "Yes" : "No"}</p>
            <p><strong>Seasonal:</strong> {bean.seasonal ? "Yes" : "No"}</p>
            <p><strong>Kosher:</strong> {bean.kosher ? "Yes" : "No"}</p>
        </BeanPreviewDiv>
    );
}
