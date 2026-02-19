function FindProxyForURL(url, host) {
  function isDomainOrSubdomain(h, domain) {
    return h === domain || shExpMatch(h, "*." + domain);
  }

  var SOCKS_MAIN = "SOCKS 127.0.0.1:9999";
  var SOCKS_CP   = "SOCKS 127.0.0.1:9990";

  var mainDomains = [
    "rutracker.me",
    "rutracker.net",
    "rutracker.cc",
    "rutrk.org",
    "facebook.com",
    "twitter.com",
    "chatgpt.com",
    "iherb.com",
    "udemy.com",
    "udemycdn.com",
    "googlevideo.com",
    "youtube.com",
    "pusher.com",
    "pusherapp.com",
    "cookielaw.org",
    "libgen.li",
    "jetbrains.com",
    "fastpic.org",
    "echo-books.com",
    "vdsina.com",
    "asics.com",
    "carnegieendowment.org",
    "manning.com",
    "twirpx.link"
  ];

  for (var i = 0; i < mainDomains.length; i++) {
    if (isDomainOrSubdomain(host, mainDomains[i])) {
      return SOCKS_MAIN;
    }
  }

  if (isDomainOrSubdomain(host, "cp.live.vtbf.ru")) {
    return SOCKS_CP;
  }

  return "DIRECT";
}
