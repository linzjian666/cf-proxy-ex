export default {
  async fetch(request, env) {
    const _url = new URL(request.url);
    _url.hostname = "proxyex.linzjian666.workers.dev";
    _url.protocol = "https";
    const req = new Request(_url, request);
    return fetch(req);
  },
};
