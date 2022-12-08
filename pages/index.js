import Head from "next/head"
import Header from "../components/Header"
import styles from "../styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader"
import LotterEntrance from "../components/LotterEntrance"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Smart contract Lottery</title>
                <meta name="description" content="Raffle Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <h2>Welcome to Raffle Lottery</h2>
            <br />
            <br />
            <LotterEntrance />
        </div>
    )
}
