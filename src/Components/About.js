import PropTypes from 'prop-types';
// const About=(props)=>{
const About=({age,name,pays,car,user,handleHello,handleNamedHello, show, children})=>{
    // console.log(props)
    var {model,year,owner} = car
    return(
        // <div>
        //     <h2>About Component</h2>
        //     <h3>My name is {props.name}</h3>
        //     <h4>My age is {props.age}</h4>
            
        //     <ul>
        //         {
        //             props.pays.map((el,i,t)=> <li key={i}>{el}</li>)
        //         }
        //     </ul>

        //     <h2>The car owner is {props.car.owner},The model is {props.car.model}, Bought in {props.car.year} </h2>
        // </div>

        <div>
        <h2>About Component</h2>
        <h3>My name is {name}</h3>
        <h4>My age is {age}</h4>
        
        <ul>
            {
                pays.map((el,i,t)=> <li key={i}>{el}</li>)
            }
        </ul>

        <h2>The car owner is {owner},The model is {model}, Bought in {year} </h2>
        <h3>{user}</h3> 

        {
            show ?
            <button onClick={handleHello}>Say Hello</button>
            :
            <button onClick={()=>handleNamedHello("Yesser")}>Say Named Hello</button>
        }  

        {
            children
        }
          
    </div>
    )
}

About.defaultProps = {
    name : "MAHMOUD",
    age : "..."
}

About.propTypes = {
    name: PropTypes.string
}
export default About