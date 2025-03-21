# Block Firm Enterprise - Admin Dashboard

This repository contains the admin dashboard for **Block Firm Enterprise**, a furniture and carpentry company. The dashboard is currently in development and will evolve into a fully functional management system.

## 🖼️ Screenshot
![Dashboard Screenshot](admin-panel/public/screenshot.png)

## 📌 Features
- 📊 Sales and revenue tracking
- 📈 Interactive charts for analytics
- 📦 Stock alerts and product performance insights
- 🛒 Order management
- 🏢 Category analysis

## 📁 Project Structure
```
block-firm-enterprise/
├── admin-panel/     # Dashboard source code
│   ├── components/  # Reusable UI components
│   ├── pages/       # Dashboard pages
│   ├── public/      # Static assets
│   ├── styles/      # Styling files
│   ├── utils/       # Helper functions
│   └── ...         
├── api/             # C# API source code
│   ├── Controllers/ # API controllers
│   ├── Models/      # Database models
│   ├── Services/    # Business logic
│   ├── appsettings.json # Configuration file
│   └── ...         
└── README.md        # Project documentation
```

## 🚀 Getting Started

### 1️⃣ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm
- [.NET SDK](https://dotnet.microsoft.com/download) (for the C# API)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Redis](https://redis.io/download)

### 2️⃣ Installation
```sh
# Clone the repository
git clone https://github.com/Tshabalala-Thabo/block-firm-enterprise.git

# Navigate to the admin panel directory
cd block-firm-enterprise/admin-panel

# Install dependencies
yarn install  # or npm install

# Navigate to the API directory
cd ../api

# Install .NET dependencies
dotnet restore
```

### 3️⃣ Running the Dashboard
```sh
# Start the development server
yarn dev  # or npm run dev
```
The dashboard should now be accessible at `http://localhost:3000/`.

### 4️⃣ Setting Up the C# API

#### Database Configuration
1. **PostgreSQL Setup**:
   - Create a new database in PostgreSQL.
   - Update the connection string in `api/appsettings.json`:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Host=your_host;Database=your_database;Username=your_username;Password=your_password"
     }
     ```

2. **Redis Setup**:
   - Ensure Redis is running on your local machine or update the Redis connection string in `api/appsettings.json`:
     ```json
     "Redis": {
       "ConnectionString": "localhost:6379"
     }
     ```

3. **Apply Migrations**:
   - Run the following command to apply database migrations:
     ```sh
     dotnet ef database update
     ```

4. **Run the API**:
   - Start the API by running:
     ```sh
     dotnet run
     ```
   - The API should now be accessible at `http://localhost:5000/` or `https://localhost:5001/`.

### 5️⃣ Role-Based Access Control (RBAC)
The API includes role-based access control. Ensure you configure roles and permissions as needed in your application logic.

## 📌 Roadmap
- 🔜 Add user authentication
- 🔜 Implement role-based access control
- 🔜 Integrate backend APIs
- 🔜 Enhance UI/UX

## 🤝 Contribution
Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License
This project is licensed under the MIT License.

---
Made with ❤️ by Block Firm Enterprise.
