import web3 from "./../web3";

//check wallet Available
export const checkWalletAvailable = () => {
    if (typeof window.ethereum !== "undefined") {
        if (window.ethereum && window.ethereum.isMetaMask) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

//check correct network id
export const getChainID = async () => {
    let chainID;
    chainID = await web3.eth.getChainId();
    return chainID
}

//get user address from web3 
export const getUserAddress = async () => {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    const accountAddress = accounts[0];
    return accountAddress;
}

//get main token balance
export const getWalletBalance = async () => {
    let address = await getUserAddress();
    let balance = await web3.eth.getBalance(address);
    let mainBalance = web3.utils.fromWei(balance);
    return mainBalance;
}


