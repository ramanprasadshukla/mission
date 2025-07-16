// import React from "react";
import { useState } from "react";

const labs = [
  {
    name: "Physics Lab",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlHdv5Esp3nwreDJm6mywt-8TNaLW0elncQ&s",
    description:
      "Our Physics Lab is equipped with modern apparatus for experiments in mechanics, optics, electricity, and more.",
  },
  {
    name: "Chemistry Lab",
    image: "https://news.yale.edu/sites/default/files/d6_files/White-coats.jpg",
    description:
      "The Chemistry Lab provides a safe environment for students to conduct chemical experiments and learn practical skills.",
  },
  {
    name: "Biology Lab",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiYH1BGxBJE6ORQVmTZYhagAi3KB5i84Sag&s",
    description:
      "Our Biology Lab is designed for hands-on learning in botany, zoology, and microbiology with advanced microscopes and models.",
  },
  {
    name: "Computer Lab",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbmG65vk9vnporMBcMS7judZD4Yph7X9xgw&s",
    description:
      "The Computer Lab features up-to-date computers and software, supporting programming, research, and digital learning.",
  },
  {
    name: "Library",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9amkBXp86UPAAQJvpp3LipfzCCDfn16zEg&s",
    description:
      "The Library is a quiet place for study and research, offering a vast collection of books and digital resources.",
  },
];


const Five = (props) => (
  <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
      Science & Computer Labs
    </h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
      }}
    >
      {labs.map((lab) => (
        <div
          key={lab.name}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            background: "#fafafa",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            cursor: "pointer",
          }}
          onClick={() => props.onLabClick(lab.name)}
        >
          <img
            src={lab.image}
            alt={lab.name}
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
          <div style={{ padding: "1rem" }}>
            <h2 style={{ margin: "0 0 0.5rem 0" }}>{lab.name}</h2>
            <p style={{ color: "#555" }}>{lab.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


const labGalleries = {
  "Physics Lab": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlHdv5Esp3nwreDJm6mywt-8TNaLW0elncQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlHdv5Esp3nwreDJm6mywt-8TNaLW0elncQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlHdv5Esp3nwreDJm6mywt-8TNaLW0elncQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlHdv5Esp3nwreDJm6mywt-8TNaLW0elncQ&s",
  ],
  "Chemistry Lab": [
    "https://news.yale.edu/sites/default/files/d6_files/White-coats.jpg",
    "https://maths.du.ac.in/wp-content/uploads/2024/09/Lab1-1.jpg",
    "https://news.yale.edu/sites/default/files/d6_files/White-coats.jpg",
    "https://news.yale.edu/sites/default/files/d6_files/White-coats.jpg",
  ],
  "Biology Lab": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiYH1BGxBJE6ORQVmTZYhagAi3KB5i84Sag&s",
    "https://maths.du.ac.in/wp-content/uploads/2024/09/Lab1-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbmG65vk9vnporMBcMS7judZD4Yph7X9xgw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiYH1BGxBJE6ORQVmTZYhagAi3KB5i84Sag&s",
  ],
  "Computer Lab": [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://maths.du.ac.in/wp-content/uploads/2024/09/Lab1-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbmG65vk9vnporMBcMS7judZD4Yph7X9xgw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKSEIK6gtLHLUz6DluqboCYYlmdZODQn-VQ&s",
  ],
  "Library": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9amkBXp86UPAAQJvpp3LipfzCCDfn16zEg&s",
    "https://maths.du.ac.in/wp-content/uploads/2024/09/Lab1-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbmG65vk9vnporMBcMS7judZD4Yph7X9xgw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKSEIK6gtLHLUz6DluqboCYYlmdZODQn-VQ&s",
  ],
};

function GalleryModal({ open, images, onClose, labName }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "2rem",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 style={{ marginTop: 0 }}>{labName} Gallery</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${labName} ${idx + 1}`}
              style={{
                width: "400px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "6px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


const FiveWithGallery = () => {
  const [openLab, setOpenLab] = useState(null);
  return (
    <>
      <Five onLabClick={setOpenLab} />
      <GalleryModal
        open={!!openLab}
        images={labGalleries[openLab] || []}
        onClose={() => setOpenLab(null)}
        labName={openLab}
      />
    </>
  );
};

export default FiveWithGallery;

