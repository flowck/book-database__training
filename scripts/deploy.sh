printf "Deploying to production \n\n"

#
# Build
#
npm run build

#
# Deploy to surge
#
surge

#
# Delete build files
#
rm -rf build

printf "\n\n Deployed to https://book-database.surge.sh"