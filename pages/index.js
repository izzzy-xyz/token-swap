import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
} from "@thirdweb-dev/react";
import Claim from "../components/Claim";
import truncateAddress from "../lib/truncateAddress";
import styles from "../styles/Home.module.css";


export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const tokenDrop = useTokenDrop("0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6");

  return (
    <div className={styles.container}>
      {address ? (
        <><button className={styles.walletButton}>
          <a onClick={disconnectWallet} className={styles.secondaryButton}>
            Disconnect Wallet
          </a>
          </button>
          <p className={styles.walletAddress}>{truncateAddress(address)}</p>
        </>
      ) : (
        <button className={styles.walletButton} onClick={connectWithMetamask}>
          Connect Wallet
        </button>
      )}
      <h1 className={styles.textLeft}>ICO Swap, <br></br>Initial Coin Offering</h1>
  
          <Claim tokenDrop={tokenDrop} />
      
      <h5 className={styles.textLeft}>
      To mint tokens connect MetaMask wallet and choose the Polygon Mainnet network.
      Contract Address: 0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6 
        <br></br>
      <span>This currency will be used as a management token for the exchange, 
      it can be bought and traded between users on a decentralized exchange, 
      add liquidity and earn from the liquidity pool, allow users to vote, 
      making the main decisions on the platform from a decentralized structure to the whole community!</span>
      </h5>
      <h5 className={styles.footer}>
      <a href="https://izzzy.xyz" 
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer">
      <h5>Visit Website &rarr;</h5>
      </a>
      Pre-ICO discounted before the official public sale. 
      </h5>
    </div>
  );
}
