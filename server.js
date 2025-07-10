export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/data/keywordsdata.json") {
      const json = await fetch("https://github.com/test4234/suggestions/blob/main/keywordsdata.json");
      return new Response(await json.text(), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
