import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import {
  checkConnection,
  getTokenURI,
  getTokensByAddress,
  connectWallet,
switchChain,
checkNetwork
} from '../lib/web3'
import axios from 'axios'

const Leaf = () => {

    const claimLeaf = async () => {
        await claimLeaf()
    }

    const pas = 12300;
    return (
        <div>
            <h1>This is Leaf Page</h1>
	    <p>Vous avez marché {pas}</p>

                  <Button onClick={() => claimLeaf()}>
                    Récupère tes Leafs
                  </Button>
 	
        </div>
    )
}

export default Leaf
