import logo from "../logo.svg";
export function Footer(){
    //const mylist =[];
    return(
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-3" >
                <h1>visit us on</h1>
                <ul>
                    <li><a href="https://facebook.com" target="self_bla">Facebook</a></li><li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://whatsapp.com">Whatsapp</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                
                </ul>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3" >
                <h1>Blogs</h1>
                <ol>
                    <li><a href="#">Blog1</a></li>
                    <li><a href="#">Blog2</a></li>
                    <li><a href="#">Blog3</a></li>
                    <li><a href="#">BLog4</a></li>
                </ol>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3" >
                 <h1>Topics</h1>
                 <p>Subtopic</p>
                 <p>Subtopic</p>
                 <p>Subtopic</p>
                 <p>Subtopic</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3" >
                <a href="https://flipkart.com">
                <img src={logo} alt="image"></img>
                </a>
            </div>
        </div>
    )
}
