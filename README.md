# Blogify

Blogify is a full-stack blogging platform built with React, allowing users to create, read, update, and delete blogs with user authentication. It features a dynamic landing page with animations, a rich text editor (TinyMCE), and a backend powered by Appwrite, providing a seamless user experience.

Check it out here: [Blogify](https://blogify-woad-one.vercel.app/)

## Features

- User Authentication: Users can sign up, log in, and manage their account.
- Create Blogs: Logged-in users can create, edit, and delete blogs.
- TinyMCE Rich Text Editor: A fully-featured text editor for writing and formatting blog content.
- Responsive UI: A mobile-first design ensuring the app works on all devices.
- Animations: Smooth animations on the landing page using Framer Motion.
- Appwrite Backend: Backend-as-a-Service (BaaS) using Appwrite to handle database operations and authentication.
- State Management: Redux Toolkit for efficient state management across the app.

## Tech Stack

- Frontend: React, Framer Motion, Redux Toolkit, TinyMCE
- Backend: Appwrite (for authentication, database, and storage)
- Deployment: Vercel

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or above)
- npm (or yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/musabrayan/blogify.git
```

2. Navigate to the project directory:
```bash
cd blogify
```

3. Install dependencies:
```bash
npm install
```

### Environment Setup

Before running the project, you need to set up Appwrite and add the necessary configuration.

1. Create an account at Appwrite.
2. Set up a new project on Appwrite.
3. Create collections for Blogs and Users, and configure the required permissions.
4. Update the .env file in the root of the project with your Appwrite credentials (API endpoint, project ID, and database collection details).

### Running the Project

Start the development server:
```bash
npm start
```

Open the app in your browser at http://localhost:3000.

### Building for Production

To build the app for production:
```bash
npm run build
```

This will generate a production-ready version of the app in the build folder.

## Contributing

Contributions are welcome! Feel free to fork the repository and create a pull request with your proposed changes.

### Steps to Contribute

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## Acknowledgments

- React
- Appwrite
- TinyMCE
- Framer Motion
- Redux Toolkit

## Contact

For any questions or inquiries, feel free to reach out to me.
