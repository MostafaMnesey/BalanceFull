import { useFormik } from "formik";
import gallerySvg from "../../../../assets/images/gallery.svg";
import videoSvg from "../../../../assets/images/video-play.svg";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";

export default function CreatePost({ refetch,type }) {
  const vaildationSchema = Yup.object().shape({
    content: Yup.string().required("Content is required"),
  });
  const [preview, setPreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      content: "",
      image: null,
    },
    validationSchema: vaildationSchema,
    onSubmit: async (values, helpers) => {
      console.log("submit");

      const { resetForm } = helpers;

      const formData = new FormData();
      formData.append("content", values.content);
      if (values.image) {
        formData.append("image", values.image);
      }

      try {
        const res = await axios.post(
          "https://beige-wildcat-74200.zap.cloud/api/posts",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("تم إنشاء المنشور:", res.data);
        resetForm(); // ✅ يمسح البيانات
        setPreview(null); // ✅ يمسح معاينة الصورة
        refetch();
      } catch (error) {
        console.error("خطأ أثناء إرسال المنشور:", error);
      }
    },
  });

   async function makePost(values, { resetForm })  {
      const formData = new FormData();
      formData.append("content", values.content);
      if (values.image) {
        formData.append("image", values.image);
      }

      try {
        if(type === "post"){
        const res = await axios.post(
          "https://beige-wildcat-74200.zap.cloud/api/posts",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );}else if(type === "challenge"){
          const res = await axios.post(
            "https://beige-wildcat-74200.zap.cloud/api/challenges",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
        }
        console.log("تم إنشاء المنشور:", res.data);
        resetForm();
        setPreview(null);
        refetch(); // لإعادة تحميل المنشورات
      } catch (error) {
        console.error("خطأ أثناء إرسال المنشور:", error);
      }
    
}

  const handleImageChange = (e) => {
    const file = e.currentTarget.files[0];
    formik.setFieldValue("image", file);

    // معاينة الصورة
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  return (
    <section>
      <div className="container">
        <div className="flex gap-4">
          <form className="w-[80%]" onSubmit={formik.handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="content"
                name="content"
                onChange={formik.handleChange}
                value={formik.values.content}
                onBlur={formik.handleBlur}
                className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-[100px] bg-[#F5F5F5] focus:outline-none"
                placeholder="What’s in your mind"
              />
              {formik.errors.content && formik.touched.content && (
                <p className="text-red-600 mt-2 flex justify-center">
                  {formik.errors.content}
                </p>
              )}
              <button
                type="submit"
                className={`absolute ${
                  formik.errors.content && formik.touched.content
                    ? "text-red-600 top-[15%] end-[6%]"
                    : "text-gray-500 top-[26%] end-[6%] "
                }  flex items-center ps-3 cursor-pointer`}
              >
                📤
              </button>
            </div>

            {/* زر رفع صورة */}
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-2 w-32 h-32 object-cover rounded"
              />
            )}
          </form>

          {/* أيقونات */}
          <div className="flex justify-center items-center gap-5">
            <label htmlFor="image" className="cursor-pointer">
              <img
                src={gallerySvg}
                alt="gallerySvg"
                className="transition-transform transform hover:scale-110"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
