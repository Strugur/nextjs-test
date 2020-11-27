module.exports =  {
    async rewrites() {
      return [
        // Basic `path-to-regexp` usage
        // Query object shape: { id: string }
        { source: "/krani", destination: "/catalog" },
        { source: "/kuhnea", destination: "/catalog" },
  
        // // Optional Language
        // // Query object shape: { lang?: string }
        // { source: "/:lang(en|es)?/about", destination: "/about" },
  
        // // Advanced rewrite
        // // Query object shape: { id: string } (in addition to dynamic route param)
        // { source: "/u/:id", destination: "/user/:id" }
      ];
    }
  };