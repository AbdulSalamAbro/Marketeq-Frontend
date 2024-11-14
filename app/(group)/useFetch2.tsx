import { useState, useEffect } from "react";

interface Image {
    url: string;
  }
  

interface ElementData {
  title: string;
  description: string;
  button: string;
  image: Image[];
  span:string;
s1:any
s2:any;
s3:any
s4:any
s5:any
}

const useFetch2 = (url: string) => {
  const [data, setData] = useState<ElementData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const response = await fetch(baseUrl + url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    getData();

    return () => {
      setData(null);
      setError(null);
    };
  }, [url, baseUrl]);

  return { data, error, baseUrl };
};

export default useFetch2;
