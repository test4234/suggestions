export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/data/keywordsdata.json") {
      const json = await fetch("https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/main/data/keywordsdata.json");
      return new Response(await json.text(), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
