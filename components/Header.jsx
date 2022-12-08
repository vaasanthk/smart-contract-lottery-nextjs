import { ConnectButton } from "web3uikit"
import styles from "../styles/Home.module.css"

export default function Header() {
    return (
        <div className={styles.button}>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
