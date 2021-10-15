import React, { useState } from "react";
import "./searchResults.css";

const SearchResults = () => {
  const baseURL = "https://www.friscoisd.org/searchData/searchTerms.json";

  const searchTermsArr = [];

  function getSearchTermsData() {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        searchTermsArr.push(...data);
        init();
      })
      .catch((error) => {
        search__results.innerHTML = ` ${error}`;
      });
  }

  function init() {
    //html data to display in browser
    const htmlData = ({ u, t }) => {
      const url = `https://www.friscoisd.org/sc/`;
      return `<li tabindex="-1" class="character">
                  <a tabindex="0" class="search__link" href="${url}${u}" >${t}</a>
              </li>`;
    };

    //find Matches Regex
    const findMatches = (wordToMatch, searchTermsArr) => {
      return searchTermsArr.filter((data) => {
        //Regex
        // gi: pass the char typed and match globally regardless of caseType
        //
        const regex = new RegExp(wordToMatch, "gi");
        return data.t.match(regex);
      });
    };

    // Display Matches
    function displayMatches() {
      const findMatch = findMatches(this.value, searchTermsArr);

      const htmlDataToDisplay = findMatch
        .map((data) => {
          return htmlData(data);
        })
        .join("");

      if (htmlDataToDisplay.length > 0) {
        search__results.innerHTML = htmlDataToDisplay;
      } else {
        const urlFISD =
          "https://www.friscoisd.org/search-results?cx=017951229044668060468%3Anrd98uepiu8&cof=FORID%3A11&q=";

        searchBar.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            window.location.href = `${urlFISD} ${this.value}`;
          }
        });

        search__results.innerHTML = `
        <li tabindex="-1" class="character">
              <a 
              tabindex="0" 
              class="search__link" 
              href="${urlFISD} ${this.value}"> Go to: Frisco ISD Website Search page</a>
        </li>`;
      }
      if (
        this.value === "" ||
        this.value == 0 ||
        this.value === null ||
        this.value.length <= 1
      ) {
        search__results.innerHTML = "";
      }
    }

    searchBar.addEventListener("input", displayMatches);
  }

  return (
    <ul className="SearchResults">
      <li>Search results</li>
      <li>Search results</li>
      <li>Search results</li>
      <li>Search results</li>
    </ul>
  );
};

export default SearchResults;
