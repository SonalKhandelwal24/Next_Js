/** @type {import('next').NextConfig} */
const nextConfig = {
    
    redirects:async()=> {
        return [
            {
                source:'/admin',
                destination:'/',
                permanent:false
            },
            {
                source:'/admin/:adminid',
                destination:'/',
                permanent:false
            },
            {
                source:'/collage',
                destination:'/',
                permanent:false
            }
        ]
    }
};

export default nextConfig;
