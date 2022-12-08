import { useMoralis, useWeb3Contract } from "react-moralis"
import { Button, useNotification } from "web3uikit"
import styles from "../styles/Home.module.css"
import { abi, contractAddresses } from "../constants"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { Bell } from "web3uikit"

export default function LotterEntrance() {
    const { isWeb3Enabled, chainId: chainIdHex } = useMoralis()

    const chainId = parseInt(chainIdHex)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const [entranceFee, setEntranceFee] = useState("0")
    const [getPlayers, setPlayers] = useState("0")
    const [winner, setWinner] = useState("0")

    const dispatch = useNotification()

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        // params: {},
    })

    const {
        runContractFunction: enterRaffle,
        isFetching,
        isLoading,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        msgValue: entranceFee,
        // params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getNumberOfPlayers",
    })

    const { runContractFunction: getWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getRecentWinner",
    })

    async function updateUIValues() {
        const entranceFeefromCall = (await getEntranceFee()).toString()
        const getPlayersFromCall = (await getNumberOfPlayers()).toString()
        const getWinnerFromCall = await getWinner()
        setEntranceFee(entranceFeefromCall)
        setPlayers(getPlayersFromCall)
        setWinner(getWinnerFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])

    const handleNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Transaction Notification",
            position: "topR",
            icon: <Bell />,
        })
    }

    const handleSuccess = async (tx) => {
        try {
            await tx.wait(1)
            updateUIValues()
            handleNotification(tx)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {raffleAddress ? (
                <div>
                    <div className={styles.enterRaffle}>
                        <Button
                            loadingProps={{ spinnerColor: "#FF0000" }}
                            color="blue"
                            spinnerColor="red"
                            onClick={async () => {
                                await enterRaffle({
                                    onSuccess: handleSuccess,
                                    onError: (error) => console.log(error),
                                })
                            }}
                            size="regular"
                            text="Enter Raffle"
                            theme="colored"
                            isLoading={isFetching || isLoading}
                        />
                    </div>
                    <div className={styles.enterRaffle}>
                        Entrance Fee: {ethers.utils.formatEther(entranceFee)}
                        <br />
                        Number of players: {getPlayers}
                        <br />
                        Previous winner: {winner}
                    </div>
                </div>
            ) : (
                <div className={styles.enterRaffle}>Please connect to a supported chain</div>
            )}
        </div>
    )
}
