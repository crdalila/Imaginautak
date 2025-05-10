import multer from 'multer';

// configurar el almacenamiento de las imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // dónde se guardan las imágenes
    },
    filename: function (req, file, cb) {
        const imageName = file.originalname.split('.')[0]; // nombre original del archivo
        const now = Date.now();
        const ext = file.originalname.split('.').pop(); // extensión del archivo
        cb(null, `${imageName}-${now}.${ext}`); // nombre del archivo que vamos a sacar
    }
});

// crear instancia de multer
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (allowedTypes.includes(file.mimetype)) {
          cb(null, true);
      } else {
          cb(new Error('Solo se permiten imágenes .jpg, .png y .webp'));
      }
  }
});

// para imágenes de FAN (solo 1)
export const uploadFanImg = upload.single('img');

// para imágenes de ARTIST (hasta 3)
export const uploadArtistImgs = upload.array('img', 3);

// para imagenes de PROJECT (hasta 10)
export const uploadProjectImgs = upload.array('project_imgs', 10);