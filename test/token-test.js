const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    // const [owner, alt] = await ethers.getSigners();
    // const addresses = (await ethers.getSigners()).map(account => account.address)

    // THIS IS HOW YOU DEPLOY WITH NON-DEFAULT ADDRESS
    const Token = await ethers.getContractFactory("Token");
    // const Token = await ethers.getContractFactory("Token", alt);

    const hardhatToken = await Token.deploy();
    // console.log({ ownerAddress: owner.address })
    // console.log({ accountsAddresses: (await ethers.getSigners()).map(account => account.address) })
    // console.log({ hardhatToken })

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});