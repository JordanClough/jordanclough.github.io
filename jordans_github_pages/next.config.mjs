/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{jordans_github_pages}' : '',
  };
  
  //module.exports = nextConfig;
  export default nextConfig;