const express = require('express');
const path = require('path');
const fs = require("fs"); 
const { getPageBySlug } = require('./stub/pages');
const app = express();

const PORT = process.env.PORT || 9000;
const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));
// here we serve the index.html page
app.get('/*', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        // console.log(req)
        // get post info
        const request_path = req?.params['0']
        // console.log(request_path)
        const pathArray = request_path?.split('/');
        // console.log(pathArray);
        let pageSlug = 'home'
        if( pathArray?.length >= 1 ) {
            if( pathArray[1] !== '' ) {
                pageSlug = pathArray[1]
            } else if( pathArray[0] !== '' && pathArray[0].length !== 2 ) {
                pageSlug = pathArray[0]
            }
        }
        const page = getPageBySlug(pageSlug);
        // console.log(page)
        // if(!page) return res.status(404).send("Post not found");

        // inject meta tags
        htmlData = htmlData.replace(
            "<title>Express Web Support</title>",
            `<title>${page.title}</title>`
        ).toString()
        .replace('__META_OG_TITLE__', page.title)
        .replace('__META_OG_DESCRIPTION__', page.description)
        .replace('__META_DESCRIPTION__', page.description)
        .replace('__META_OG_IMAGE__', page.thumbnail)
        return res.send(htmlData);
    });
});
// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});