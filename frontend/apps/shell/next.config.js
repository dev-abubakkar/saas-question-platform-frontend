const { NextFederationPlugin } = require("@module-federation/nextjs-mf")

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options

    config.plugins.push(
      new NextFederationPlugin({
        name: "shell",
        remotes: {
          questionBuilder: `questionBuilder@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          paperBuilder: `paperBuilder@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
          adminPanel: `adminPanel@http://localhost:3003/_next/static/chunks/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        shared: {
          react: { singleton: true, eager: true, requiredVersion: "^18.2.0" },
          "react-dom": { singleton: true, eager: true, requiredVersion: "^18.2.0" },
        },
      }),
    )

    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
