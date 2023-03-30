import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoPrefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries"

const sass = gulpSass(dartSass);
 //Стандартный css
    //.pipe(app.gulp.dest(app.path.build.css))
export const scss = () =>{
    return app.gulp.src(app.path.src.scss,{sourcemaps:app.isDev})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            "title":"SCSS",
            "message": "Error: <%= error.message %>"
        }))
    )
    .pipe(sass({
        "outputStyle":"expanded"
    }))
    .pipe(rename({
        "extname":".min.css"
    }))
    .pipe(app.plugins.if(app.isBuild,
        autoPrefixer({
            grid:true,
            overrideBrowserslist:["last 3 versions"],
            cascade:true
        }))
    )
    .pipe(app.plugins.if(app.isBuild,
        groupCssMediaQueries())
    )
    .pipe(app.plugins.if(app.isBuild,
        cleanCss())
    )
    .pipe(app.plugins.if(app.isBuild,
        webpcss({
            webpClass:".webp",
            nowebpClass:".no-webp"
        }))
    )
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
}