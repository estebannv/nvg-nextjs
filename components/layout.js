import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout(param) {
    return (
    <div>
        <Head>
            <title>NVG Arquitectura</title>
            {/* <script src="https://kit.fontawesome.com/86b09c6383.js" crossOrigin="anonymous"></script> */}
        </Head>
        <Navbar/>
        {param.children}
        <Footer/>
    </div>
    );
}