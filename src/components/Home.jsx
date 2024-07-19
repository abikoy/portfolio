import Type from "./Type";
import Photo from "./Photo";
import './Home.css';
 import About from "./About";

const Home = () => {
    return (
   
        <div className="home">
          
       
        <div className="about">
      <h1 className="wel">Welcome to My Portfolio</h1>
      <About />   
        </div>
         
        <div className="photo">
            <Photo />
            <Type />  
        </div>

      

        </div>
      );
}
 
export default Home;