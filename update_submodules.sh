# To clone the submodules
git submodule init
git submodule update

# To update all submodules:
git submodule update --remote

# To print a list of submodules
git config --file .gitmodules --get-regexp path | awk '{ print $2 }'
