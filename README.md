# 📰 News App - React Native

This project is a React Native news app that fetches the top 100 news headlines from the NewsAPI, stores them for offline access, and displays them in a dynamic list view. The app updates the headlines periodically, allows user interaction, and manages state using Redux and Redux-Saga.

## 📋 Features

- **Dynamic Headline Updates**: Fetches and displays headlines in batches, with new headlines added to the list every 10 seconds.
- **Offline Access**: Headlines are stored locally for access without an internet connection.
- **User Interaction**: Swipe to delete headlines or pin them to the top of the list. Pinned headlines remain at the top during list updates.
- **Manual Refresh**: Users can manually refresh the list to fetch new headlines, which resets the automatic update timer.

## 🛠️ Technical Implementation

### 🌐 API Integration

- **NewsAPI Integration**: The app integrates with NewsAPI to fetch the latest headlines.
  - Replace 'KEY' in the `getHeadlinesFromApi.ts` file with your actual NewsAPI key.
  - Axios is used for making API requests with proper error handling.

### 🌍 State Management

- **Redux**: Global state management ensures efficient data handling and synchronization.
- **Redux-Saga**: Handles side effects like asynchronous API calls, ensuring a predictable and clean data flow.

### 📜 List Rendering

- **SwipeListView**: Utilized to render the list of headlines, allowing for swipe actions like delete and pin.
- List updates dynamically without losing the user's scroll position, even during periodic updates or manual refreshes.

### 🧠 Main Component Logic

The `NewsList` component is the core of the application, implementing the following key functionalities:

1. **State Management**: 
   - Utilizes Redux for global state management, accessing headline data, pagination info, and pinned headlines.
   - Local state manages refreshing and loading states.

2. **Dynamic Content Loading**:
   - Implements an effect to fetch new headlines when the current batch is exhausted.
   - Another effect adds new headlines every 5 seconds, simulating real-time updates.

3. **User Interactions**:
   - Implements swipe-to-delete and swipe-to-pin actions on list items.
   - Provides a manual refresh functionality to fetch new headlines on demand.

4. **Rendering**:
   - Uses `SwipeListView` for efficient list rendering with swipe actions.
   - Renders each headline with its title, source, publication time, and image (if available).
   - Implements hidden buttons for delete and pin actions.

5. **Performance Optimization**:
   - Slices the headline array to display only the required items, improving render efficiency.
   - Uses `extraData` prop to ensure re-renders when the number of displayed headlines changes.

This component showcases effective use of React hooks (`useEffect`, `useState`) and Redux integration (`useDispatch`, `useSelector`) to create a dynamic and interactive news feed.

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js and npm or yarn installed.
- React Native development environment set up.

### 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/news-app-react-native.git
   ```

2. Install dependencies:
   ```bash
   cd news-app-react-native
   npm install # or yarn install
   ```

3. Add your NewsAPI key:
   - Open the `getHeadlinesFromApi.ts` file.
   - Replace 'KEY' with your actual NewsAPI key.
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```

4. Run the app:
   ```bash
   npm start # or yarn start
   ```

## 📓 Additional Notes

- **Redux and Redux-Saga**: Critical for managing state and handling side effects in the app, providing a smooth user experience.
- **Security**: Ensure your API key is kept secure and not exposed in public repositories.