import React from 'react';
import { Container } from '../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      {/* Hero Section */}
      <div className="py-16">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold text-[#4A7C59] mb-6">
              Welcome to Our Blog
            </h1>
            <p className="text-xl text-[#4A7C59] max-w-2xl mb-8">
              Discover stories, insights, and inspiration from our community of writers and thinkers.
            </p>
            <button 
              onClick={() => navigate(authStatus ? '/all-posts' : '/login')}
              className="bg-[#81B29A] hover:bg-[#4A7C59] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              {authStatus ? "View All Posts" : "Start Reading"}
            </button>
          </div>
        </Container>
      </div>

      {/* Featured Sections */}
      <div className="bg-[#F3EAC2] py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 text-[#B08968] mb-4 flex items-center justify-center text-2xl">📚</div>
              <h2 className="text-2xl font-semibold text-[#4A7C59] mb-4">
                Curated Content
              </h2>
              <p className="text-[#A3B18A]">
                Explore our carefully selected articles covering various topics from expert writers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 text-[#B08968] mb-4 flex items-center justify-center text-2xl">👥</div>
              <h2 className="text-2xl font-semibold text-[#4A7C59] mb-4">
                Community Driven
              </h2>
              <p className="text-[#A3B18A]">
                Join a community of passionate readers and writers sharing their perspectives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 text-[#B08968] mb-4 flex items-center justify-center text-2xl">✍️</div>
              <h2 className="text-2xl font-semibold text-[#4A7C59] mb-4">
                Share Your Voice
              </h2>
              <p className="text-[#A3B18A]">
                Create an account to contribute your own stories and insights.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <Container>
          <div className="bg-[#D9C5B2] rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-[#4A7C59] mb-4">
              {authStatus ? "Ready to Share Your Story?" : "Ready to Start Writing?"}
            </h2>
            <p className="text-[#4A7C59] mb-8 max-w-2xl mx-auto">
              Share your knowledge, experiences, and stories with our growing community of readers.
            </p>
            <button 
              onClick={() => navigate(authStatus ? '/add-post' : '/signup')}
              className="bg-[#81B29A] hover:bg-[#4A7C59] text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              {authStatus ? "Create Post" : "Create Account"}
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;