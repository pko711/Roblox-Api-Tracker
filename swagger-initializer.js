window.onload = function() {
  fetch("https://api.github.com/repos/pko711/Roblox-Api-Tracker/git/trees/github-pages?recursive=1")
    .then(r => r.json())
    .then(data => {
      const urls = data.tree
        .filter(f => f.type === "blob" && f.path.endsWith(".json") && !f.path.startsWith("."))
        .sort((a, b) => a.path.localeCompare(b.path))
        .map(f => ({
          url: `https://raw.githubusercontent.com/pko711/Roblox-Api-Tracker/github-pages/${f.path}`,
          name: f.path.replace(/\.json$/, "").replace(/\//g, " / ")
        }));

      window.ui = SwaggerUIBundle({
        urls: urls,
        "urls.primaryName": urls[0]?.name,
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      });
    });
};
