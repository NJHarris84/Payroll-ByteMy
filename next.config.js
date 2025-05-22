// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Optimize webpack cache to avoid serialization warnings
  webpack: (config, { dev, isServer }) => {
    // Optimize memory usage and caching
    config.infrastructureLogging = {
      ...config.infrastructureLogging,
      // Reduce logging noise
      level: 'error',
    };
    
    if (!dev) {
      // Optimize for production builds
      config.optimization.moduleIds = 'deterministic';
      
      // Add custom cache settings to handle large serialized strings
      if (config.cache) {
        // Disable filesystem cache for large strings - use memory cache instead
        // This helps avoid the serialization warnings
        if (config.cache.type === 'filesystem') {
          // Set a threshold for string size that triggers Buffer conversion
          config.cache.allowCollectingMemory = true;
          config.cache.memoryCacheUnaffected = true;
          
          // Manage cache memory usage more aggressively
          config.cache.maxMemoryGenerations = 1;
        }
      }
    }
    
    // Ignore the webpack warning about serializing big strings (suppresses the warning)
    // Note: This doesn't fix the underlying issue but will hide the warning message
    config.ignoreWarnings = [
      ...config.ignoreWarnings || [],
      /\[webpack\.cache\.PackFileCacheStrategy\] Serializing big strings/
    ];
    
    return config;
  },
};

// Use ES module export syntax since package.json has "type": "module"
export default nextConfig;
