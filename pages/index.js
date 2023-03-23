import styles from "../styles/Home.module.css";
import WalletContextProvider from "../components/WalletContextProvider";
import { MintNFTs } from "../components/MintNFTs";
import "@solana/wallet-adapter-react-ui/styles.css";
import dynamic from "next/dynamic";

export default function Home() {



    return ( <
        div >

        <
        div className = { styles.App } >

        <
        MintNFTs / > { " " } <
        /div>

        <
        /div>
    );
}