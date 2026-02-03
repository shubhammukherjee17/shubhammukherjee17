const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Shubham%20Mukherjee&g=shubhammukherjee17&x=ItsShubhamDev&l=theshubhammukherjee&i=https%3A%2F%2Fi.pinimg.com%2F736x%2F42%2Fd9%2Ff5%2F42d9f55012b192fdd413f8ff30953cbc.jpg&p=https%3A%2F%2Fshubhammukherjee.in&z=dbc75";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
