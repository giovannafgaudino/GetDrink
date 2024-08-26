import Logo from '../../public/images/getdrink (1).png'
function NavBar() {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="name-brand">
                        <p className="name">GET DRINK</p>
                        <p className="slogan">YOUR DRINK ANYWHERE</p>
                    </div>

                    <div className="menu">
                        <p>Home</p>
                        <p>Sobre Nós</p>
                        <p>Contato</p>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;