
const Hero = (props) => {
    return (
        <div>
           
           <ul>
            <li>Name: {props.item['name']}</li>
            <li>Age: {props.item['age']}</li>
            <li>Age: {props.item['city']}</li>
            <button onClick={props.Btn}>Click</button>
           </ul>
        </div>
    );
};

export default Hero;