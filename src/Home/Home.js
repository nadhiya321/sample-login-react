import './Home.css';
import img1 from "../img/images.jpg";
function Home() {
    return (
        <div>
            <h1 className='header'> Welcome To Home Page   </h1>

             <img src={img1} className="Home-img" alt="images" />

            <p className="text-small">
                C is a procedural programming language.
                It was initially developed by Dennis
                Ritchie as a system programming
                language to write operating system.
                The main features of C language include
                low-level access to memory, simple set
                of keywords, and clean style, these
                features make C language suitable for
                system programming like operating system
                or compiler development. </p>
        </div>

    );
}
export default Home;
