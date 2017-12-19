yarn run build:static
touch out/.nojekyll
git add out/
git commit -m "gh-pages deploy ($(date))"
git subtree push --prefix out origin gh-pages
