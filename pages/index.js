import Head from 'next/head';
import Layout from '../components/layout';
import Script from 'next/script';

export default function Home() {

  return (
    <Layout>
      <div>
        <Head>
          <title>NVG Arquitectura</title>
        </Head>
        <main>
          <section className='bg-temp'>
          <div id="hero-section" data-effect="swirlLeft">
                <div className="overlay-dark"></div>
                <div className="hero-content text-center">
                    <h2>Loft Interior Design for All House</h2>
                    <div className="ot-button">
                        <a href="portfolio-masonry.html" className="octf-btn octf-btn-light">View Project</a>
                    </div>
                </div>
            </div>
          </section>
          
        </main>
      </div>
      <Script src="/js/jquery.min.js"/>
      {/* <Script src="/js/vegas.min.js"/> */}
      {/* <Script src="/js/scripts.js"/> */}
    </Layout>
  )
}
