# Eurowings Coding Challenge

## Setup

Node server code is under `server.js` and `server` folder. This helps serve the mock data jsons kept under `server/data` folder.

React app is under `client` folder.

To install dependencies, please run following in root folder,

```bash
npm run install-pkgs
```

If above command fails for any reason, please run `npm install` in root folder and inside `client` folder to get the node modules for client and server code.

## Run the application

To run node server, run following command in root folder,

```bash
npm run start
OR
npm run start-watch
```

Open [http://localhost:5000](http://localhost:5000) for Node server.

To run React app, run following commands,

```bash
cd client
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) for React web application.

Run `npm run test` for test case execution.

Run `npm run test-coverage` will provide test case coverage report under `coverage` folder.

## Modules used

- Express
- Vite
- Jest
- React Testing Library

## Implementation

- Mock data jsons are served through node server.

  - `/api/getData` - returns cities and flights array with schema as,

    ```javascript
    {
      cities: [
        {
          key: "PNQ",
          value: "Pune"
        }
        ...
      ],
      flights: [
        {
            id: "8a10a8fb-067e-45f8-870a-ca56929c21ba",
            origin: "BER",
            destination: "PNQ",
            departureDate: "2023-07-20",
            availableSeats: 33,
            departureTime: "09:00 am",
            arrivalTime: "10:30 pm",
            totalTravelTime: 13.5,
            price: {
                amount: "168.12",
                currency: "EUR"
            },
            airline: {
                code: "AI"
            }
        }
        ...
      ]
    }
    ```

- These APIs are loaded in React app when user loads the application.

- Search component is created which filters through all the flights data. Data is filtered through this properties,

  - origin
  - destination
  - departureDate

- Mocked data is only present for single departureDate at the moment i.e. `20/07/2023`.

- Sort component is also created to sort filtered flights data as `cheapest` or `fastest` option.

- Custom fetch hook is created to call the above APIs.

- Context is used to store data as we are calling the APIs on load and data is passed through different functional components.\
  As data is not that extensive, I preferred to use Context, in other scenarios, Redux state management using Sagas for async operations would be the best bet.

## Folder structure

- Context is placed under `client/src/context`.
- CSS is maintained using SASS and application wide CSS is created using various `mixins` and `variables`. Common styles are placed under `client/src/styles`. Component specific styles are placed under each respective component folder.
- Common utility methods are placed under `client/src/utils/util.ts`.\
  Constants, API methods, base types, custom fetch hook all are placed under `client/src/utils/util.ts`.
- Components are divided into two categories `high` and `low`. All components are placed under `client/src/components`.

  - High components are usually created by combining one or more low components.
  - Low components are mostly standard stand alone components.

- All test cases for the components are under `client/src/__tests__`.
- All image assets are maintained under `client/public/assets`.

## Demo

Demo video is in the project - `./demo.mp4`.
