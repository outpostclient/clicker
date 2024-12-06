import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Contexts/DataContext";

const useFetchSitePageRecords = (slug) => {
  const { fetchSitePageRecordUsingSlug, fetchSitePageRecord } =
    useContext(DataContext);

  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      setError(null);

      try {
        await fetchSitePageRecord(slug);
      } catch (error) {
        setError("Error fetching page data");
      }
    };
    fetchData();
  }, [slug, fetchSitePageRecord]);

  useEffect(() => {
    if (fetchSitePageRecordUsingSlug) {
      setRecord(fetchSitePageRecordUsingSlug);
    }
  }, [fetchSitePageRecordUsingSlug]);
  return { record, error };
};

export default useFetchSitePageRecords;
