import novaContract from "../utils/nova-connection";
import web3 from "../web3"
import { getUserAddress } from "./Web3Actions";

export const getUserTokenBalance = async (address) => {
  let response = await novaContract.methods.name().call();
  return response;
}


export const mintNft = async (nftQuantity) => {
  const priceHex = await getNFTPrice();
  // const nftCost = Number(web3.utils.fromWei(priceHex));
  const nftCost = priceHex;
  const finalCost = Number((nftCost * nftQuantity).toFixed(1));
  const nftObj = novaContract.methods.mint(Number(nftQuantity)).encodeABI();
  const amount = web3.utils.toHex(
    web3.utils.toWei(finalCost.toString(), 'ether')
  );
  //const chainID=checkCorrectNetwork();

  const WalletAddress = await getUserAddress();
  const nftObject = {
    from: WalletAddress,
    to: "0xe693d5342ea38cba9e3999d94a462520705dcfd2",
    data: nftObj,
    value: amount,
    chainId: 3,
  };

  var response = { code: null, message: null };
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [nftObject],
    })
    console.log('txhash of nft', txHash);
    response.code = 200;
    response.message = txHash;
    return response;
  } catch (err) {
    // console.log('catch', e);
    response.code = err.code;
    response.message = err.message;
    return response;
  }
}

export const getNFTPrice = async () => {
  let result = await novaContract.methods.getNftPrice().call();
  return result;
}