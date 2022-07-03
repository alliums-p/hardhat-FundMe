const { getNamedAccounts } = require("hardhat");

describe("FundMe", async function() {
    let fundMe, deployer;
    const sendValue = ethers.utils.parseEther("1");

    beforeEach(async function() {
        deployer = (await  getNamedAccounts()).deployer;
        fundMe = await ethers.getContract("FundMe", deployer);
    })
});