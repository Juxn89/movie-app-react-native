
<h1 align="center">MovieFlix <span>🎬</span> - React Native</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native"/>
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" alt="Expo"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedb&logoColor=white" alt="TMDB"/>
</p>

<p align="center" style="font-size:1.1rem; color:#444;">
  Discover trending movies, search your favorites, and save them for later. Built with a modern stack for a seamless mobile experience.
</p>

## 🚀 Features

- Browse trending movies and TV shows
- Search and save your favorites
- Minimal, intuitive UI
- Powered by TMDB API
- Built with React Native, Expo, TypeScript, and Tailwind CSS

## 🛠️ Getting Started

<details>
<summary><strong>Setup Instructions</strong></summary>

1. <strong>Clone the repository</strong>:
   
   ```bash
   git clone https://github.com/your-username/movieflix-react-native.git
   cd movieflix-react-native
   ```

2. <strong>Install dependencies</strong>:
   
   ```bash
   npm install
   ```

3. <strong>Environment Variables</strong>:
   <ul>
     <li>Copy <code>.env.template</code> and rename it to <code>.env</code> <span>⚙️</span></li>
     <li>Sign up at <a href="https://www.themoviedb.org/">TMDB</a> to get your API Key <span>🔑</span></li>
     <li>Fill in the required fields in your <code>.env</code> file</li>
   </ul>

4. <strong>Database Setup</strong>:
   <ul>
     <li>Create your database and collection in Appwrite <span>🗄️</span></li>
     <li>Update the corresponding IDs in your <code>.env</code> file</li>
   </ul>

5. <strong>Run the app</strong>:
   
   ```bash
   npx expo start
   ```

</details>

## 📂 Project Structure

```bash
movie-app-react-native/
├── app/           # App screens & navigation
├── assets/        # Images & icons
├── components/    # Reusable UI components
├── constants/     # Static data (icons, images)
├── interfaces/    # TypeScript interfaces
├── services/      # API & data services
├── types/         # Type definitions
├── utils/         # Utility functions
├── .env           # Environment variables
└── ...
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br>
Feel free to check the [issues page](../../issues) or submit a pull request.

## 📄 License

This project is [MIT](LICENSE) licensed.

<br/>

<div align="center" style="margin-top:2em; font-size:1.1rem;">
  Made with <span style="font-size:1.2em;">❤️</span> and <span style="font-size:1.2em;">☕</span> from Nicaragua,
  Juan Gómez
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" alt="Nicaragua Flag" width="28" style="vertical-align:middle; margin-left:8px;"/>
</div>
