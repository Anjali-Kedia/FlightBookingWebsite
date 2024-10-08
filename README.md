# Flight Search Application

This project is a frontend application designed to enable users to search for flights, view detailed flight information, and interact with dynamic panels. It features an animated sliding panel for flight details, search fields with auto-suggestions, and a clean UI.

## Table of Contents
- [Features](#features)
- [App Structure](#app-structure)

## Features

### Flight Search Form
- **Dynamic Search Fields**: Users can input their departure and destination airports, which trigger dropdown suggestions based on airport names.
- **Search Fields Icons**: Search inputs have dynamic icons that toggle between a down arrow and an up arrow when typing.


### Flight Results & Details
- **Flight Results Display**: Flights are displayed in cards showing details such as departure time, duration, stops, and pricing.
- **Detailed Flight Panel**: Clicking a flight opens up a panel that slides in from the right, showing detailed flight information.
- **Overlay & Transitions**: Smooth transitions and background dimming effects enhance user focus on the flight details panel.


## App Structure

```
/app
│
├── /flight-details/         
│   └── page.tsx
│
├── /loading/                  
│   └── page.tsx
│
├── /fonts/                  
├── favicon.ico             
├── globals.css           
├── layout.tsx              
├── page.tsx                   
│
├── /components/               
│   └── /ui/                   
│       ├── CardCom.tsx        
│       ├── FlightDetailComp.tsx 
│       ├── Hero.tsx          
│       ├── Loader.tsx        
│       ├── LoadingScreen.tsx  
│       └── Navbar.tsx        
│
├── /data/
│   └── airports.json          // JSON file containing airport data for search fields
│
├── /lib/                     
│
├── /public/                   // Public assets such as images and fonts
│   ├── Bg_loading.png         
│   ├── emirates.svg           
│   └── ...                   
│
└── /node_modules/             // Node dependencies
```

## Installation

To run the app locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/flight-search-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd flight-search-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:3000` to view the app.


## Contributor

- **[Anjali Kedia]**

---
