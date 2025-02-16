import axios from "axios";

export interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface UnsplashApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

const ACCESS_KEY = "YPEAYI2jB2cor8lAy-0XiUKferR-i_otK6fISEDBvK8";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";
axios.defaults.params = {
  per_page: 8,
  orientation: "landscape",
};

export const fetchGalleryPhotos = async (
  query: string,
  page: number
): Promise<UnsplashApiResponse> => {
  const response = await axios.get<UnsplashApiResponse>("/search/photos", {
    params: { query, page },
  });

  return response.data;
};