window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">
  window.ui = SwaggerUIBundle({
    url: "https://raw.githubusercontent.com/pko711/Roblox-Api-Tracker/main/accountinformation/v1.json",
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

  //</editor-fold>
};
