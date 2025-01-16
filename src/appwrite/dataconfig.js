import config from '../config/config.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

// Service class to handle interactions with Appwrite Databases and Storage
export class Service {
    client = new Client(); // Initialize Appwrite client
    databases; // Reference for database operations
    bucket; // Reference for storage operations

    // Constructor to initialize Appwrite client, database, and storage references
    constructor() {
        // configigure Appwrite client with endpoint and project ID
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        // Initialize database and storage instances
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    /**
     * Create a new post in the database
     * @param {Object} postData - Contains title, slug, content, featuredImage, status, and userId
     */
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            // Create a document in the specified database and collection
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, // Unique ID for the document
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    /**
     * Update an existing post in the database
     * @param {string} slug - Unique identifier of the post
     * @param {Object} updatedData - Contains title, content, featuredImage, and status
     */
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            // Update the document with the given slug
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    /**
     * Delete a post from the database
     * @param {string} slug - Unique identifier of the post to delete
     */
    async deletePost(slug) {
        try {
            // Delete the document with the given slug
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    /**
     * Fetch a single post by its slug
     * @param {string} slug - Unique identifier of the post
     */
    async getPost(slug) {
        try {
            // Retrieve the document with the given slug
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    /**
     * Fetch multiple posts based on queries
     * @param {Array} queries - Array of Appwrite Query objects (default: active status)
     */
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            // Retrieve a list of documents matching the queries
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    /**
     * Upload a file to Appwrite storage
     * @param {File} file - File object to upload
     */
    async uploadFile(file) {
        try {
            // Upload the file with a unique ID
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    /**
     * Delete a file from Appwrite storage
     * @param {string} fileId - Unique identifier of the file
     */
    async deleteFile(fileId) {
        try {
            // Delete the file with the given ID
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    /**
     * Get a file preview URL
     * @param {string} fileId - Unique identifier of the file
     */
    getFilePreview(fileId) {
        // Generate a file preview URL
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        );
    }
}

// Initialize and export the Service instance for use in the application
const service = new Service();
export default service;
