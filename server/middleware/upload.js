import multer from "multer";

// store file in memory (RAM)
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,

  // limit file size to 5MB
  limits: {
    fileSize: 5 * 1024 * 1024
  },

  // allow only image files
  fileFilter: (req, file, cb) => {

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif"
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); // accept file
    } else {
      cb(new Error("Only image files are allowed"), false); // reject
    }
  }
});

export default upload;