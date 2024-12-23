const Home = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-pink-200">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            Welcome to the <span className="text-indigo-500">Underwear Web</span>!
          </h1>
          <p className="text-gray-600 text-lg">
            Discover comfort and style with our exclusive collection.
          </p>
          <button className="mt-6 px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition-all">
            Shop Now
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  