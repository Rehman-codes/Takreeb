# Takreeb

Takreeb is a responsive web application designed to help users discover local events. It features a clean and modern UI, showcasing upcoming events with detailed information and a search functionality.

## Features

- **Top Navigation Bar**: Includes site logo and links to "Home", "Events", and "Contact".
- **Hero Section**: Displays a heading "Discover Events Near You".
- **Featured Events Section**: Lists 3–5 sample events with details such as name, date, time, location, and description.
- **Event Search**: Allows users to filter events by name.
- **Contact Section**: Provides contact details and a form for users to send messages.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.

## Bonus Features

- Dynamic event data loading using dummy JSON.
- Smooth scrolling navigation.

## Tech Stack

- **Frontend**: React, TailwindCSS.
- **Build Tool**: Vite.
- **Icons**: Lucide React.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rehman-codes/takreeb.git
   cd takreeb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code issues.

## Folder Structure

```
takreeb/
├── src/
│   ├── components/
│   │   ├── Home/
│   │   ├── Events/
│   │   ├── Contact/
│   ├── data/
│   ├── pages/
│   ├── index.css
│   ├── main.jsx
│   ├── App.jsx
├── public/
├── package.json
├── vite.config.js
├── README.md
```

## License

This project is licensed under the MIT License.

