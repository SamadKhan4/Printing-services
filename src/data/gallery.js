const assetModules = import.meta.glob("../assets/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default"
});

const categoryNames = {
  A1: "A1 Collection",
  Other: "Mugs & Drinkware",
  product: "Products & Printing",
  "T-shirts": "T-Shirts"
};

const titleOverrides = {
  dtf: "DTF Printing",
  emrodiprint: "Embroidery Print",
  idcard: "ID Cards",
  matmug: "Matte Mug",
  photomug: "Photo Mug",
  screenprinting: "Screen Printing",
  sublimation: "Sublimation Printing",
  vinyle: "Vinyl Printing",
  "welcom-kit": "Welcome Kit"
};

function toTitle(fileName) {
  const baseName = fileName.replace(/\.[^.]+$/, "");

  if (titleOverrides[baseName]) {
    return titleOverrides[baseName];
  }

  return baseName
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function sortGalleryItems([leftPath], [rightPath]) {
  return leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: "base" });
}

export const galleryItems = Object.entries(assetModules)
  .sort(sortGalleryItems)
  .map(([path, image]) => {
    const parts = path.split("/");
    const folder = parts[2];
    const fileName = parts.at(-1);

    return {
      title: toTitle(fileName),
      category: categoryNames[folder] ?? folder,
      image
    };
  });
