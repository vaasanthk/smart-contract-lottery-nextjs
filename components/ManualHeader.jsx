import { useEffect } from "react"
import { useMoralis } from "react-moralis"
import styles from "../styles/Home.module.css"

export default function ManualHeader() {
    const { deactivateWeb3, Moralis, isWeb3Enabled, account, enableWeb3, isWeb3EnableLoading } =
        useMoralis()

    useEffect(() => {
        if (
            !isWeb3Enabled &&
            typeof window !== "undefined" &&
            window.localStorage.getItem("connected")
        ) {
            enableWeb3()
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("null account found")
            }
        })
    }, [])
    return (
        <div className={styles.button}>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...{account.slice(-4)}
                </div>
            ) : (
                <div>
                    <button
                        onClick={async () => {
                            const ret = await enableWeb3()
                            if (typeof ret !== "undefined") {
                                if (typeof window !== "undefined") {
                                    window.localStorage.setItem("connected", "injected")
                                }
                            }
                        }}
                        disabled={isWeb3EnableLoading}
                    >
                        Connect
                    </button>
                </div>
            )}
        </div>
    )
}
