# Medimarkt Project App

Submited by: Akul Sharma

Email: sharma.akul08@gmail.com, akul.sharma007@gmail.com

## How to run Demo

#### Prerequisites and scope of testing
Install [Expo Go](https://expo.dev/client) app on Android phone. Note that the app has been only tested on an Android actual device and on IOS simulator.

#### Installation and local development instructions

1. Clone the repository
```bash
$ git clone https://github.com/akulsharma007/mediamarktchallenge.git
```
2. Install dependencies
```bash
$ yarn install
```
3. Run the demo
```bash
$ yarn start
```
4. QR code will display in terminal. Scan the displayed QR code using Expo Go app

## User stories

### 1. Add Parcel Manually

#### Add new parcels by entering the parcel id and carrier id manually.

- User can click the "+" button to enter new parcel id manually

(![image1](https://user-images.githubusercontent.com/15700460/228176345-d98d1dea-6c68-4510-bb1b-5058867fd902.jpeg))

- Users can choose from available carriers in the system.

![image2](https://user-images.githubusercontent.com/15700460/228176793-c5248747-7fd4-48ec-926a-085c6d1e4c1b.jpeg)

#### Scope of Validation

- Parcel that does not exist in the system can not be added.

- There can only be one carrier assigned to a parcel. If Parcel is already added and assigned to a carrier, then it can not be added again.

- Carrier Id has to be selected.


### 2. Add Parcel using Barcode

#### Add new parcels by scanning the parcel barcode

- User can press on "Scan" icon in the add bottom sheet.

![image3](https://user-images.githubusercontent.com/15700460/228177265-1172cdcd-e3fc-48ee-bb6a-a9ac76e550d5.jpeg)


### 3. Show Parcels Lists

#### Show the full list of available parcels grouped by pickup date

- User can view the full list of parcels lists grouped and sorted by pickup date

- User can click on a list to view all the parcels for a particular date

![image4](https://user-images.githubusercontent.com/15700460/228177702-50e91d36-dc99-4058-b091-942a0eaf15dc.jpeg)


### 4. Parcel Handover

#### Handover with the entry of the driver's name and its license plate

- At time of delivery, user can select a Parcel to view item details

- User can click on Deliver button to initiate handover to Carrier

- User has to manually add Driver's Name and License Plate to handover the courier

![image5](https://user-images.githubusercontent.com/15700460/228178017-33793627-cb5c-4038-9f53-3ee72c750932.jpeg)

- After parcel is handed over, user can go back to the parcel list to see the updated delivery status after a modal popup shows confirmation

![image7](https://user-images.githubusercontent.com/15700460/228180403-e8f1f1a6-b280-48ad-824b-251e6218ad38.jpeg)

- Error after parcel handover

![image6](https://user-images.githubusercontent.com/15700460/228180520-33797f8d-c0ce-4c36-baa4-6cc6ededcbe7.jpeg)

#### Scope of Validation

- User sees the error if Carrier doesn't exist with the provider driver name and license plate.

## Technical Documentation

### 1. Folder Structure

- `./src`: Folder contains all the Screens, Reusable components, services, mocks, utility functions etc
- `./App.jsx`: Bootstraping file of the app, it contains the Screen routes
- `./src/services`: Placeholder for service layer. This is where all the api request handlers go. Currently, it contains mock APIs
- `./src/components`: Reusable Components that are shared across screens

### 2. Storage Strategy

Project uses [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage/) as persistent storage to save Parcel to Carrier mapping.

Since it was a frontend focussed challenge, I did not implement the backend for it.

### 3. Image Assets

Project uses [Expo Vector Icons](https://icons.expo.fyi/) for icons and images.

### 4. Linting and formating

Project uses esLint and Prettier for code formating.

```bash
$ yarn run lint
```

### 5. Git strategy
I have not used feature branching development since I was the only one developing it and hence development is segregated based on commits in the master branch.

## Improvements and missing pieces

Following are the things I couldn't do due to time constraints, but can be added in next versions:

1. Driver's signature
2. Parcel Lists screen when no Parcel is added
3. Design improvements
4. Unit and Integration testing - One of the most important parts.
5. Stepper component for showing Delivery Progress
