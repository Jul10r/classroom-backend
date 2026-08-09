# Classroom Backend

A robust Node.js/Express backend server for a classroom management application. Built with TypeScript, featuring database management with Drizzle ORM, authentication with Better Auth, and security protection with Arcjet.

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js 5.2
- **Language:** TypeScript 7.0
- **Database:** PostgreSQL (Neon Serverless)
- **ORM:** Drizzle ORM 0.45
- **Authentication:** Better Auth 1.6
- **Security:** Arcjet
- **Database Tooling:** Drizzle Kit

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ and npm or yarn
- PostgreSQL database (or Neon account for serverless PostgreSQL)
- Git

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd classroom-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database Configuration
   DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]?sslmode=require
   
   # Arcjet Security
   Arcjet_KEY=your_arcjet_key
   Arcjet_ENV=development
   
   # Application
   FRONTEND_URL=http://localhost:5173
   
   # Better Auth
   BETTER_AUTH_SECRET=your_secret_key
   ```

   **Environment Variables Guide:**
   - `DATABASE_URL`: PostgreSQL connection string. Get a free instance from [Neon](https://neon.tech)
   - `Arcjet_KEY`: API key from [Arcjet](https://arcjet.com) for security protection
   - `FRONTEND_URL`: URL where your frontend is running
   - `BETTER_AUTH_SECRET`: A secure random string for authentication (generate with `openssl rand -base64 32`)

## 🗄️ Database Setup

1. **Generate database migrations:**
   ```bash
   npm run db:generate
   ```

2. **Run migrations:**
   ```bash
   npm run db:migrate
   ```

3. **Test database connectivity and CRUD operations:**
   ```bash
   npm run db:test-crud
   ```

## 🏃 Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The server will start on `http://localhost:8000`

### Production Mode
Build the TypeScript code:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
classroom-backend/
├── src/
│   ├── index.ts                 # Application entry point
│   ├── test-crud.ts            # Database CRUD testing
│   ├── express.d.ts            # Express type definitions
│   ├── type.d.ts               # Global type definitions
│   ├── config/
│   │   └── arcjet.ts           # Arcjet security configuration
│   ├── db/
│   │   ├── index.ts            # Database connection setup
│   │   └── schema/
│   │       ├── index.ts        # Schema exports
│   │       ├── app.ts          # Application-related tables
│   │       └── auth.ts         # Authentication-related tables
│   ├── lib/
│   │   └── auth.ts             # Better Auth configuration
│   ├── middleware/
│   │   └── security.ts         # Security middleware
│   └── routes/
│       ├── subjects.ts         # Subject management endpoints
│       ├── users.ts            # User management endpoints
│       └── classes.ts          # Class management endpoints
├── drizzle/                     # Database migrations
├── drizzle.config.ts           # Drizzle ORM configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── .env                        # Environment variables (not committed)
```

## 🔌 API Endpoints

### Subjects
- `GET /api/subjects` - Get all subjects
- `POST /api/subjects` - Create a new subject
- `GET /api/subjects/:id` - Get a specific subject
- `PUT /api/subjects/:id` - Update a subject
- `DELETE /api/subjects/:id` - Delete a subject

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get a specific user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Classes
- `GET /api/classes` - Get all classes
- `POST /api/classes` - Create a new class
- `GET /api/classes/:id` - Get a specific class
- `PUT /api/classes/:id` - Update a class
- `DELETE /api/classes/:id` - Delete a class

### Authentication
- `POST /api/auth/*` - All authentication endpoints handled by Better Auth

## 🔐 Security Features

- **CORS Protection:** Configured to accept requests only from the frontend URL
- **Arcjet Security:** Rate limiting and bot detection
- **Better Auth:** Secure authentication and session management
- **SSL Database Connections:** All database connections use SSL encryption

## 🛠️ Development Workflow

1. **Make changes** to the TypeScript source files in `src/`
2. **Run in development mode** with `npm run dev` to see changes automatically
3. **Test database operations** with `npm run db:test-crud`
4. **Generate new migrations** with `npm run db:generate` when you modify the database schema
5. **Run migrations** with `npm run db:migrate` to apply changes to the database

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled production build |
| `npm run db:generate` | Generate database migrations |
| `npm run db:migrate` | Run pending migrations |
| `npm run db:test-crud` | Test database connectivity and CRUD operations |
| `npm test` | Run tests (not implemented) |

## 🚨 Troubleshooting

### Database Connection Issues
- Verify your `DATABASE_URL` is correct
- Check that your database service is running
- Ensure your network allows the connection (firewall/VPN)
- For Neon, verify your project is not in a suspended state

### Port Already in Use
The server defaults to port 8000. To use a different port, modify `src/index.ts`:
```typescript
const PORT = process.env.PORT || 8000;
```

### CORS Errors
- Ensure `FRONTEND_URL` in `.env` matches your frontend's actual URL
- Check that the frontend is making requests to the correct backend URL

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com)
- [Drizzle ORM Docs](https://orm.drizzle.team)
- [Better Auth Documentation](https://www.better-auth.com)
- [Arcjet Documentation](https://docs.arcjet.com)
- [Neon PostgreSQL Docs](https://neon.tech/docs)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes and ensure they're typed correctly
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.
