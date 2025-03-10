// "use client";
// import styles from "@/app/ui/dashpoard/products/addproduct/addproduct.module.css";
// import axios from "axios";
// import { useState, useRef, useEffect, use } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Image from "next/image";
// import AddImageButton from "./components/AddImageButton";
// import UploadCareButton from "./components/UploadCare";
// import * as filestack from 'filestack-js';
// import { useRouter } from "next/router";
// import { redirect } from "next/dist/server/api-utils";
// import { TbLoader, TbLoader2 } from "react-icons/tb";

// const AddProductPage = () => {
//   const mainImageRef = useRef(null);
//   const additionalImagesRef = useRef(null);
//   const [mainImage, setMainImage] = useState(null);
//   const [isLoading, setisLoading] = useState(false);
//   const [additionalImages, setAdditionalImages] = useState([]);
//   const [product, setProduct] = useState({
//     mainImage: "",
//     title: "",
//     location: "",
//     status: "available",
//     description: "",
//     address: "",
//     pdf: "",
//     map: "",
//     address: "",
//   });
//   useEffect(() => {}, [product]);
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {}, [additionalImagesRef]);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "map") {
//       setProduct({ ...product, map: value?.split(/src="/)[1]?.split('"')[0] });
//     } else {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         [name.toLowerCase()]: value,
//       }));
//     }
//     console.log(product);
//   };

//   const handleAdditionalImagesChange = (event) => {
//     const files = Array.from(event.target.files);
//     setAdditionalImages((prevImages) => [...prevImages, ...files]);
//   };

//   useEffect(() => {}, [product]);

//   const handleDeleteAdditionalImage = (index) => {
//     setAdditionalImages((prevImages) =>
//       prevImages.filter((_, i) => i !== index)
//     );
//   };

//   const openFilePicker = () => {
//     const client = filestack.init("A1C2M0j5SS1GEN2ZwMdbhz");
//     const options = {
//       maxFiles: 20,
//       uploadInBackground: false,
//       onUploadDone: (res) => console.log(res),
//     };
//     const picker = client.picker(options);
//     picker.open();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const jwt = localStorage.getItem("jwt");

//     if (!jwt) {
//       toast.error("Please log in to add the product.");
//       return;
//     }

//     try {
//       setisLoading(true);
//       await axios.post(`${apiUrl}/compound/add`, product, {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//         withCredentials: true,
//       });

//       toast.success("Compound added successfully!");
//       window.location.pathname = "/dashpoard/products";

//       setProduct({
//         mainImage: "",
//         title: "",
//         location: "",
//         status: "available",
//         description: "",
//         address: "",
//         pdf: "",
//         map: "",
//         video:"",
//         address: "",
//       });
//       setMainImage(null);
//       setAdditionalImages([]);
//     } catch (error) {
//       console.log(error);
//       console.error("Error adding apartment:", error);
//       console.error("Response data:", error?.response?.data);
//       toast.error(error?.response?.data.error);
//     } finally {
//       setisLoading(false);
//     }
//   };

//   return (
//     <section className={styles.container}>
//       <ToastContainer />
//       <section className="add-images flex justify-between items-start w-full">
//         {/* <AddImageButton
//           uniqueKey={"mainImage"}
//           id={"dsss"}
//           setProduct={setProduct}
//         /> */}{" "}
//         {/***cloudinary btn***/}
//         <div className={styles.infoContainer}>
//           <div className="btn-container flex text-center items-center justify-between gap-5">
//            <div className="flex gap-3">
//            <div className="add-mainImage">
//               <label className="my-5">Add Main Image</label>
//               <UploadCareButton
//                key={Math.floor(Math.random(1020 * 1))}
//                 setProduct={setProduct}
//                 uniqueKey={"mainImage"}
//                 className="mt-5"
//               />
//             </div>
//             <div className="add-video">
//               <label className="my-5">Add Video</label>
//               <UploadCareButton
//             key={Math.floor(Math.random(1020 * 4))}
//                 setProduct={setProduct}
//                 uniqueKey={"video"}
//                 className="mt-5"
//               />
//             </div>
//             <div className="add-pdf">
//               <label className="my-5">Add PDF</label>
//               <UploadCareButton
//               key={Math.floor(Math.random(100 * 2))}
//                 setProduct={setProduct}
//                 uniqueKey={"pdf"}
//                 className="mt-5"
//               />
//             </div>
//            </div>
//             <div className="w-[400px] h-[180px] relative bg-slate-800">
//               <Image
//                 src={product.mainImage ? product.mainImage : "/noproduct.jpg"}
//                 alt="mainImage"
//                 fill
//                 className="absolute rounded-md bg-cover"
//               />
//             </div>
            
//             {/* <div className="add-anotherImages">
//               <label className="my-5">Add Additional Images</label>
//               <UploadCareButton
//                 setProduct={setProduct}
//                 uniqueKey={"images"}
//                 isArray={true}
//                 className="mt-5"
//               />
//             </div> */}
//           </div>

//           <div className="flex flex-wrap gap-2 mt-4">
//             {additionalImages.map((image, index) => (
//               <div key={index} className="relative">
//                 <Image
//                   src={URL.createObjectURL(image)}
//                   alt={`Additional image ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className="rounded"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className={styles.formContainer}>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <label>Title</label>
//           <input
//             type="text"
//             name="title"
//             placeholder="title"
//             value={product.title}
//             onChange={handleChange}
//           />
//           <label>Location</label>
//           <input
//             type="text"
//             name="location"
//             placeholder="location"
//             value={product.location}
//             onChange={handleChange}
//           />
//           <label>Status</label>
//           <select
//             name="status"
//             id="status"
//             value={product.status || "available"}
//             onChange={handleChange}
//           >
//             <option value="available">Available</option>
//             <option value="soon">Soon</option>
//             <option value="sold">Sold</option>
//           </select>
//           <label>Map</label>
//           <input
//             type="text"
//             name="map"
//             placeholder="Map"
//             value={product.map}
//             onChange={handleChange}
//           />
//           <label>Address</label>
//           <input
//             type="text"
//             name="Address"
//             placeholder="Address"
//             value={product.address}
//             onChange={handleChange}
//           />
//           <label>Description</label>
//           <textarea
//             name="description"
//             id="description"
//             value={product.description}
//             onChange={handleChange}
//             placeholder="Description"
//             rows={5}
//             style={{ direction: "rtl" }}
//           ></textarea>
//           <button type="submit">
//             {isLoading ? (
//               <div className="w-full flex justify-center items-center">
//                 <div style={{ scale: 1.6 }} className="animate-spin">
//                   <TbLoader2 />
//                 </div>
//               </div>
//             ) : (
//               "Add Compound"
//             )}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default AddProductPage;
"use client";
import styles from "@/app/ui/dashpoard/products/addproduct/addproduct.module.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { TbLoader2 } from "react-icons/tb";

const AddProductPage = () => {
  const [mainImage, setMainImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    location: "",
    status: "available",
    description: "",
    address: "",
    map: "",
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "map") {
      setProduct({ ...product, map: value?.split(/src="/)[1]?.split('"')[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) setFile(file);
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setAdditionalImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      toast.error("Please log in to add the product.");
      return;
    }

    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => formData.append(key, value));
    if (mainImage) formData.append("mainImage", mainImage);
    if (video) formData.append("video", video);
    if (pdf) formData.append("pdf", pdf);
    additionalImages.forEach((image) => formData.append("additionalImages", image));

    try {
      setIsLoading(true);
      await axios.post(`${apiUrl}/compound/add`, formData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      toast.success("Compound added successfully!");
      window.location.pathname = "/dashpoard/products";
      setProduct({ title: "", location: "", status: "available", description: "", address: "", map: "" });
      setMainImage(null);
      setVideo(null);
      setPdf(null);
      setAdditionalImages([]);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error(error?.response?.data?.error || "Failed to add product.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <ToastContainer />
      <section className="add-images flex justify-between items-start w-full">
        <div className={styles.infoContainer}>
          <div className="btn-container flex text-center items-center justify-between gap-5">
            <div className="flex gap-3">
              <div>
                <label className="my-5">Add Main Image</label>
                <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setMainImage)} />
              </div>

              <div>
                <label className="my-5">Add Video</label>
                <input type="file" accept="video/*" onChange={(e) => handleFileChange(e, setVideo)} />
              </div>

              <div>
                <label className="my-5">Add PDF</label>
                <input type="file" accept="application/pdf" onChange={(e) => handleFileChange(e, setPdf)} />
              </div>
            </div>

            <div className="w-[400px] h-[180px] relative bg-slate-800">
              {mainImage ? (
                <Image
                  src={URL.createObjectURL(mainImage)}
                  alt="Main Image"
                  fill
                  className="absolute rounded-md bg-cover"
                />
              ) : (
                <Image src="/noproduct.jpg" alt="No Product" fill className="absolute rounded-md bg-cover" />
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {additionalImages.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Additional image ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleChange} />

          <label>Location</label>
          <input type="text" name="location" placeholder="Location" value={product.location} onChange={handleChange} />

          <label>Status</label>
          <select name="status" value={product.status} onChange={handleChange}>
            <option value="available">Available</option>
            <option value="soon">Soon</option>
            <option value="sold">Sold</option>
          </select>

          <label>Map</label>
          <input type="text" name="map" placeholder="Map" value={product.map} onChange={handleChange} />

          <label>Address</label>
          <input type="text" name="address" placeholder="Address" value={product.address} onChange={handleChange} />

          <label>Description</label>
          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            rows={5}
            style={{ direction: "rtl" }}
          ></textarea>

          <button type="submit">
            {isLoading ? (
              <div className="w-full flex justify-center items-center">
                <div style={{ scale: 1.6 }} className="animate-spin">
                  <TbLoader2 />
                </div>
              </div>
            ) : (
              "Add Compound"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;
