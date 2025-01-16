import config from '../config/config.js';
import { Client, Account, ID } from "appwrite";

// AuthService class for handling user authentication using Appwrite.
export class AuthService {
    client = new Client(); // Initialize Appwrite client
    account;

    // Constructor to set up Appwrite client and account instance.
    constructor() {
        // Set up Appwrite endpoint and project ID
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        
        // Initialize the account object for handling user authentication
        this.account = new Account(this.client);
    }

    // Function to create a new user account
    async createAccount({ email, password, name }) {
        try {
            // Create the account with a unique ID, email, password, and name
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            // If account is created successfully, login the user automatically
            if (userAccount) {
                return this.login({ email, password }); // Call the login method
            } else {
                return userAccount; // Return user account if not logged in
            }
        } catch (error) {
            // Catch any errors during account creation
            throw error;
        }
    }

    // Function to log in the user with email and password
    async login({ email, password }) {
        try {
            // Create a session using email and password
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            // Catch any errors during login
            throw error;
        }
    }

    // Function to get the current logged-in user
    async getCurrentUser() {
        try {
            // Retrieve the current logged-in user's information
            return await this.account.get();
        } catch (error) {
            // Log any error during fetching the current user
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null; // Return null if user not found or error occurred
    }

    // Function to log out the user by deleting all sessions
    async logout() {
        try {
            // Delete all user sessions to log out
            await this.account.deleteSessions();
        } catch (error) {
            // Log any error during logout
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

// Initialize and export the AuthService instance for use
const authService = new AuthService();

export default authService;
