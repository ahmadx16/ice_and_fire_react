# Ice and Fire Login UI (React)

This React application contains login page that requires the [DRF backend server](https://github.com/ahmadx16/IceAndFire_Django/tree/authentication) running on the localhost at port 8080 in order to work.

## Interface

The responsive interface is build via customizing bootstrap with SaSS. Interface consists of basic login form and two themes i.e. Ice theme and Fire theme

### Ice theme

![Ice Theme](readme_files/ice.png)

### Fire theme
![Fire Theme](readme_files/fire.png)

## Instructions

Following are the instructions that you need perform in order to run the application.

1. [Clone the repository](#clone-the-repository)
1. [Environment Setup](#environment-setup)
1. [Running the Application](#running-the-application)
1. [Troubleshooting](#troubleshooting)

## Clone the Repository

Clone this repository and switch to the `login` branch as it currently contains the latest code. Run the following commands on your shell.

``` shell
git clone https://github.com/ahmadx16/ice_and_fire_react.git
cd ice_and_fire_react/
git checkout login
``` 

The above commands will download the repository and switch the branch.

## Environment Setup

This application requires [Nodejs]() and [npm]() installed on the system to execute. You can learn how to install on provided links. It is recommended to install latest version of node and npm. 
After you have installed node and npm run following command.

``` shell
npm install
```

This command will install all the packages that has been specified in `package.json` file.

## Running the Application

Run following command to start the application

``` shell
npm start
```

The above command will start the development server on `http://localhost:3000`

## Troubleshooting

Make sure that you are running backend on port 8080.

On running command `npm start` you may or may not get the error `Error: ENOSPC: System limit for number of file watchers reached` . It occurs when system file watching limit exceeds. You can simply fix this error either by using command `sudo npm start` or increasing the file watchers limit. Learn about how to increase file wathchers on Ubuntu [here](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached)



___
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
