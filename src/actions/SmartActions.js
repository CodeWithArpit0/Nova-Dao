import novaContract from "../utils/nova-connection";
import web3 from "../web3"

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
  const nftObject = {
    from: "0x7F74176F143699a78D4D186C1061A995b9012854",
    to: "0xe693d5342ea38cba9e3999d94a462520705dcfd2",
    data: nftObj,
    value: amount,
    chainId: 3,
  };
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [nftObject],
    });
    console.log('txhash of nft', txHash);
    return txHash;
  } catch (e) {
    //console.log('catch', e);
    return null;
  }
}

export const getNFTPrice = async () => {
  let result = await novaContract.methods.getNftPrice().call();
  return result;
}