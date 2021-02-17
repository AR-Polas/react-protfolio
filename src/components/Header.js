import Typed from 'react-typed';
const Header = () => {
    return (
      <header id="home">
            <div className="container">
            <div className="row header__container">
                <div className="col-md-6 my-5">
                    <p>Welcome to My World</p>
                    <h1>Hi, I'm Anisur Rahman Polas</h1>
                    <h3> <Typed
                        strings={['Front-End-Developer', 'React Developer','Javascript Developer']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    /></h3>
                    <button>Download CV</button>
                </div>
                <div className="col-md-6 my-5">
                   <div className="header__img">
                   <img src="https://i.ibb.co/LzZWX2g/Frame-Art-202121311427777.jpg" alt="not found" />
                   </div>
                </div>
            </div>
        </div>
      </header>
    );
};

export default Header;