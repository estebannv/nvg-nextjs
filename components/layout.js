import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout(param) {
    return (
    <div>
        <Head>
            <title>NVG Arquitectura</title>
        </Head>
        <Navbar/>
        {param.children}
        <Footer/>
    </div>
    );
}