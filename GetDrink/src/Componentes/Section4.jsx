import logo from '../../public/svg/getdrink.svg'
import linkedin from '../../public/svg/linkedin.svg'
import instagram from '../../public/svg/instagram.svg'
import tiktok from '../../public/svg/tik-tok.svg'
function Section4() {
    return (
        <>
            <main className="Section4">
                <section className="formulário-section">
                    <div>
                        <h1>Solicite um orçamento sem compromisso</h1>
                        <p>Preencha seus dados e transforme seu evento com a Get Drink</p>
                        <form action="">

                            <input type="text" placeholder="Nome" id="name" className="form" />
                            <input type="tel" placeholder="Telefone/Whatsapp" id="tel" className="form" />


                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Tipo de Evento" />
                            <input type="textarea" placeholder="Detalhes do Evento" />
                            <div>
                                <button type="submit">Solicitar Orçamento</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <main className="Contato">
                <section className="contato">
                    <h1>CONTATO</h1>

                    <div className='content'>
                        <div className='midiasocial'>
                            <img src={linkedin} alt="" />
                            <img src={instagram} alt="" />
                            <img src={tiktok} alt="" />
                        </div>
                        <p>@get.drink</p>
                        <p>comercial@get.drink.com</p>
                    </div>
                    
                </section>
            </main>
        </>
    )
}

export default Section4