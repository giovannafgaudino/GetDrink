import logo from '../../public/images/getdrink (1).png'
function Section1() {
    return (
        <>
            <main className="home">
                <section className="home-content">
                    <div className='content'>
                        <div className='title'>
                            <h1>GET DRINK</h1>
                            <h1>YOUR DRINK ANYWHERE</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam distinctio, tempore doloremque nisi corrupti natus eius repellat iusto, obcaecati quibusdam est, vero porro accusamus saepe dicta beatae odit nam?</p>
                        <h3>INOVAÇÃO • VERSATILIDADE</h3>
                        <div className='button'>
                            <button>Saber mais</button>
                        </div>

                    </div>
                    <div className='image'>
                        <img src={logo} alt="" />
                        <p>YOUR DRINK ANYWHERE</p>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Section1