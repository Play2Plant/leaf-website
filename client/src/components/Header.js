import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { init, connectWallet, checkConnection , switchChain , checkNetwork} from "../lib/web3";

const Header = () => {
  const [address, setAddress] = useState('');
  const [network, setnetwork] = useState('');

  useEffect(() => {
    init()
    checkAddress()
    checkNetwork1()
  },[]);

  const switchNetwork = async () => {
   await switchChain()
  }

  const checkNetwork1 = async () => {
    const network = await checkNetwork()
    setnetwork(network)
   }
   
  const checkAddress = async () => {
    const address = await checkConnection()
    setAddress(address)
  }

  const storeAddress = async () => {
      const address = await connectWallet()
      setAddress(address)
  }

  const disconnect = async () => {
      console.log("disconnect")
  }

  return (
    <Navbar className="navcolor" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
        <LinkContainer to="/leaf">
            <Nav.Link>Leaf</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/nft">
            <Nav.Link>NFT</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/service">
            <Nav.Link>Service</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>

        {address && network != "avax" &&
          <Button onClick={() => switchNetwork()}>
             Switch Network
           </Button>
        }

        {address && network === "avax" &&
          <Button onClick={() => disconnect()}>
             {address.substr(21)}{" ..."}
           </Button>
        }

        {!address &&
          <Button onClick={() => storeAddress()}>
             Connect
           </Button>
        }
    

      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
