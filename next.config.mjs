/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/home",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        // Se necessário, você pode adicionar configurações adicionais como porta, caminho, etc.
      },
    ],
  },
};

export default nextConfig;
