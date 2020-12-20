function domainType(domains) {
  return domains.map((d) => {
    return ["commercial", "information", "network", "organization"].find(dt => dt.startsWith(d.split('.').slice(-1).join('')));
  })
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
console.log(domainType(["codefights.com", "en.wiki.org", "happy.net", "code.info"]));