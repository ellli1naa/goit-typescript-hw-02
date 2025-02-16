import { useState, useEffect } from "react";
import { fetchGalleryPhotos, UnsplashPhoto } from "./api/photos-api";
import Searchbar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchGalleryPhotos(query, page);
        
        if (data.results.length === 0) {
          toast.error("Зображення не знайдено!");
          return;
        }

        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError("Не вдалося завантажити зображення");
        toast.error("Помилка завантаження");
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  return (
    <div>
      <Searchbar onSubmit={(newQuery) => {
        if (newQuery !== query) {
          setQuery(newQuery);
          setImages([]);
          setPage(1);
        }
      }} />
      
      {error && <ErrorMessage message={error} />}
      
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      
      {loading && <Loader />}
      
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      <Toaster position="top-right" />
    </div>
  );
};

export default App;