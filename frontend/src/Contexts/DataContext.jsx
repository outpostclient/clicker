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
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  const [blogListExcludeCurrent, setblogListExcludeCurrent] = useState([]);
  const [categorysWithBlogs, setCategorysWithBlogs] = useState([]);
  const [parentCategorysWithBlogs, setParentCategorysWithBlogs] = useState([]);
  const [fetchCategoryForCategoryFeatureNotNull, setFetchCategoryForCategoryFeatureNotNull] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/categories/`
        );
        setCategories(response.data);
      } catch (error) {
        console.log("error fetching categories", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blogs/`);
        setBlogs(response.data);
      } catch (error) {
        console.log("error fetching categories", error);
      }
    };
    fetchBlogsData();
  }, []);

  const fetchSingleBlogData = async (slug) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/blogs/${slug}`
      );
      setSingleBlog(response.data);
    } catch (error) {
      console.log("error fetching categories", error);
    }
  };

  const fetchBlogListExcludeCurrent = useCallback(
    async (category_id, current_blog_id) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/blogs/category/${category_id}/exclude/${current_blog_id}/`
        );
        setblogListExcludeCurrent(response.data);
      } catch (error) {
        console.log("error fetching categories", error);
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
      } catch (error) {
        console.log("Error in fetching the Category With Blogs", error);
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
      } catch (error) {
        console.log("Error in fetching the Category With Blogs", error);
      }
    };
    fetchParentCategorysWithBlogs();
  }, []);

  useEffect(() => {
    const fetchCategoryForCategoryFeatureNotNull = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/category-names/`)
        setFetchCategoryForCategoryFeatureNotNull(response.data);
      } catch (error) {
        console.log("Error in Fetching the setFetchCategoryForCategoryFeatureNotNull",error);
      }
    }
    fetchCategoryForCategoryFeatureNotNull();
  },[])

  const value = useMemo(
    () => ({
      categories,
      blogs,
      singleBlog,
      blogListExcludeCurrent,
      categorysWithBlogs,
      parentCategorysWithBlogs,
      fetchCategoryForCategoryFeatureNotNull,
      fetchSingleBlogData,
      fetchBlogListExcludeCurrent,
    }),
    [
      categories,
      blogs,
      singleBlog,
      blogListExcludeCurrent,
      categorysWithBlogs,
      parentCategorysWithBlogs,
      fetchCategoryForCategoryFeatureNotNull,
      fetchSingleBlogData,
      fetchBlogListExcludeCurrent,
    ]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
