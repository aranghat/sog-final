export default  getBaseUrl = () => {
    const baseUrl =  process.env.NODE_ENV === 'production' ? 'https://api.example.com' : 'http://localhost:3000';
   return baseUrl;
}