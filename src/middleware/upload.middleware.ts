import multer from "multer";

const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

export const upload = multer({
    storage: multer.memoryStorage(),

    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB
    },

    fileFilter: (_req, file, cb) => {
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return cb(
                new Error(
                    "Tipo de arquivo inválido. Apenas JPEG, PNG e WebP são permitidos."
                )
            );
        }

        cb(null, true);
    },
});