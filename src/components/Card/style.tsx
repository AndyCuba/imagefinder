import styled from 'styled-components';

type ImageProps = {
    title: string,
    farm: number,
    server: string,
    id: string,
    secret: string
}

const CardWrapper = styled.div`
    border: 1px solid gray;
    padding: 1rem;
    border-radius: 5px;
    background: linear-gradient(42deg, rgba(236,235,247,1) 0%, rgba(165,230,237,1) 45%, rgba(0,212,255,1) 100%);
    max-height: 20rem;
    text-align: center;
`;

const StyledImage = styled.div`
    width: 250px;
    height: 250px;
    background: url(${(props: ImageProps) => `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}) center/cover;
    transition: 1s transform;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    margin-bottom: 1rem;
`;

const StyledButton = styled.button`
    cursor: pointer;
    height: 2rem;
    width: 10rem;
`;


export { CardWrapper, StyledImage, StyledButton }; 