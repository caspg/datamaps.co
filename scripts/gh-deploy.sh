yarn run build:static
touch out/.nojekyll
git add out/
git commit -m \"Deploy app to gh-pages\"
git subtree push --prefix out origin gh-pages
