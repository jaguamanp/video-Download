const youtubedl = require('youtube-dl-exec');
const express = require('express');
const ffmpeg = require('fluent-ffmpeg');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/download', async (req, res) => {
    try {
        console.log("Solicitud recibida");
        const { url, format } = req.body;
        console.log(url);

        if (!url || !format) {
            return res.status(400).json({
                status: 400,
                message: 'Faltan parámetros (url o formato)',
                data: null
            });
        }

        const title = `video_${Date.now()}`;
        const tempFilePath = path.resolve(__dirname+"/media", `${title}.${format}`);

        let objMp4 = {
            format: 'mp4',
            output: tempFilePath,
        };

        let objMp3 = { 
            extractAudio: true,
            audioFormat: 'mp3',
            output: tempFilePath
        };

        let objFormat = format === 'mp3' ? objMp3 : objMp4;

        youtubedl.exec(url, objFormat).then(() =>{
            res.status(200);
            let headerType=  format === 'mp3' ? 'audio/mpeg' : 'video/mp4';
            res.setHeader('Content-Type', headerType);
            res.setHeader('Content-Disposition', `attachment; filename="${title}.${format}"`);
            const fileStream = fs.createReadStream(tempFilePath);
            fileStream.pipe(res);

            fileStream.on('end', () => {
                fs.unlinkSync(tempFilePath);
            });
        });          

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: 'Error interno del servidor',
            data: null
        });
    }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});


