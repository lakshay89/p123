"use client";
import React, { useState, useMemo } from "react";

const THICKNESS_OPTIONS = [
  { label: "3mm", key: "3mm" },
  { label: "5mm", key: "5mm" },
  { label: "8mm", key: "8mm" },
];

const THICKNESS_MULTIPLIERS = {
  "3mm": 1.0,
  "5mm": 1.15,
  "8mm": 1.3,
};

const BALLOON_PATH = `M 312 165.5 c -4 46.5 -14 87.5 -39 106.5 c -44 19 -79 14 -113 20 c -48 -25 -83 1 -105.6 -21.3 c -24.4 -26.7 15.6 -73.7 22.6 -107.7 c 13 -37 5 -83 33.4 -114.3 C 144 27 163 27 219 36 c 41 19.2 50 22.2 75 65.2 C 312 142 305 122 312 165.5 z`;

// Helper function to get size multiplier based on selected size
function getSizeMultiplier(selectedSize) {
  switch(selectedSize.label?.toLowerCase()) {
    case 'medium':
      return 1.1; // 10% larger than small
    case 'large':
      return 1.2; // 20% larger than small
    default: // 'small'
      return 1.0;
  }
}

const ProductModal1 = ({ product, onClose }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [thickness, setThickness] = useState("3mm");

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setUploadedImage(URL.createObjectURL(file));
  };

  const computedPrice = useMemo(() => {
    const base = Number(selectedSize.price) || 0;
    const mult = THICKNESS_MULTIPLIERS[thickness] ?? 1;
    return (base * mult).toFixed(2);
  }, [selectedSize, thickness]);

  // Only plain "Portrait Acrylic Wall Photo" is vertical
  const isPortrait =
    product.name.includes("Portrait Acrylic Wall Photo") &&
    !product.name.includes("Rounded Rect Portrait Acrylic Wall Photo");

  // Rounded corners for rectangle-rounded
  const hasRoundedBorders = product.orientation === "rectangle-rounded";

  // Get size multiplier based on selected size
  const sizeMultiplier = getSizeMultiplier(selectedSize);

  // Dynamic shadow based on thickness
  const getShadow = () => {
    switch (thickness) {
      case "3mm":
        return "0 4px 12px rgba(0,0,0,0.35)";
      case "5mm":
        return "0 8px 20px rgba(0,0,0,0.45)";
      case "8mm":
        return "0 12px 28px rgba(0,0,0,0.55)";
      default:
        return "0 6px 16px rgba(0,0,0,0.4)";
    }
  };

  // Get dimensions for labels
  const getDimensions = () => {
    const w = selectedSize.w || 9;
    const h = selectedSize.h || 12;
    return {
      width: w,
      height: h,
      widthCm: (w * 2.54).toFixed(2),
      heightCm: (h * 2.54).toFixed(2),
    };
  };

  const dimensions = getDimensions();

  // Calculate dynamic image dimensions based on selected size
  const getImageDimensions = () => {
    // Base dimensions for each type
    const basePortraitHeight = 180;
    const baseLandscapeWidth = 240;
    const baseCircleSize = 200;
    const baseBalloonSize = 240;

    if (product.name.includes("Balloon Shape Acrylic Wall Photo")) {
      const size = baseBalloonSize * sizeMultiplier;
      return {
        width: `${size}px`,
        height: `${size}px`,
      };
    } else if (product.orientation === "circle") {
      const size = baseCircleSize * sizeMultiplier;
      return {
        width: `${size}px`,
        height: `${size}px`,
      };
    } else {
      // For portrait/rectangle images
      if (isPortrait) {
        const height = basePortraitHeight * sizeMultiplier;
        return {
          width: `${height * 0.75}px`, // maintain 3:4 ratio
          height: `${height}px`,
        };
      } else {
        const width = baseLandscapeWidth * sizeMultiplier;
        return {
          width: `${width}px`,
          height: `${width * 0.75}px`, // maintain 4:3 ratio
        };
      }
    }
  };

  const imageDimensions = getImageDimensions();

  return (
    <div
      className="modal show fade d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        style={{ maxWidth: "1100px" }}
      >
        <div
          className="modal-content border-0 rounded-4 shadow-lg"
          style={{
            minHeight: "75vh",
            maxHeight: "92vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div className="modal-header border-0 px-4 pt-4 pb-0">
            <h4 className="fw-bold mb-0">{product.name}</h4>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          {/* Body */}
          <div
            className="modal-body px-4 pb-4 pt-2"
            style={{ overflow: "auto" }}
          >
            <div className="row g-4 align-items-stretch">
              {/* LEFT SIDE */}
              <div className="col-md-6 d-flex flex-column">
                {/* Upload */}
                <div
                  className="border rounded-4 flex-grow-1 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    borderStyle: "dashed",
                    borderWidth: "2px",
                    borderColor: "#dcdcdc",
                    backgroundColor: "#fafafa",
                    minHeight: "260px",
                    maxHeight: "48vh",
                    overflow: "hidden",
                    padding: "28px",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="d-none"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    style={{ cursor: "pointer" }}
                    className="text-center w-100"
                  >
                    <div
                      className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <i className="bi bi-cloud-upload fs-3 text-secondary"></i>
                    </div>
                    <div>
                      <p className="fw-semibold mb-1">Upload Your Photo</p>
                      <p className="small text-muted mb-1">
                        Drag and drop or click to browse
                      </p>
                      <p className="small text-muted">
                        Supports JPG, PNG, HEIC up to 50MB
                      </p>
                    </div>
                  </label>
                </div>

                {/* Size Selector */}
                <div className="mt-4">
                  <h6 className="fw-semibold mb-3">Select Size</h6>
                  <div className="d-flex flex-wrap gap-3">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(size)}
                        className={`btn border rounded-3 px-4 py-3 ${
                          selectedSize.label === size.label
                            ? "border-success bg-success bg-opacity-10"
                            : "border-secondary-subtle"
                        }`}
                        style={{ minWidth: "110px" }}
                      >
                        <div
                          className={`fw-semibold ${
                            selectedSize.label === size.label
                              ? "text-success"
                              : "text-dark"
                          }`}
                        >
                          {size.label}
                        </div>
                        <div className="small text-muted">
                          ${Number(size.price).toFixed(2)}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Thickness Selector */}
                <div className="mt-4">
                  <h6 className="fw-semibold mb-2">Acrylic Thickness</h6>
                  <div className="d-flex gap-2">
                    {THICKNESS_OPTIONS.map((t) => (
                      <button
                        key={t.key}
                        onClick={() => setThickness(t.key)}
                        className={`btn rounded-pill px-3 py-2 ${
                          thickness === t.key
                            ? "btn-outline-success border-success"
                            : "btn-outline-secondary"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <p className="small text-muted mt-2">
                    Thickness affects finish & price.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-md-6 d-flex flex-column">
                {/* Preview with Background Mockup and Dynamic Labels */}
                <div
                  className="border rounded-4 d-flex align-items-center justify-content-center position-relative"
                  style={{
                    minHeight: isPortrait ? "500px" : "400px",
                    maxHeight: "60vh",
                    overflow: "visible",
                    backgroundColor: "#f8f9fa",
                    padding: "18px",
                    backgroundImage: uploadedImage
                      ? "url('/mockup/wall-frame.png')"
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {uploadedImage ? (
                    <>
                      {/* Top Width Label */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          color: "#000",
                          fontWeight: "bold",
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          backgroundColor: "#fff",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          zIndex: 10,
                        }}
                      >
                        {dimensions.width} inches ({dimensions.widthCm} cm)
                      </div>

                      {/* Left Height Label (Rotated) */}
                      <div
                        style={{
                          position: "absolute",
                          left: "-30px",
                          top: "50%",
                          transform: "translateY(-50%) rotate(-90deg)",
                          color: "#000",
                          fontWeight: "bold",
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          backgroundColor: "#fff",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          zIndex: 10,
                        }}
                      >
                        {dimensions.height} inches ({dimensions.heightCm} cm)
                      </div>

                      {/* Bottom Thickness Label */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          color: "#000",
                          fontWeight: "bold",
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          backgroundColor: "#fff",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          zIndex: 10,
                        }}
                      >
                        Thickness: {thickness}
                      </div>

                      {/* Preview Image with Dynamic Scaling */}
                      <div
                        className="position-relative"
                        style={{
                          zIndex: 2,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {product.name.includes("Balloon Shape Acrylic Wall Photo") ? (
                          <svg
                            width={imageDimensions.width}
                            height={imageDimensions.height}
                            viewBox="0 0 360 360"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              // boxShadow: getShadow(),
                              borderRadius: "30px",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <defs>
                              <clipPath id="balloon-clip">
                                <path d={BALLOON_PATH} />
                              </clipPath>
                            </defs>
                            <image
                              href={uploadedImage}
                              width="360"
                              height="360"
                              style={{
                                clipPath: "url(#balloon-clip)",
                              }}
                              preserveAspectRatio="xMidYMid slice"
                            />
                          </svg>
                        ) : product.orientation === "circle" ? (
                          <div
                            className="mx-auto position-relative"
                            style={{
                              width: imageDimensions.width,
                              height: imageDimensions.height,
                              borderRadius: "50%",
                              overflow: "hidden",
                              boxShadow: getShadow(),
                              transition: "all 0.3s ease",
                            }}
                          >
                            <img
                              src={uploadedImage}
                              alt="preview"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        ) : (
                          <img
                            src={uploadedImage}
                            alt="preview"
                            style={{
                              width: imageDimensions.width,
                              height: imageDimensions.height,
                              aspectRatio: isPortrait ? "3 / 4" : "4 / 3",
                              objectFit: "cover",
                              borderRadius: hasRoundedBorders ? "20px" : "0px",
                              boxShadow: getShadow(),
                              transition: "all 0.3s ease",
                            }}
                          />
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-muted small text-center">
                      Upload a photo to see preview
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mt-4 border rounded-4 p-4 bg-white shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h6 className="mb-1 fw-semibold">{product.name}</h6>
                      <p className="small text-muted mb-0">
                        {selectedSize.label} • {thickness}
                      </p>
                    </div>
                    <h5 className="fw-bold text-success mb-0">
                      ${computedPrice}
                    </h5>
                  </div>

                  <button
                    className="btn btn-success w-100 rounded-3 fw-semibold py-2 mt-3"
                    disabled={!uploadedImage}
                    style={{
                      opacity: uploadedImage ? 1 : 0.7,
                      cursor: uploadedImage ? "pointer" : "not-allowed",
                    }}
                  >
                    {uploadedImage ? "Add to Cart" : "Upload Photo First"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal1;
