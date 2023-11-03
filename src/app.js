/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    const domains = generateDomain();
    displayDomains(domains);
  });
  // console.log("Hello Rigo from the console!");

  let generateDomain = () => {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    var list = []

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          list.push(pronoun[i] + adj[j] + noun[k] + ".com");
        }
      }
    }return list;
  }; let displayDomains = (domains) => {
    const domainList = document.querySelector('#the-domain');
    domainList.innerHTML="";
    domains.forEach((domain) => {
      const listItem = document.createElement("li")
      listItem.textContent = domain;
      domainList.appendChild(listItem);
    })
  }
};
