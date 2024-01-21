import React from "react";
import "./App.css";
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import contractABI from "./contractABI.json";
import Button from '@mui/material/Button';






const contractAddress = "0xD6d43de7089364C52f2Fd0C520AFc04751F6c33F";

function App() {
  const [account, setAccount] = useState(null);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [NFTContract, setNFTContract] = useState(null);
  // state for whether app is minting or not.
  const [isMinting, setIsMinting] = useState(false);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false); // Added state for network check

  // Check if the current network is the correct network
  useEffect(() => {
        async function checkNetwork() {
      if (window.ethereum) {
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        setIsCorrectNetwork(chainId === "0x13881"); // Change to the correct chain ID
      }
    }
    //check for initial network
    checkNetwork();
    
    //Check for network change
    window.ethereum.on("chainChanged", (newChainId) => {
      setIsCorrectNetwork(newChainId === "0x13881"); // Change to the correct chain ID
      
    },[]);
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  useEffect(() => {
    function initNFTContract() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setNFTContract(new Contract(contractAddress, contractABI.abi, signer));
    }
    initNFTContract();
  }, [account]);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Please check if your metamask wallet is connected or not.");
      });

  }

  async function disconnectWallet() {
    if (window.ethereum) {
      try {
        setAccount(null);
      } catch (error) {
        console.error("An error occurred while disconnecting the wallet:", error);
      }
    }
  }

const data = [
    {
      url: "./assets/images/1.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/1.txt')",
    },
    {
      url: "./assets/images/2.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/2.txt')",
    },
    {
      url: "./assets/images/3.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/3.txt')",
    },
    {
      url: "./assets/images/4.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/4.txt')",
    },
    {
      url: "./assets/images/5.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/5.txt')",
    },
    {
      url: "./assets/images/6.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/6.txt')",
    },
    {
      url: "./assets/images/7.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/7.txt')",
    },
    {
      url: "./assets/images/8.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/8.txt')",
    },
    {
      url: "./assets/images/9.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/9.txt')",
    },
    {
      url: "./assets/images/10.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/10.txt')",
    },
    {
      url: "./assets/images/11.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/11.txt')",
    },
    {
      url: "./assets/images/12.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/12.txt')",
    },
    {
      url: "./assets/images/13.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/13.txt')",
    },
    {
      url: "./assets/images/14.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/14.txt')",
    },
    {
      url: "./assets/images/15.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/15.txt')",
    },
    {
      url: "./assets/images/16.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/16.txt')",
    },
    {
      url: "./assets/images/17.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/17.txt')",
    },
    {
      url: "./assets/images/18.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/18.txt')",
    },
    {
      url: "./assets/images/19.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/19.txt')",
    },
    {
      url: "./assets/images/20.png",
      param: "handleMint('http://bafybeifwj4cvmdqfpspluevh36odfim2pqezcgrhbfmm3tjv3bbffuisqy.ipfs.localhost:48084/20.txt')",
    },

  ];

  async function withdrawMoney() {
    try {
      const response = await NFTContract.withdrawMoney();
      console.log("Received: ", response);
    } catch (err) {
      alert(err);
    }
  }

  

  if (!isCorrectNetwork) {
    return (
      <div className="container">
        <br />
        <h1>NFT Marketplace</h1>
        <h2>Switch to the Polygon Mumbai Network</h2>
        <p>Please switch to the Polygon Mumbai network to use this app.</p>
      </div>
    );
  }


  

  async function handleMint(tokenURI) {
    setIsMinting(true);
    try {
      const options = { value: ethers.utils.parseEther("0.01") };
      const response = await NFTContract.mintNFT(tokenURI, options);
      console.log("Received: ", response);
    } catch (err) {
      alert(err);
    } finally {
      setIsMinting(false);
    }
  }

  if (account === null) {
      return (
        <>
          <div className="connect-container">
            <br /><br /><br /><br />
            <h1>NFT Marketplace</h1>
            <h2>Buy an NFT from our marketplace.</h2>
            <br />
            <p>Welcome to the NFT Marketplace. Testnet is a secure space to experiment with digital ownership. Explore our virtual platform, test transactions with crypto wallet, 
          and experience the future of NFTs risk-free. Creators can experiment with minting, and users can trade test NFTs, immersing themselves in the NFT revolution. Join us on 
          this platform, Testnet, for a glimpse into the exciting possibilities of decentralized digital assets.</p><br />

            {isWalletInstalled ? (
              <Button className="connect-button" variant="contained" color="secondary" onClick={connectWallet}>Connect Wallet</Button>
              
            ) : (
              <p>Install Metamask wallet</p>
            )}
          </div>
        </>
    );
    
}


  return ( 
          

    <div className="bg"> 
    <Button className="wallet" variant="contained" color="primary">Connected as: {account}</Button><br />
    <Button className="disconnect-button" variant="contained" color="secondary" onClick={disconnectWallet}>Disconnect Wallet</Button>
     
    <>
    
      <div className="container">
        
        <h1>NFT Marketplace</h1>
                
        <h2>A NFT Marketplace to view and mint your NFT</h2>
        <p> Welcome to the NFT Marketplace. Testnet is a secure space to experiment with digital ownership. Explore our virtual platform, test transactions with crypto wallet, 
          and experience the future of NFTs risk-free. Creators can experiment with minting, and users can trade test NFTs, immersing themselves in the NFT revolution. Join us on 
          this platform, Testnet, for a glimpse into the exciting possibilities of decentralized digital assets.</p>
        {data.map((item, index) => (
          <div className="imgDiv">
            <img
              src={item.url}
              key={index}
              alt="images"
              width={250}
              height={250}
              border={2}
            />
            
            <Button className="mint_btn" variant="contained" color="secondary"
              isLoading={isMinting}
              onClick={() => {
                handleMint(item.param);
              }}
            >
              Mint - 0.01 MATIC
            </Button>
          </div>
        ))}
        <div className="withdraw_container">
        <br /><br /><br />
        <Button className="withdraw_btn" variant="contained" color="primary"
          onClick={() => {
            withdrawMoney();
          }}
        >
          Withdraw Money from Contract
        </Button>
        
        </div>
        
      </div>
    </>
    </div>
    
    
    
    
  );

  
  
}

export default App;
