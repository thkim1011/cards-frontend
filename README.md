# Cards Frontend
This is a frontend for the cards application written in react.

## Setting up environment
For the environment setup, we recommend using `node` managed by `nvm` and `yarn`.
First, clone the repository to a local directory. 
Install node version manager `nvm` with the following command
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
Make sure that `nvm` is in your path by running `nvm --version`. Now, run the following to install the version of node required for this project.
```
nvm use
```

Now, all we have left to do is install `yarn`. From here on, the steps will differ based on whether you use MacOS or Linux.
### Ubuntu
Add yarn to your apt repository as follows:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
Uninstall `cmdtest` which provides a different `yarn` binary.
```
sudo apt remove cmdtest
sudo apt autoremove 
```
Finally, install `yarn`.
```
sudo apt update && sudo apt install yarn
```

### MacOS
You should be able to install yarn with brew.
```
brew install yarn
```

## Workflow
To build the project for the first time, you can run the following to install dependencies
```
yarn
```
To start a local server, run
```
yarn start
```
