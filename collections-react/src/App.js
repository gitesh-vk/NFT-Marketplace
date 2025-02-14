import React from "react";
import "./App.css";
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import contractABI from "./contractABI.json";
import Button from '@mui/material/Button';






const contractAddress = "0x45D81Ab21d274B9AEd723787E5a542595EdB6415";

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
        setIsCorrectNetwork(chainId === "0x66eee"); // Change to the correct chain ID
      }
    }
    //check for initial network
    checkNetwork();
    
    //Check for network change
    window.ethereum.on("chainChanged", (newChainId) => {
      setIsCorrectNetwork(newChainId === "0x66eee"); // Change to the correct chain ID
      
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
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/1.png  ",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/1.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/2.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/2.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/3.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/3.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/4.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/4.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/5.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/5.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/6.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/6.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/7.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/7.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/8.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/8.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/9.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/9.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/10.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/10.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/11.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/11.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/12.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/12.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/13.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/13.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/14.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/14.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/15.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/15.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/16.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/16.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/17.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/17.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/18.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/18.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/19.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/19.txt')",
    },
    {
      url: "https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeieaj2nqy25lskuhcvf6paufnorh35budo3uvptdmoaddmdy2wvi2q/20.png",
      param: "handleMint('https://moccasin-top-chickadee-808.mypinata.cloud/ipfs/bafybeiame3i6wijnr6dvi4rb5w73zgevw3mia2kifdtjcsjgnr2ek5vzui/20.txt')",
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
        <h2>Switch to the Arbitrum Sepolia Network</h2>
        <p>Please switch to the Arbitrum Sepolia network to use this app.</p>
      </div>
    );
  }


  

  async function handleMint(tokenURI) {
    setIsMinting(true);
    try {
      const options = { value: ethers.utils.parseEther("0.00001") };
      const response = await NFTContract.mintNFT(tokenURI, options);
      console.log("Received: ", response);
    } catch (err) {
      alert(err);
    } finally {
      setIsMinting(false);
    }
  }

  if (account == null) {
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
              Mint - 0.00001 ETH
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
