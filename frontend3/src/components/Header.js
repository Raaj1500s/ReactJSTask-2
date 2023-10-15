import "../../src/App.css";

function Header(){
    const myStyle = {
        color :"yellow",
        backgroundColor :"black"
    }
    return(
        <div className='bg-dark text-light text-center p-3'>
            <h1 style={{color:"green"}}>Happy app</h1>
            <h2 style={myStyle}>Good Morning</h2>
            <h3 id="i1">You can</h3>
        </div>
    );
}
export default Header;