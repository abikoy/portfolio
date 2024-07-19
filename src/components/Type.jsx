import Typewriter from "typewriter-effect";

const Type = () => {
  return ( 
    <div className="TypeEffe" style={{ minHeight: "100px",    fontFamily: "'Lobster', cursive, 'Poppins', sans-serif"
    }}>
      <Typewriter
        options={{
          strings: ["Hey There","I'm Haile","Software Engineering"," Student and", "web developer"],
          autoStart: true, // Corrected prop name
          loop: true,
          delay: 100,
          deleteSpeed: 20
        }}
        
      />
    </div>
  );
}
 
export default Type;