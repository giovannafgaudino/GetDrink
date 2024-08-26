import cups from '../../public/svg/cups.svg'
import maps from '../../public/svg/maps.svg'
import moeda from '../../public/svg/moeda.svg'
import like from '../../public/svg/like.svg'
import patrocinio from '../../public/svg/patrocinio.svg'
import publicomarca from '../../public/svg/publico-marca.svg'
function Section2() {
    return (
        <>
            <main className="sobre">
                <section>
                    <h1>A EVOLUÇÃO NO MERCADO DE EVENTOS</h1>
                    <div className="sobre-content">
                        <div>
                            <div className='content'>
                                <img src={cups} alt="" />
                                <p>Venda com variação de tamanho</p>
                            </div>
                            <div className='content'>
                                <img src={moeda} alt="" />
                                <p>Mesmo funcionário realiza vendas e atendimento</p>
                            </div>

                        </div>
                        <div>
                            <div className='content'>
                                <img src={maps} alt="" />
                                <p>Venda e atendimento em qualquer local do evento</p>
                            </div>
                            <div className='content'>
                                <img src={like} alt="" />
                                <p>Redução de filas</p>
                            </div>

                        </div>
                        <div>
                            <div className='content'>
                                <img src={publicomarca} alt="" />
                                <p>Interação público-marca</p>
                            </div>
                            <div className='content'>
                                <img src={patrocinio} alt="" />
                                <p>Promoção de marcas e patrocínios</p>
                            </div>
                        </div>

                    </div>
                    <div className='sobre-footer'>
                        <div className='content'>
                            <h1>Experiência</h1>
                            <p>Melhore a experiência do seu cliente</p>
                        </div>
                        <div className='content'>
                            <h1>Visibilidade</h1>
                            <p>Forneça conteúdo personalizado em alta definição</p>
                        </div>
                        <div className='content'>
                            <h1>Versatilidade</h1>
                            <p>Venda e sirva bebidas de forma simples em qualquer local</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Section2