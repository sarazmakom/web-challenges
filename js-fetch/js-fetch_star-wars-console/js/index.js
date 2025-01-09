console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    console.log("Log entire data object:", data);

    console.log("First character's name:", data.results[0].name);
    console.log("First character's hair_color:", data.results[0].hair_color);
    console.log("Eight character's name:", data.results[9].name);
    console.log("Eight character's eye_color:", data.results[9].eye_color);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData(url);
