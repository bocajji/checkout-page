/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.docmorris.de',
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
