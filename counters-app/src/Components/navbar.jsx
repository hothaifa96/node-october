const NavBar = props => {
    const {len , amount} = props;
    return (  
    <nav class="navbar bg-light">
        <div class="container-fluid">   
            <button type s="button" class="btn btn-primary position-relative">
                Counters
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {len}
                </span>
                <span className="visually-hidden">unread messages</span>
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {amount}
                </span>
        </button>
    </div>
    </nav>
 );
}
 
export default NavBar;
