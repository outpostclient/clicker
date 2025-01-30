import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [blogListUsingCategorySlug, setBlogListUsingCategorySlug] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  const [blogListExcludeCurrent, setblogListExcludeCurrent] = useState([]);
  const [categorysWithBlogs, setCategorysWithBlogs] = useState([]);
  const [parentCategorysWithBlogs, setParentCategorysWithBlogs] = useState([]);
  const [
    fetchCategoryForCategoryFeatureNotNull,
    setFetchCategoryForCategoryFeatureNotNull,
  ] = useState([]);
  const [pageViewState, setpageViewState] = useState([]); // Likes state

  const [fetchSitePageRecordUsingSlug, setFetchSitePageRecordUsingSlug] =
    useState(null);

  const fetchBlogsListUsingCategorySlug = async (slug) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories/${slug}`
      );
      setBlogListUsingCategorySlug(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error fetching categories", error);
      setLoading(false);
    }
  };

  const fetchSingleBlogData = async (slug) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/blogs/${slug}`
      );
      setSingleBlog(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error fetching categories", error);
      setLoading(false);
    }
  };

  const fetchSitePageRecord = useCallback(async (sitepage_slug) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/sitepage/${sitepage_slug}/`
      );
      setFetchSitePageRecordUsingSlug(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error in fetching the fetchSitePageRecord", error);
      setLoading(false);
    }
  }, []);

  const fetchBlogListExcludeCurrent = useCallback(
    async (category_id, current_blog_id) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/blogs/category/${category_id}/exclude/${current_blog_id}/`
        );
        setblogListExcludeCurrent(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error fetching categories", error);
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const fetchCategorysWithBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/categories-with-blogs/`
        );
        setCategorysWithBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in fetching the Category With Blogs", error);
        setLoading(false);
      }
    };
    fetchCategorysWithBlogs();
  }, []);

  useEffect(() => {
    const fetchParentCategorysWithBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/parent-categories/`
        );
        setParentCategorysWithBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in fetching the Category With Blogs", error);
        setLoading(false);
      }
    };
    fetchParentCategorysWithBlogs();
  }, []);

  useEffect(() => {
    const fetchCategoryForCategoryFeatureNotNull = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/category-names/`
        );
        setFetchCategoryForCategoryFeatureNotNull(response.data);
        setLoading(false);
      } catch (error) {
        console.log(
          "Error in Fetching the setFetchCategoryForCategoryFeatureNotNull",
          error
        );
        setLoading(false);
      }
    };
    fetchCategoryForCategoryFeatureNotNull();
  }, []);

  const blogPageView = async (blogId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/blogs/${blogId}/view/`
      );
      console.log("reposne of page view", response.data);
      setpageViewState(response.data.pageview);
      setLoading(false);
    } catch (error) {
      console.error(`Error toggling like for blog ${blogId}:`, error);
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      loading,
      singleBlog,
      blogListExcludeCurrent,
      categorysWithBlogs,
      parentCategorysWithBlogs,
      fetchCategoryForCategoryFeatureNotNull,
      fetchSitePageRecordUsingSlug,
      pageViewState,
      blogListUsingCategorySlug,
      blogPageView,
      fetchSingleBlogData,
      fetchBlogListExcludeCurrent,
      fetchSitePageRecord,
      fetchBlogsListUsingCategorySlug,
    }),
    [
      loading,
      singleBlog,
      blogListExcludeCurrent,
      categorysWithBlogs,
      parentCategorysWithBlogs,
      fetchCategoryForCategoryFeatureNotNull,
      fetchSitePageRecordUsingSlug,
      pageViewState,
      blogListUsingCategorySlug,
      blogPageView,
      fetchSingleBlogData,
      fetchBlogListExcludeCurrent,
      fetchSitePageRecord,
      fetchBlogsListUsingCategorySlug,
    ]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
