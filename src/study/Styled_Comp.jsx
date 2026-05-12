import styled from 'styled-components';

const ReactBasicButton = (props) => {// 기본 css와 문법이 다름
    const style = {
        color: 'white',
        backgroundColor: 'purple',
        width: '80px',
        height: '40px',
        fontSize: '20px',
        borderRadius: '10px',

    }
    return (<button style={style} >{props.children}</button>)
}

const ReactButton = (props) => {
    //console.log('props', props);
    return (<button className={props.className}>{props.children}</button>)
}

const StyleButton = styled.button`
    color: white;
    background-color: green;
`
const LargeButton = styled(StyleButton)`
    width:80px;
    height: 40px;
    font-size: 30px;
`
const ReactLargeButton = styled(ReactButton)`
    font-size: 50px;
    font-style: italic;
`

const PrimaryButton = styled.button`
    color: ${(props)=>{
        return props.color;
    }};
`

const Styled_Comp = () => {
    return (
        <div>
            <h1>Styled-Components</h1>
            <ReactBasicButton>CSS</ReactBasicButton><br /><br />
            <StyleButton>style</StyleButton><br /><br />
            <LargeButton>large</LargeButton><br /><br />
            <ReactLargeButton>ReactLarge</ReactLargeButton><br /><br />
            <hr />
            <PrimaryButton style={{ color:'red'}}>Normal</PrimaryButton>
            <PrimaryButton color='red'>Primary</PrimaryButton>
        </div>
    );
};

export default Styled_Comp;